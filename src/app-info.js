export const appInfo = (weatherData) => {
        const temp = Math.round(weatherData.main.temp);
        const location = weatherData.name;
        const { country } = weatherData.sys;
        const weatherCond = weatherData.weather[0].description;
        const { icon } = weatherData.weather[0];
        const { humidity } = weatherData.main;

        return { temp, location, country, weatherCond, icon, humidity };
};
