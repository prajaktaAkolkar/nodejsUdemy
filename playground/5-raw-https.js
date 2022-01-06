const https = require('https');
const url = 'https://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=48,-75&units=f'

const request =https.request(url, (response)=>{
    let data = ''
  response.on('data',(chunk)=>{
   data = data + chunk.toString()
  })
  response.on('end',()=>{
  const body = JSON.parse(data)
  console.log(body)
  })
})

request.on('error',(error)=>{
  console.log('an error', error)
})

request.end();