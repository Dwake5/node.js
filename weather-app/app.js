const request = require('request')
const secret = '9894b0efa2784263e1739ffb0b880c46'
const url = `https://api.darksky.net/forecast/${secret}/37.8267,-122.4233`

request({ url: url, json: true}, (error, response) => {
    const current = response.body.currently
    const daily = response.body.daily
    console.log(daily.data[0].summary + ` It is currently ${current.temperature} degress out with a ${current.precipProbability}% chance of rain`)
})

const mapBoxToken = 'pk.eyJ1IjoiZHdha2VzIiwiYSI6ImNqem9lb3JpYzA0ajgzb3A5MnJ5YThrb3UifQ.nKPGKKT3nGALq4dXe35Ipw'
const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=" + mapBoxToken

request({ url: mapBoxUrl, json: true}, (error, response) => {
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]
    console.log(`Longitude is ${longitude} and latitude is ${latitude}`)
})