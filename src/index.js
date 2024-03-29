import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import { appInfo } from "./app-info";
import { dom } from "./dom";
const apiKey = "7e87660e41e049a8d2cbec2c53683d8c";

dom.form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (dom.searchField.value) {
    getWeather(dom.searchField.value);
  } else {
    openModal();
    dom.modalBody.textContent = "Please enter a city";
  }
  dom.form.reset();
});

dom.closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => (dom.modal.style.display = "none"));
});

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    processWeather(weatherData);
  } catch (error) {
    alert(error);
  }
}

function processWeather(weatherData) {
  if (weatherData.message) {
    openModal();
    const errorMsg =
      weatherData.message.charAt(0).toUpperCase() +
      weatherData.message.slice(1);
    dom.modalBody.textContent = `${errorMsg}`;
  } else {
    console.log(weatherData);
    const dataObj = appInfo(weatherData);
    displayData(dataObj);
  }
}

function displayData(dataObj) {
  console.log(dataObj);
  dom.dataContainer.style.display = "flex";
  console.log(dom.dataContainer.classList);
  dom.todayTitle.textContent = `Today in ${dataObj.location}, ${dataObj.country}`;
  dom.todayIcon.src = `http://openweathermap.org/img/wn/${dataObj.icon}@2x.png`;
  dom.todayTemp.textContent = `${dataObj.temp} °C`;
  dom.todayCond.textContent = dataObj.weatherCond;
  dom.todayMax.textContent = `${dataObj.todayMax} °C`;
  dom.todayMin.textContent = `${dataObj.todayMin} °C`;
}

function openModal() {
  dom.modal.style.display = "block";
}
