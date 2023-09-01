// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';
const getWeatherBtn = document.getElementById('getWeatherBtn');
const locationInput = document.getElementById('locationInput');
const weatherContainer = document.getElementById('weatherContainer');

getWeatherBtn.addEventListener('click', () => {
  const location = locationInput.value.trim();
  if (location === '') {
    alert('Please enter a city name.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const { name, main, weather } = data;
      const weatherInfo = `${name}: ${weather[0].description}, Temperature: ${main.temp}°C, Humidity: ${main.humidity}%`;

      weatherContainer.innerText = weatherInfo;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherContainer.innerText = 'Failed to fetch weather data. Please try again later.';
    });
});
