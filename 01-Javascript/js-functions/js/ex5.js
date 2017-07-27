let celsiusToFahrenheit = function(celsiusTemp)
{
  const calcFarTemp = celsiusTemp * 9 / 5 + 32;
  console.log(celsiusTemp + " degrees celsius is " + calcFarTemp + " degrees farenheight.");
  return calcFarTemp;
}


let fahrenheitToCelsius = function(farTemp)
{
  const calcCelsiusTemp = (farTemp - 32) * 5 / 9;
  console.log(farTemp + " degrees farenheight is " + calcCelsiusTemp + " degrees celsius.");
  return calcCelsiusTemp;
}

fahrenheitToCelsius(celsiusToFahrenheit(25));
