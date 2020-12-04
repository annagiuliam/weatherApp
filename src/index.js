import { appInfo } from './app-info';

const apiKey = process.env.API;

async function getWeather(location) {
        try {
                const response = await fetch(
                        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`,
                        { mode: 'cors' }
                );
                const weatherData = await response.json();
                console.log(weatherData);
                processWeather(weatherData);
        } catch (error) {
                alert(error);
        }
}

function processWeather(weatherData) {
        if (weatherData.cod === '401' || weatherData.cod === '404' || weatherData.cod === '429') {
                // 401 non funge, 404 si
                alert(weatherData.message);
        } else {
                const dataObj = appInfo(weatherData);
                console.log(dataObj.temp);
                //
        }
}

getWeather('cologne');
