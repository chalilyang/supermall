<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator" v-if="slideCount > 1">
        <div v-for="(item, index) in slideCount" :key="index" class="indi-item" :class="currIndex-1==index?'active':''"></div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Swiper1', 
  components: {},
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 1000
    },
    moveRatio: {
      type: Number,
      default: 0.25
    }
  },
  data () {
    return {
      slideCount: 0,
      totalWidth: 0,
      currIndex: 1,
      swiperStyle: {},
      scrolling: false,
      currentX: 0,
      playTimer: null,
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 100);
  },
  methods: {
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currIndex++;
        this.scrollContent(-this.currIndex * this.totalWidth)
      }, this.interval)
    },
    stopTimer() {
      window.clearInterval(this.playTimer)
    },
    scrollContent(currentPosition) {
      this.scrolling = true;
      this.swiperStyle.transition =  'transform '+ this.animDuration + 'ms'
      this.setTransform(currentPosition);
      this.checkPosition();
      this.scrolling = false;
    },
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms'
        if(this.currIndex >= this.slideCount + 1) {
          this.currIndex = 1;
          this.setTransform(-this.currIndex * this.totalWidth)
        }else if(this.currIndex <= 0) {
          this.currIndex = this.slideCount;
          this.setTransform(-this.currIndex * this.totalWidth)
        }
        this.$emit('transitionEnd', this.currIndex-1);
      }, this.animDuration)
    },
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`
    },
    handleDom() {
      let swiper = document.querySelector('.swiper')
      let slides = document.querySelectorAll('.slide');
      this.slideCount = slides.length;
      if(this.slideCount > 1) {
        let cloneFirst = slides[0].cloneNode(true);
        let cloneLast = slides[this.slideCount - 1].cloneNode(true);
        swiper.insertBefore(cloneLast, slides[0]);
        swiper.appendChild(cloneFirst);
        this.totalWidth = swiper.offsetWidth;
        this.swiperStyle = swiper.style;
      }
      
      this.setTransform(-this.totalWidth)
    },
    
    
    
    
    handleTouchStart(e) {
      if(this.scrolling) return;
      this.stopTimer();
      this.startX = e.touches[0].pageX

    },
    handleTouchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;
      this.setTransform(moveDistance)
    },
    handleTouchEnd(e) {
      let currentMove = Math.abs(this.distance)
      console.log(currentMove/this.totalWidth)
      if(this.distance == 0) {
        return
      }if(this.distance > 0 && currentMove/this.totalWidth > this.moveRatio) {
        this.currIndex--
      }else if(this.distance < 0 && currentMove/this.totalWidth > this.moveRatio) {
        this.currIndex++
      }
      this.scrollContent(-this.currIndex * this.totalWidth);
      this.startTimer();
    },
  }
}
</script>
<style scoped>
  #hy-swiper {
    position: relative;
    overflow: hidden;
  }
  .swiper {
    display: flex;
  }
  .indicator {
    display: flex;
    position: absolute;
    bottom: 10px;
    width: 100%;
    justify-content: center;
  }
  .indi-item {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #fff;
    margin-left: 5px;
  }
  .indi-item.active {
    background: #f00;
  }
</style>