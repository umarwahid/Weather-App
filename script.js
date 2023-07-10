

const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const icon = document.querySelector('.weather-image');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
	const api_key = "7089467baf1548b69b644959230707";
	const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`

	const weather_data = await fetch(`${url}`)
	.then(response => response.json())

	if (weather_data.error && weather_data.error.code === 1006) {
		location_not_found.style.display = 'flex';
		weather_body.style.display = 'none';
		console.log(weather_data.error);
		return;
	  }
	location_not_found.style.display = 'none';
	weather_body.style.display = 'flex';

	temperature.innerHTML = `${weather_data.current.temp_c}°C`;
	description.innerHTML = `${weather_data.current.condition.text}`;
	humidity.innerHTML = `${weather_data.current.humidity}%`;
	wind_speed.innerHTML = `${weather_data.current.wind_kph}kp/H`;
	icon.src = `${weather_data.current.condition.icon}`;

	
}

searchBtn.addEventListener('click', (e)=>{
	// e.preventDefault();
	checkWeather(inputBox.value);
})
