const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else
    geocode(address, (error, { latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })

// Mapbox token = 'pk.eyJ1IjoiZHdha2VzIiwiYSI6ImNqem9lb3JpYzA0ajgzb3A5MnJ5YThrb3UifQ.nKPGKKT3nGALq4dXe35Ipw'
// Dark sky token = '9894b0efa2784263e1739ffb0b880c46'