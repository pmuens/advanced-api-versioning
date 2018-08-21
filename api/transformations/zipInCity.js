function zipInCity(data) {
  const description =
    'Moves the "zip" into the "city" attribute. Removes the "zip" attribute'
  let result = data

  if (data.city) {
    const zip = data.city.split(' ')[0]
    const city = data.city
      .split(' ')
      .splice(1)
      .pop()

    result = {
      zip,
      city
    }
  }

  return {
    description,
    result
  }
}

module.exports = zipInCity
