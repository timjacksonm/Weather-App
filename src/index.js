import './sass/main.scss';
import { todayCard } from './modules/todayCard';
import { extendedForcastCard } from './modules/extendedCard';
import { addStringToUrl } from './modules/helperFunctions';
import thunderstorms from './assets/thunderstorms.svg';
import drizzle from './assets/drizzle.svg';
import rain from './assets/rain.svg';
import snow from './assets/snow.svg';
import mistOrFog from './assets/mistorfog.svg';
import sunny from './assets/sunny.svg';
import clouds from './assets/clouds.svg';

const searchBar = document.querySelector('#searchBar');
async function getWeather(string) {
  const urlToday =
    'https://api.openweathermap.org/data/2.5/weather?q=&appid=bb5bd83c82003b1aeb68a738c2b0302e';
  const urlExtended =
    'https://api.openweathermap.org/data/2.5/forecast?q=&appid=bb5bd83c82003b1aeb68a738c2b0302e';
  const searchToday = addStringToUrl(urlToday, 50, string, '&units=imperial'); // metric for celcius
  const searchExtended = addStringToUrl(
    urlExtended,
    51,
    string,
    '&units=imperial'
  ); // metric for celcius

  try {
    const todayResponse = await fetch(searchToday, { mode: 'cors' });
    const todayWeatherData = await todayResponse.json();
    const extendedResponse = await fetch(searchExtended);
    const extendedWeatherData = await extendedResponse.json();

    const weatherDataPromise = await Promise.all([
      todayWeatherData,
      extendedWeatherData,
    ]);
    todayCard(weatherDataPromise[0]);
    extendedForcastCard(weatherDataPromise[1]);
  } catch (err) {
    // pop up box indicating if outside of US add , country code
    console.log(err);
  }
}
searchBar.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && e.target.value !== '') {
    const splitString = e.target.value.split(' ');
    let value = '';
    if (splitString.length > 1) {
      value = splitString.join('');
    } else {
      value = `${splitString},US`;
    }
    getWeather(value);
  }
});

getWeather('las vegas');
export { thunderstorms, drizzle, rain, snow, mistOrFog, sunny, clouds };
