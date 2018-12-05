const convertApi = require('duv-api-util')
const loaderUtils = require('loader-utils')
module.exports = function (content) {
  let options = loaderUtils.getOptions(this)||{}
  return convertApi(content, {
    type: options.duvType
  })
}
