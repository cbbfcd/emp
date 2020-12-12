module.exports = ({config, env}) => {
  config.devServer.port(8001)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: 'demo1',
        filename: 'emp.js',
        remotes: {
          '@emp/svetleComponents': 'svetleComponents@http://localhost:8008/emp.js',
        },
        exposes: {
          './configs/index': 'src/configs/index',
        },
        shared: ['react', 'react-dom'],
      },
    }
    return args
  })
}
