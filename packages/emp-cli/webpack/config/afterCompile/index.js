const {style} = require('./style')
module.exports = (empConfig, env) => {
  const config = style(empConfig, env)
  return config
}
