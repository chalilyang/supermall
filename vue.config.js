module.exports = {
  configureWebpack: {
    name: 'supermall',
    resolve: {
      /* 别名    @相当于src  */
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'router': '@/router',
        'views': '@/views'
      }
    }
    
  }
}