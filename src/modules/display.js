import { format, fromUnixTime } from 'date-fns';

const contentContainer = document.getElementById('content');
function kelvinToFahrenheit(valNum) {
  const convertToFahr = valNum;
  const fahrFloat = parseFloat(convertToFahr);
  return (fahrFloat - 273.15) * 1.8 + 32;
}
function kelvinToCelcius(valNum) {
  const convertToCelcius = valNum;
  const celcFloat = parseFloat(convertToCelcius);
  return celcFloat - 273.15;
}
function degToCompass(num) {
  const val = Math.floor(num / 22.5 + 0.5);
  const arr = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ];
  return arr[val % 16];
}
const weatherCard = function displayCard(WeatherDataObject) {
  const weatherData = WeatherDataObject;
  const fahrTemp = kelvinToFahrenheit(weatherData.main.temp);
  const celcTemp = kelvinToCelcius(weatherData.main.temp);
  console.log('description:', weatherData.weather[0].description);
  console.log('temps fahr:', fahrTemp, 'temps celc:', celcTemp);
  console.log('feels like temp:', weatherData.main.feels_like);
  console.log(
    'wind speed:',
    weatherData.wind.speed,
    'wind direction:',
    degToCompass(weatherData.wind.deg)
  );
  console.log('humidity:', `${weatherData.main.humidity}%`);
  console.log('sunrise', format(fromUnixTime(weatherData.sys.sunrise), 'p'));
  console.log('sunset', format(fromUnixTime(weatherData.sys.sunset), 'p'));
};

export { weatherCard };
