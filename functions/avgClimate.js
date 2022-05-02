export function avgClimate(array) {
  var weather = 0;
  for (var i = 0; i < array.length; i++) {
    weather = weather + array[i];
  }
  return weather / array.length;
}
