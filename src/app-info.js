export const appInfo = (weatherData) => {
  const temp = Math.round(weatherData.main.temp);
  const todayMax = Math.round(weatherData.main.temp_max);
  const todayMin = Math.round(weatherData.main.temp_min);
  const location = weatherData.name;
  const { country } = weatherData.sys;
  const weatherCond = weatherData.weather[0].description;
  const { icon } = weatherData.weather[0];
  const { humidity } = weatherData.main;

  return {
    temp,
    todayMax,
    todayMin,
    location,
    country,
    weatherCond,
    icon,
    humidity,
  };
};
