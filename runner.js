const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1ZDdiNjZlLWYyMzQtNGRjYy05YTU4LTc5Mzk1ZTQ4NzIzZi0xNzEzMjg5MjgyMjI1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDFlZDdkZTMtMWQxZC00ZDA1LWJlN2ItOTNlOWVlZDI3ZWRhIiwidHlwZSI6InQifQ.JF69BEPcrUAwbSJcuZ-xf6LJ7OaEAkA5Wuo8kMlvQPs'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
