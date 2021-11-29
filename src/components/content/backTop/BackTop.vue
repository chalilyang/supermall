<template>
  <div class="backTop">
    <img src="~assets/img/common/top.svg" alt="">
  </div>
</template>
<script>
export default {
  name: 'BackTop', 
  components: {},
  data () {
    return {
    }
  },
  created() {},
  methods: {}
}
</script>
<style scoped>
  .backTop {
    position: absolute;
    bottom: 50px;
    right: 20px;
  }
  .backTop img {
    width: 30px;
    height: 30px;
  }
</style>