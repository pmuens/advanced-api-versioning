const applyVersionChanges = require('./api/main')

const johnDoe = {
  version: '2018-03-23',
  db: {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'male',
    city: '63101 St. Louis'
  },
  expectedResponse: {
    name: 'John Doe',
    gender: false,
    city: '68901 Hastings'
  }
}

const janeDoe = {
  version: '2018-06-13',
  db: {
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'female',
    city: '59044 Laurel'
  },
  expectedResponse: {
    firstName: 'Jane',
    lastName: 'Doe',
    gender: true,
    city: '68901 Hastings'
  }
}

const jasmineDoe = {
  version: '2018-08-20',
  db: {
    firstName: 'Jasmine',
    lastName: 'Doe',
    gender: 'female',
    city: '68901 Hastings'
  },
  expectedResponse: {
    firstName: 'Jasmine',
    lastName: 'Doe',
    gender: 'female',
    city: '68901 Hastings'
  }
}

console.log('--- Computing API response for "John Doe" ---')
const johnResp = applyVersionChanges(johnDoe.db, johnDoe.version)
console.log(johnResp)
console.log()

console.log('--- Computing API response for "Jane Doe" ---')
const janeResp = applyVersionChanges(janeDoe.db, janeDoe.version)
console.log(janeResp)
console.log()

console.log('--- Computing API response for "Jasmine Doe" ---')
const jasmineResp = applyVersionChanges(jasmineDoe.db, jasmineDoe.version)
console.log(jasmineResp)
console.log()
