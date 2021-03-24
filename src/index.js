import './sass/main.scss';
import { weatherCard } from './modules/display';

function addStr(str, index, stringToAdd) {
  const newString =
    str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  return newString;
}
const searchBar = document.querySelector('#searchBar');
async function getWeather(string) {
  const url =
    'http://api.openweathermap.org/data/2.5/weather?q=&appid=bb5bd83c82003b1aeb68a738c2b0302e';
  const searchString = addStr(url, 49, string);
  try {
    const response = await fetch(searchString, { mode: 'cors' });
    const weatherData = await response.json();
    weatherCard(weatherData);
  } catch (err) {
    // pop up box indicating if outside of US add , country code
    return console.log(err);
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
