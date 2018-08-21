const { stringifyGender, splitName, zipInCity } = require('./transformations')

const changes = {
  '2018-06-13': stringifyGender,
  '2018-03-23': splitName,
  '2017-11-14': zipInCity
}

function applyVersionChanges(data, version) {
  const apiVersions = Object.keys(changes).reverse()
  let response

  return apiVersions.reduce((accum, apiVersion) => {
    if (+new Date(version) <= +new Date(apiVersion)) {
      const transformation = changes[apiVersion](data)
      return {
        ...accum,
        ...transformation.result
      }
    }
    return accum
  }, data)
}

module.exports = applyVersionChanges
