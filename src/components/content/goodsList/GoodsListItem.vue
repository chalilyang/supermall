<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img">
    </a>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <img src="~assets/img/home/collect_icon.png">
      <span class="collect">{{goodsItem.cfav}}</span>
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsListItem', 
  components: {},
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
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
  .goods-item {
    width: 48%;
    position: relative;
    padding-bottom: 40px;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    position: absolute;
    bottom: 4px;
    left: 0;
    font-size: 12px;
    width: 100%;
    /* display: flex; */
    text-align: center;
  }
  .goods-info p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price {
    color: var(--color-tint);
  }
  .goods-info img {
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: bottom;
  }
</style>