import { format, fromUnixTime } from 'date-fns';
import { degToString } from './helperFunctions';
import {
  thunderstorms,
  drizzle,
  rain,
  snow,
  mistOrFog,
  sunny,
  clouds,
} from '../index';

const todayCard = function displayCard(WeatherDataObject) {
  const weatherData = WeatherDataObject;

  const words = weatherData.weather[0].description.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  const descriptionCapitalized = words.join(' ');

  const myIcons = {
    2: thunderstorms,
    3: drizzle,
    5: rain,
    6: snow,
    7: mistOrFog,
    8: sunny,
  };
  const key = weatherData.weather[0].id.toString().charAt(0);
  if (
    weatherData.weather[0].id <= 802 &&
    weatherData.weather[0].icon.includes('d')
  ) {
    document.getElementById('todayIcon').src = myIcons[key];
  } else if (
    weatherData.weather[0].id <= 802 &&
    weatherData.weather[0].icon.includes('n') &&
    weatherData.weather[0].id !== 800
  ) {
    document.getElementById('todayIcon').src = myIcons[key];
  } else {
    document.getElementById('todayIcon').src = clouds;
  }

  document.getElementById(
    'todayWeatherStatus'
  ).textContent = descriptionCapitalized;

  document.getElementById('currentTemp').textContent = `${Math.round(
    weatherData.main.temp
  )}°F`;

  document.getElementById(
    'cityState'
  ).textContent = `${weatherData.name}, ${weatherData.sys.country}`;

  document.getElementById('feelsLike').textContent = `${Math.round(
    weatherData.main.feels_like
  )}°F`;
  document.getElementById('wind').textContent = `${degToString(
    weatherData.wind.deg
  )} ${Math.round(weatherData.wind.speed)} mph`; // note imperial wind speed is mph, metric is meter/sec
  document.getElementById(
    'humidity'
  ).textContent = `${weatherData.main.humidity}%`;
  document.getElementById('sunrise').textContent = format(
    fromUnixTime(weatherData.sys.sunrise),
    'p'
  );
  document.getElementById('sunset').textContent = format(
    fromUnixTime(weatherData.sys.sunset),
    'p'
  );
};

export { todayCard };
