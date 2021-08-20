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



// const apiKey = process.env.API_KEY;

console.log("7e87660e41e049a8d2cbec2c53683d8c");

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
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${"7e87660e41e049a8d2cbec2c53683d8c"}`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFdBQVc7O0FBRTNCLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7O0FDVE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNUOztBQUU1Qjs7QUFFQSxZQUFZLGtDQUFtQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGtEQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsU0FBUyxzQkFBc0Isa0NBQW1CLENBQUM7QUFDOUcsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxFQUFFLG9FQUFrQztBQUNwQyxFQUFFLDBEQUF3QixNQUFNLGlCQUFpQixJQUFJLGdCQUFnQjtBQUNyRSx3REFBd0QsYUFBYTtBQUNyRTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFLDZDQUE2QyxpQkFBaUI7QUFDOUQ7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2FwcC1pbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhcHBJbmZvID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gd2VhdGhlckRhdGEubmFtZTtcbiAgICAgICAgY29uc3QgeyBjb3VudHJ5IH0gPSB3ZWF0aGVyRGF0YS5zeXM7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb25kID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgeyBpY29uIH0gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdO1xuICAgICAgICBjb25zdCB7IGh1bWlkaXR5IH0gPSB3ZWF0aGVyRGF0YS5tYWluO1xuXG4gICAgICAgIHJldHVybiB7IHRlbXAsIGxvY2F0aW9uLCBjb3VudHJ5LCB3ZWF0aGVyQ29uZCwgaWNvbiwgaHVtaWRpdHkgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgZG9tID0ge1xuICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyksXG4gICAgICAgIHNlYXJjaEZpZWxkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLFxuICAgICAgICBkYXRhQ29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0YS1jb250YWluZXInKSxcbiAgICAgICAgbG9jYXRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpLFxuICAgICAgICBpY29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWNvbicpLFxuICAgICAgICB3ZWF0aGVyQ29uZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItY29uZCcpLFxuICAgICAgICB0ZW1wZXJhdHVyZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyksXG4gICAgICAgIGh1bWlkaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFwcEluZm8gfSBmcm9tIFwiLi9hcHAtaW5mb1wiO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIi4vZG9tXCI7XG5cbi8vIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkFQSV9LRVk7XG5cbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkFQSV9LRVkpO1xuXG5mdW5jdGlvbiBwcm9jZXNzV2VhdGhlcih3ZWF0aGVyRGF0YSkge1xuICBpZiAoXG4gICAgd2VhdGhlckRhdGEuY29kID09PSBcIjQwMVwiIHx8XG4gICAgd2VhdGhlckRhdGEuY29kID09PSBcIjQwNFwiIHx8XG4gICAgd2VhdGhlckRhdGEuY29kID09PSBcIjQyOVwiXG4gICkge1xuICAgIGFsZXJ0KHdlYXRoZXJEYXRhLm1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRhdGFPYmogPSBhcHBJbmZvKHdlYXRoZXJEYXRhKTtcbiAgICBkaXNwbGF5RGF0YShkYXRhT2JqKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JnVuaXRzPW1ldHJpYyZhcHBpZD0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9YCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIHByb2Nlc3NXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChlcnJvcik7XG4gIH1cbn1cblxuLy8gZG9tLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGdldFdlYXRoZXIoZG9tLnNlYXJjaEZpZWxkLnZhbHVlKTtcbi8vICAgZG9tLmZvcm0ucmVzZXQoKTtcbi8vIH0pO1xuXG5mdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhT2JqKSB7XG4gIGRvbS5kYXRhQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgZG9tLmxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7ZGF0YU9iai5sb2NhdGlvbn0sICR7ZGF0YU9iai5jb3VudHJ5fWA7XG4gIC8vIGRvbS5pY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGFPYmouaWNvbn1AMngucG5nYDtcbiAgLy8gZG9tLndlYXRoZXJDb25kLnRleHRDb250ZW50ID0gZGF0YU9iai53ZWF0aGVyQ29uZDtcbiAgLy8gZG9tLnRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke2RhdGFPYmoudGVtcH0gwrBDYDtcbiAgLy8gZG9tLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGFPYmouaHVtaWRpdHl9JWA7XG59XG5cbmNvbnNvbGUubG9nKGdldFdlYXRoZXIoXCJjb2xvZ25lXCIpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==