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
const weatherCard = function displayCard(WeatherDataObject) {
  const weatherData = WeatherDataObject;
  contentContainer.appendChild(document.createElement('h1')).textContent =
    weatherData.weather[0].description;
  const fahrTemp = kelvinToFahrenheit(weatherData.main.temp);
  const celcTemp = kelvinToCelcius(weatherData.main.temp);
  console.log(fahrTemp, celcTemp, weatherData.main.temp);
};

export { weatherCard };
