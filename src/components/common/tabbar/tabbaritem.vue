<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActiveStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <div :class="isActive?'isActive':''">
      <slot name="item-text"></slot>
    </div> -->
    
    
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    data() {
      return {
        // isActive: false,
      }
    },
    props: {
      path: String,
      activeColor: String
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      },
      isActiveStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push({path: this.path})
      }
    }
  }
</script>

<style scoped>
/*   .isActive {
    color: #3791bf
  } */
</style>