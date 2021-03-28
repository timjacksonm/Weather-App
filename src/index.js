import './sass/main.scss';
import { todayCard } from './modules/todayCard';
// import { extendedForcastCard } from './modules/extendedCard';
import thunderstorms from './assets/thunderstorms.svg';
import drizzle from './assets/drizzle.svg';
import rain from './assets/rain.svg';
import snow from './assets/snow.svg';
import mistOrFog from './assets/mistorfog.svg';
import sunny from './assets/sunny.svg';
import clouds from './assets/clouds.svg';

const searchBar = document.querySelector('#searchBar');
const errorDiv = document.getElementById('error');

async function getWeather(string) {
  errorDiv.className = 'error hidden';
  const searchToday = `https://api.openweathermap.org/data/2.5/weather?q=${string}&units=imperial&appid=bb5bd83c82003b1aeb68a738c2b0302e`;

  // const searchExtended = `https://api.openweathermap.org/data/2.5/forecast?q=${string}&units=imperial&appid=bb5bd83c82003b1aeb68a738c2b0302e`;

  try {
    const todayResponse = await fetch(searchToday, { mode: 'cors' });
    const todayWeatherData = await todayResponse.json();
    // const extendedResponse = await fetch(searchExtended);
    // const extendedWeatherData = await extendedResponse.json();

    const weatherDataPromise = await Promise.all([
      todayWeatherData,
      // extendedWeatherData,
    ]);
    todayCard(weatherDataPromise[0]);
    // extendedForcastCard(weatherDataPromise[1]);
  } catch (err) {
    errorDiv.className = 'error';
    errorDiv.textContent = 'Not Found. Try City Name or Zip Code';
  }
}
searchBar.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && e.target.value !== '') {
    getWeather(e.target.value);
  }
});

getWeather('Duluth');
export { thunderstorms, drizzle, rain, snow, mistOrFog, sunny, clouds };
