module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/pricing-componant/' : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
