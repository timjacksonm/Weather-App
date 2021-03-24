import { format, fromUnixTime } from 'date-fns';

const extendedForcastCard = function displayCards(extWeatherDataObject) {
  const extWeatherData = extWeatherDataObject;

  for (let i = 0; i < extWeatherData.list.length; i++) {
    let listItem = '';
    listItem = extWeatherData.list[i].dt_txt.split(' ');
    // console.log(listItem); might need to double check the return value for listItem[1] starts with 18:00:00 always so the first day isn't skipped.
    if (listItem[1] === '18:00:00' || i === 0) {
      console.log(
        'Day of the week:',
        format(fromUnixTime(extWeatherData.list[i].dt), 'EEEE'),
        'Days Temp: ',
        extWeatherData.list[i].main.temp,
        'Days Weather Description: ',
        extWeatherData.list[i].weather[0].description
      );
    }
  }
};

export { extendedForcastCard };
