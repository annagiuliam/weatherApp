import { appInfo } from './app-info';
import { dom } from './dom';

const apiKey = process.env.API;

function processWeather(weatherData) {
        if (weatherData.cod === '401' || weatherData.cod === '404' || weatherData.cod === '429') {
                alert(weatherData.message);
        } else {
                const dataObj = appInfo(weatherData);
                displayData(dataObj);
        }
}

async function getWeather(location) {
        try {
                const response = await fetch(
                        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`,
                        { mode: 'cors' }
                );
                const weatherData = await response.json();
                processWeather(weatherData);
        } catch (error) {
                alert(error);
        }
}

dom.form.addEventListener('submit', (e) => {
        e.preventDefault();
        getWeather(dom.searchField.value);
        dom.form.reset();
});

function displayData(dataObj) {
        dom.dataContainer.style.visibility = 'visible';
        dom.location.textContent = `${dataObj.location}, ${dataObj.country}`;
        dom.icon.src = `http://openweathermap.org/img/wn/${dataObj.icon}@2x.png`;
        dom.weatherCond.textContent = dataObj.weatherCond;
        dom.temperature.textContent = `Temperature: ${dataObj.temp} °C`;
        dom.humidity.textContent = `Humidity: ${dataObj.humidity}%`;
}
