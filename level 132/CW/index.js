const weatherDataDiv = document.getElementById("weather-data");
const fetchWeatherButton = document.getElementById("fetch-weather");


const apiKey = "your_api_key";  
const city = "Tbilisi";  

async function fetchWeather() {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Weather data not available");
    }
    const data = await response.json();


    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;


    document.getElementById("city-name").textContent = `City: ${cityName}`;
    document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
    document.getElementById("weather-description").textContent = `Weather: ${weatherDescription}`;

}

fetchWeatherButton.addEventListener("click", fetchWeather);
