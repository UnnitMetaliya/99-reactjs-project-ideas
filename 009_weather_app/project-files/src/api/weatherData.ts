import axios from 'axios';
import { fetchWeatherApi } from 'openmeteo';
	

const url = "https://api.open-meteo.com/v1/forecast";
async function fetchWeatherData(cityName: string) {

	async function getCoordinates() {
		axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`)
			.then(async function (res) {
				const params = {
					"latitude": res.data.results[0].latitude,
					"longitude": res.data.results[0].longitude,
					"current": ["temperature_2m", "relative_humidity_2m", "is_day", "precipitation", "rain", "wind_speed_10m", "wind_direction_10m"],
					"daily": ["temperature_2m_max", "temperature_2m_min"]
				};

				const responses = await fetchWeatherApi(url, params);


				// Helper function to form time ranges
				const range = (start: number, stop: number, step: number) =>
					Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

				// Process first location. Add a for-loop for multiple locations or weather models

				const response = responses[0];

				// Attributes for timezone and location
				const utcOffsetSeconds = response.utcOffsetSeconds();
				// const timezone = response.timezone();
				// const timezoneAbbreviation = response.timezoneAbbreviation();
				// const latitude = response.latitude();
				// const longitude = response.longitude();

				const current = response.current()!;
				const daily = response.daily()!;

				// Note: The order of weather variables in the URL query and the indices below need to match!
				const weatherData = {
					current: {
						time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
						temperature2m: Math.round(current.variables(0)!.value()),
						relativeHumidity2m: current.variables(1)!.value(),
						isDay: current.variables(2)!.value(),
						precipitation: current.variables(3)!.value(),
						rain: current.variables(4)!.value(),
						windSpeed10m: Math.round(current.variables(5)!.value()),
						windDirection10m: current.variables(6)!.value(),
					},
					daily: {
						time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
							(t) => new Date((t + utcOffsetSeconds) * 1000)
						),
						temperature2mMax: daily.variables(0)!.valuesArray()!,
						temperature2mMin: daily.variables(1)!.valuesArray()!,
					},

				};

				// `weatherData` now contains a simple structure with arrays for datetime and weather data
				for (let i = 0; i < weatherData.daily.time.length; i++) {
					console.log(
						weatherData.daily.time[i].toDateString(),
						Math.round(
							(weatherData.daily.temperature2mMax[i] + weatherData.daily.temperature2mMin[i]) / 2 
						)
					);
				}

				console.log('---------------')
				console.log(weatherData.current)
		})
	}

	getCoordinates()
}


export default fetchWeatherData;



/**
 * We need:
 * - temperature
 * - wind
 * - humidity
 * - rain
 * 
 * using:
 * - city name
 * 	- coordinates
 */