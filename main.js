/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app-info.js":
/*!*************************!*\
  !*** ./src/app-info.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appInfo": () => (/* binding */ appInfo)
/* harmony export */ });
const appInfo = (weatherData) => {
        const temp = Math.round(weatherData.main.temp);
        const location = weatherData.name;
        const { country } = weatherData.sys;
        const weatherCond = weatherData.weather[0].description;
        const { icon } = weatherData.weather[0];
        const { humidity } = weatherData.main;

        return { temp, location, country, weatherCond, icon, humidity };
};


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dom": () => (/* binding */ dom)
/* harmony export */ });
const dom = {
        form: document.querySelector('form'),
        searchField: document.querySelector('input'),
        dataContainer: document.querySelector('#data-container'),
        location: document.querySelector('#location'),
        icon: document.querySelector('#icon'),
        weatherCond: document.querySelector('#weather-cond'),
        temperature: document.querySelector('#temperature'),
        humidity: document.querySelector('#humidity'),
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-info */ "./src/app-info.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const apiKey = "7e87660e41e049a8d2cbec2c53683d8c";

function processWeather(weatherData) {
  if (
    weatherData.cod === "401" ||
    weatherData.cod === "404" ||
    weatherData.cod === "429"
  ) {
    alert(weatherData.message);
  } else {
    const dataObj = (0,_app_info__WEBPACK_IMPORTED_MODULE_0__.appInfo)(weatherData);
    displayData(dataObj);
  }
}

async function getWeather(location) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log(weatherData);
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
  _dom__WEBPACK_IMPORTED_MODULE_1__.dom.dataContainer.style.visibility = "visible";
  _dom__WEBPACK_IMPORTED_MODULE_1__.dom.location.textContent = `${dataObj.location}, ${dataObj.country}`;
  // dom.icon.src = `http://openweathermap.org/img/wn/${dataObj.icon}@2x.png`;
  // dom.weatherCond.textContent = dataObj.weatherCond;
  // dom.temperature.textContent = `Temperature: ${dataObj.temp} °C`;
  // dom.humidity.textContent = `Humidity: ${dataObj.humidity}%`;
}

console.log(getWeather("cologne"));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFdBQVc7O0FBRTNCLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7O0FDVE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNUOztBQUU1QixlQUFlLGtDQUFtQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGtEQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsU0FBUyxzQkFBc0IsT0FBTztBQUNoRyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEVBQUUsb0VBQWtDO0FBQ3BDLEVBQUUsMERBQXdCLE1BQU0saUJBQWlCLElBQUksZ0JBQWdCO0FBQ3JFLHdEQUF3RCxhQUFhO0FBQ3JFO0FBQ0EsbURBQW1ELGNBQWM7QUFDakUsNkNBQTZDLGlCQUFpQjtBQUM5RDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXBwLWluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFwcEluZm8gPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICAgICAgICBjb25zdCB7IGNvdW50cnkgfSA9IHdlYXRoZXJEYXRhLnN5cztcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCB7IGljb24gfSA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF07XG4gICAgICAgIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHdlYXRoZXJEYXRhLm1haW47XG5cbiAgICAgICAgcmV0dXJuIHsgdGVtcCwgbG9jYXRpb24sIGNvdW50cnksIHdlYXRoZXJDb25kLCBpY29uLCBodW1pZGl0eSB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBkb20gPSB7XG4gICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSxcbiAgICAgICAgc2VhcmNoRmllbGQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JyksXG4gICAgICAgIGRhdGFDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRhLWNvbnRhaW5lcicpLFxuICAgICAgICBsb2NhdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyksXG4gICAgICAgIGljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpY29uJyksXG4gICAgICAgIHdlYXRoZXJDb25kOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1jb25kJyksXG4gICAgICAgIHRlbXBlcmF0dXJlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKSxcbiAgICAgICAgaHVtaWRpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYXBwSW5mbyB9IGZyb20gXCIuL2FwcC1pbmZvXCI7XG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiLi9kb21cIjtcblxuY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuQVBJX0tFWTtcblxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXIod2VhdGhlckRhdGEpIHtcbiAgaWYgKFxuICAgIHdlYXRoZXJEYXRhLmNvZCA9PT0gXCI0MDFcIiB8fFxuICAgIHdlYXRoZXJEYXRhLmNvZCA9PT0gXCI0MDRcIiB8fFxuICAgIHdlYXRoZXJEYXRhLmNvZCA9PT0gXCI0MjlcIlxuICApIHtcbiAgICBhbGVydCh3ZWF0aGVyRGF0YS5tZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRhT2JqID0gYXBwSW5mbyh3ZWF0aGVyRGF0YSk7XG4gICAgZGlzcGxheURhdGEoZGF0YU9iaik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JnVuaXRzPW1ldHJpYyZhcHBpZD0ke2FwaUtleX1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgcHJvY2Vzc1dlYXRoZXIod2VhdGhlckRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGVycm9yKTtcbiAgfVxufVxuXG4vLyBkb20uZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgZ2V0V2VhdGhlcihkb20uc2VhcmNoRmllbGQudmFsdWUpO1xuLy8gICBkb20uZm9ybS5yZXNldCgpO1xuLy8gfSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlEYXRhKGRhdGFPYmopIHtcbiAgZG9tLmRhdGFDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBkb20ubG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhT2JqLmxvY2F0aW9ufSwgJHtkYXRhT2JqLmNvdW50cnl9YDtcbiAgLy8gZG9tLmljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YU9iai5pY29ufUAyeC5wbmdgO1xuICAvLyBkb20ud2VhdGhlckNvbmQudGV4dENvbnRlbnQgPSBkYXRhT2JqLndlYXRoZXJDb25kO1xuICAvLyBkb20udGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmU6ICR7ZGF0YU9iai50ZW1wfSDCsENgO1xuICAvLyBkb20uaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YU9iai5odW1pZGl0eX0lYDtcbn1cblxuY29uc29sZS5sb2coZ2V0V2VhdGhlcihcImNvbG9nbmVcIikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9