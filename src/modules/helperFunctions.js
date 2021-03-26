const degToString = function degToCompass(num) {
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
};
function addStringToUrl(str, index, stringToAdd, type) {
  const temp = type;
  const newString =
    str.substring(0, index) +
    stringToAdd +
    temp +
    str.substring(index, str.length);
  return newString;
}

export { degToString, addStringToUrl };
