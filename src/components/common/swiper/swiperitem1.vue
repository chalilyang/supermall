<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SwiperItem1', 
  components: {},
  data () {
    return {
    }
  },
  created() {},
  methods: {}
}
</script>
<style>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }
</style>