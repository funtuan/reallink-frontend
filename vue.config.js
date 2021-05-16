module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  css:{
    loaderOptions:{
      scss:{
        prependData: `@import "~@/assets/scss/global.scss";`
      }
    }
  }
}
