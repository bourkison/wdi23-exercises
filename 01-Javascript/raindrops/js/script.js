let raindrops = function(input)
{
  let stringToReturn = "";

  if (input % 3 === 0)
  {
    stringToReturn += "Pling";
  }

  if (input % 5 === 0)
  {
    stringToReturn += "Plang";
  }

  if (input % 7 === 0)
  {
    stringToReturn += "Plong";
  }

  if (stringToReturn === "")
  {
    stringToReturn = input;
  }

  return stringToReturn;

}

console.log(raindrops(28));
console.log(raindrops(1755));
console.log(raindrops(9));
