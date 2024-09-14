import axios from 'axios';

function getCoordinates(cityName: string) {
    return axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=3&language=en&format=json`)
        .then(function (response) {
            for (let i = 0; i < response.data.results.length; i++) {
                console.log(response.data.results[i]);
            };
        })
        
}

export default getCoordinates;