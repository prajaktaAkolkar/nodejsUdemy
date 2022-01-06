// // console.log('Starting');

// // setTimeout(()=>{
// //  console.log('2seconds timer')
// // },2000)

// // setTimeout(()=>{
// //     console.log('0 second timer')
// // },0)

// // console.log('Stopping');


// const request = require('request');
// const geocode = require('./utils/geocode');
// const forecast = require('./utils/forecast');
// const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596&units=f'

// // request({url:url},(error,response)=>{
// //    // console.log(response);
// //    const data = JSON.parse(response.body);
// //    console.log(data.current);
// // })

// request({url: url, json:true}, (error,response)=>{
// //console.log(response.body.current);
// console.log(response.body.current.weather_descriptions + '. it is currently' + response.body.current.temperature + 'degrees out side. It feels Like ' + response.body.current.feelslike + 'degrees out. There is ' + response.body.current.precip + ' % chance of rain')
// });


// //geocoding
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJhamFrdGFha29sa2FyLS0xMjM0IiwiYSI6ImNreHlrcnJ4aTAwdDEydW9jdWt1czhlOHIifQ.LawadX-vypNsGuW9gHg9Vw';
// request({url:geocodeURL, json:true},(error,response)=>{
//  const longitude = response.body.features[0].center[0];
//  const latitude = response.body.features[0].center[1];
//  console.log(longitude,latitude);
// })


// //geocode function output from utils folder
// console.log("geocode function output from utils folder");
// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

// console.log("Forecast");
// forecast(44.1545, -75.7088, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })


const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude,longitude,location}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude,longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}
