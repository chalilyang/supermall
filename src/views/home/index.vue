<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :bannerList="bannerList" />
    <home-recommend :recommendList="recommendList"/>
    <home-feature/>
    <tab-control :titles="titles" class="tabcontrol" @tabClick="tabClick"/>
    <goods-list :goodsList="showGoods"/>
  </div>
</template>
<script>
import { getHomeMultiData, getGoodsList } from 'network/home'

import HomeSwiper from './childComp/HomeSwiper'
import HomeRecommend from './childComp/HomeRecommend'
import HomeFeature from './childComp/HomeFeature.vue'

import NavBar from 'components/common/navbar/navbar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'

export default {
  name: 'Home', 
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeature,

    NavBar,
    TabControl,
    GoodsList,
  },
  data () {
    return {
      bannerList: [],
      recommendList: [],
      tabOffsetTop: 0,
      titles: ['流行','新款','精选'],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []},
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  created() {
    this.getHomeData();
    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell');
  },
  methods: {
    getHomeData() {
      getHomeMultiData().then(res => {
        this.bannerList = res.data.banner.list;
        this.recommendList = res.data.recommend.list;
      })
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getGoodsList(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      })
    },

    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break
        case 2:
          this.currentType = 'sell';
          break
      }
    }
    /* swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    } */
  }
}
</script>
<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }
  .tabcontrol {
    position: sticky;
    top: 44px;
    background: #fff;
    z-index: 3;
  }
</style>