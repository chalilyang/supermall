<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in bannerList" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'

export default {
  name: 'HomeSwiper', 
  components: {
    Swiper, SwiperItem
  },
  props: {
    bannerList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  created() {},
  methods: {
    imgLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImgLoad')
        this.isLoad = true;
      }
    }
  }
}
</script>
<style scoped>
</style>