function stringifyGender(data) {
  const description =
    'Turn the "gender" attribute from a boolean into a string.'
  let result = data
  let isFemale = true

  if (typeof data.gender === 'string') {
    if (data.gender === 'male') {
      isFemale = false
    }
  }

  result = {
    gender: isFemale
  }

  return {
    description,
    result
  }
}

module.exports = stringifyGender
