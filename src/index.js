// import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/reset.css";
import "./styles/styles.css";
import { appInfo } from "./app-info";
import { dom } from "./dom";
const apiKey = "7e87660e41e049a8d2cbec2c53683d8c";

function processWeather(weatherData) {
  if (
    weatherData.cod === "401" ||
    weatherData.cod === "404" ||
    weatherData.cod === "429"
  ) {
    // fai modal
    alert(weatherData.message);
  } else {
    console.log(weatherData);
    const dataObj = appInfo(weatherData);
    console.log(dataObj.icon);
    displayData(dataObj);
  }
}

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    // console.log(weatherData);
    processWeather(weatherData);
  } catch (error) {
    alert(error);
  }
}

// dom.form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   getWeather(dom.searchField.value);
//   dom.form.reset();
// });

function displayData(dataObj) {
  dom.dataContainer.style.visibility = "visible";
  dom.todayTitle.textContent = `Today in ${dataObj.location}`;
  console.log(dom.todayTitle.textContent);
  console.log(dataObj.icon);
  // dom.location.textContent = `${dataObj.location}, ${dataObj.country}`;

  dom.todayIcon.src = `http://openweathermap.org/img/wn/${dataObj.icon}@2x.png`;
  // dom.todayIcon.src = `http://openweathermap.org/img/wn/01d.png`;

  // dom.weatherCond.textContent = dataObj.weatherCond;
  // dom.temperature.textContent = `Temperature: ${dataObj.temp} °C`;
  // dom.humidity.textContent = `Humidity: ${dataObj.humidity}%`;
}

console.log(getWeather("cologne"));
