<template>
  <div class="goods">
    <goods-list-item v-for="item in goodsList" :goodsItem="item" :key="item.showId"/>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: 'GoodsList', 
  components: {GoodsListItem},
  props: {
    goodsList: {
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
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* padding: 0 2px; */
  }
</style>