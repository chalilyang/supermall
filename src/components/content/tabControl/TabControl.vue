<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="index" :class="{active: currentIndex === index}" @click="tabItemClick(index)">
      <div><span>{{item}}</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl', 
  components: {},
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  created() {},
  methods: {
    tabItemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    },
  }
}
</script>
<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 3px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>