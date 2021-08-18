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



const apiKey = process.env.API;

function processWeather(weatherData) {
        if (weatherData.cod === '401' || weatherData.cod === '404' || weatherData.cod === '429') {
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
                        { mode: 'cors' }
                );
                const weatherData = await response.json();
                processWeather(weatherData);
        } catch (error) {
                alert(error);
        }
}

_dom__WEBPACK_IMPORTED_MODULE_1__.dom.form.addEventListener('submit', (e) => {
        e.preventDefault();
        getWeather(_dom__WEBPACK_IMPORTED_MODULE_1__.dom.searchField.value);
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.form.reset();
});

function displayData(dataObj) {
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.dataContainer.style.visibility = 'visible';
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.location.textContent = `${dataObj.location}, ${dataObj.country}`;
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.icon.src = `http://openweathermap.org/img/wn/${dataObj.icon}@2x.png`;
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.weatherCond.textContent = dataObj.weatherCond;
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.temperature.textContent = `Temperature: ${dataObj.temp} °C`;
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.humidity.textContent = `Humidity: ${dataObj.humidity}%`;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFdBQVc7O0FBRTNCLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7O0FDVE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNUOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsZ0NBQWdDLGtEQUFPO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsU0FBUyxzQkFBc0IsT0FBTztBQUNsSCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQSwyREFBeUI7QUFDekI7QUFDQSxtQkFBbUIsdURBQXFCO0FBQ3hDLFFBQVEsZ0RBQWM7QUFDdEIsQ0FBQzs7QUFFRDtBQUNBLFFBQVEsb0VBQWtDO0FBQzFDLFFBQVEsMERBQXdCLE1BQU0saUJBQWlCLElBQUksZ0JBQWdCO0FBQzNFLFFBQVEsOENBQVksdUNBQXVDLGFBQWE7QUFDeEUsUUFBUSw2REFBMkI7QUFDbkMsUUFBUSw2REFBMkIsbUJBQW1CLGNBQWM7QUFDcEUsUUFBUSwwREFBd0IsZ0JBQWdCLGlCQUFpQjtBQUNqRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXBwLWluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFwcEluZm8gPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICAgICAgICBjb25zdCB7IGNvdW50cnkgfSA9IHdlYXRoZXJEYXRhLnN5cztcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCB7IGljb24gfSA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF07XG4gICAgICAgIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHdlYXRoZXJEYXRhLm1haW47XG5cbiAgICAgICAgcmV0dXJuIHsgdGVtcCwgbG9jYXRpb24sIGNvdW50cnksIHdlYXRoZXJDb25kLCBpY29uLCBodW1pZGl0eSB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBkb20gPSB7XG4gICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSxcbiAgICAgICAgc2VhcmNoRmllbGQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JyksXG4gICAgICAgIGRhdGFDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRhLWNvbnRhaW5lcicpLFxuICAgICAgICBsb2NhdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyksXG4gICAgICAgIGljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpY29uJyksXG4gICAgICAgIHdlYXRoZXJDb25kOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1jb25kJyksXG4gICAgICAgIHRlbXBlcmF0dXJlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKSxcbiAgICAgICAgaHVtaWRpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYXBwSW5mbyB9IGZyb20gJy4vYXBwLWluZm8nO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5BUEk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyKHdlYXRoZXJEYXRhKSB7XG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS5jb2QgPT09ICc0MDEnIHx8IHdlYXRoZXJEYXRhLmNvZCA9PT0gJzQwNCcgfHwgd2VhdGhlckRhdGEuY29kID09PSAnNDI5Jykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHdlYXRoZXJEYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFPYmogPSBhcHBJbmZvKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGF0YShkYXRhT2JqKTtcbiAgICAgICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9bWV0cmljJmFwcGlkPSR7YXBpS2V5fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzV2VhdGhlcih3ZWF0aGVyRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9XG59XG5cbmRvbS5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZ2V0V2VhdGhlcihkb20uc2VhcmNoRmllbGQudmFsdWUpO1xuICAgICAgICBkb20uZm9ybS5yZXNldCgpO1xufSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlEYXRhKGRhdGFPYmopIHtcbiAgICAgICAgZG9tLmRhdGFDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgZG9tLmxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7ZGF0YU9iai5sb2NhdGlvbn0sICR7ZGF0YU9iai5jb3VudHJ5fWA7XG4gICAgICAgIGRvbS5pY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGFPYmouaWNvbn1AMngucG5nYDtcbiAgICAgICAgZG9tLndlYXRoZXJDb25kLnRleHRDb250ZW50ID0gZGF0YU9iai53ZWF0aGVyQ29uZDtcbiAgICAgICAgZG9tLnRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke2RhdGFPYmoudGVtcH0gwrBDYDtcbiAgICAgICAgZG9tLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGFPYmouaHVtaWRpdHl9JWA7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=