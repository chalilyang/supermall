<template>
  <div id="main-tab-bar">
    <router-view></router-view>
    <tab-bar>
      <!-- 在dom里面使用别名~ -->
      <tab-bar-item path="/home" activeColor="#F63619">
        <template #item-icon>
          <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <template #item-icon-active>
          <img slot="item-icon" src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template #item-text>
          <div slot="item-text">首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#F63619">
        <template #item-icon>
          <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        </template>
        <template #item-icon-active>
          <img slot="item-icon" src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template #item-text>
          <div slot="item-text">分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="#F63619">
        <template #item-icon>
          <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template #item-icon-active>
          <img slot="item-icon" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template #item-text>
          <div slot="item-text">购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/user" activeColor="#F63619">
        <template #item-icon>
          <img slot="item-icon" src="~assets/img/tabbar/user.svg" alt="">
        </template>
        <template #item-icon-active>
          <img slot="item-icon" src="~assets/img/tabbar/user_active.svg" alt="">
        </template>
        <template #item-text>
          <div slot="item-text">我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/tabbar'
  import TabBarItem from 'components/common/tabbar/tabbaritem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    },
  }
</script>

<style scoped>

</style>