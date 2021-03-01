module.exports = {
  style(config, env) {
    const isDev = env === 'development'
    // 解决 publicPath 被 auto 覆盖
    config.module
      .rule('css')
      .use('style')
      .tap(option => {
        const publicPath = config.output.get('publicPath')
        if (!isDev) {
          option.publicPath = publicPath !== 'auto' ? publicPath : '/'
        }
        return option
      })

    return config
  },
}
