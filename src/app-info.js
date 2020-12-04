export const appInfo = (weatherData) => {
        const { temp } = weatherData.main;

        return { temp };
};
