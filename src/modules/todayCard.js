import { format, fromUnixTime } from 'date-fns';
import { degToString } from './conversions';

const todayCard = function displayCard(WeatherDataObject) {
  const weatherData = WeatherDataObject;
  console.log('description:', weatherData.weather[0].description);
  console.log('current temperature:', weatherData.main.temp);
  console.log('feels like temp:', weatherData.main.feels_like);
  console.log(
    'wind speed:',
    weatherData.wind.speed,
    'wind direction:',
    degToString(weatherData.wind.deg)
  ); // note imperial wind speed is mph, metric is meter/sec
  console.log('humidity:', `${weatherData.main.humidity}%`);
  console.log('sunrise', format(fromUnixTime(weatherData.sys.sunrise), 'p'));
  console.log('sunset', format(fromUnixTime(weatherData.sys.sunset), 'p'));
};

export { todayCard };
