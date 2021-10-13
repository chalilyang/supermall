<template>
  <div class="recommend">
    <div v-for="(item, index) in recommendList" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend', 
  components: {},
  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  created() {},
  methods: {}
}
</script>
<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 68px;
    height: 68px;
    margin-bottom: 10px;
  }
</style>