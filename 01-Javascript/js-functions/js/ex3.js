const maxAge = 100;

let calculateSupply = function(currentAge, amountPerDay)
{
  let lifeTimeSupply = (maxAge - currentAge) * amountPerDay * 365;
  console.log("You will need " + lifeTimeSupply + " to last you until the ripe old age of " + maxAge);
  console.log("");
}

calculateSupply(19, 2);
