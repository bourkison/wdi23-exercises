let calculateAge = function(currYear, birthYear)
{
  let roundedUpAge = currYear - birthYear;
  let roundedDownAge = roundedUpAge - 1;
  console.log("They are either " + roundedDownAge + " or " + roundedUpAge);
  console.log("");
}

calculateAge(2017, 1997);
