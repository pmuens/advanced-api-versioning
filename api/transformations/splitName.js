function splitName(data) {
  const description =
    'Splits the "name" attribute into "firstName" and "lastName".'
  let result = data

  if (data.firstName && result.lastName) {
    const name = `${data.firstName} ${data.lastName}`

    result = {
      name
    }
  }

  return {
    description,
    result
  }
}

module.exports = splitName
