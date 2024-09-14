import axios from 'axios';

let api = 'https://geocoding-api.open-meteo.com/v1/search?name=Rauma&count=1&language=en&format=json';


function getWeather(lat: string, lon: string) {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=auto`

    return apiUrl;
}

// Gets the corrdinates from a place name
axios.get(api)
.then(function (response) {
    // handle success
    let r = response.data.results[0]
    console.log(r.latitude, r.longitude);

    axios.get(getWeather(r.latitude, r.longitude))
     .then(function (weatherResponse) {
        // handle success
        console.log(weatherResponse.data);
      })    
  })

