import './sass/main.scss';
import { todayCard } from './modules/todayCard';
import { extendedForcastCard } from './modules/extendedCard';

function addStr(str, index, stringToAdd, type) {
  const temp = type;
  const newString =
    str.substring(0, index) +
    stringToAdd +
    temp +
    str.substring(index, str.length);
  return newString;
}
const searchBar = document.querySelector('#searchBar');
async function getWeather(string) {
  const urlToday =
    'http://api.openweathermap.org/data/2.5/weather?q=&appid=bb5bd83c82003b1aeb68a738c2b0302e';
  const urlExtended =
    'http://api.openweathermap.org/data/2.5/forecast?q=&appid=bb5bd83c82003b1aeb68a738c2b0302e';
  const searchToday = addStr(urlToday, 49, string, '&units=imperial'); //metric for celcius
  const searchExtended = addStr(urlExtended, 50, string, '&units=imperial'); //metric for celcius

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
