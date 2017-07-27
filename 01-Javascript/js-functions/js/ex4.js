let calcCircumference = function(radius)
{
  const circumference = 2 * radius * Math.PI;
  console.log("The circumference is " + circumference);
}

let calcArea = function(radius)
{
  const area = Math.pow(radius, 2) * Math.PI;
  console.log("The area is " + area);
}

calcCircumference(5);
calcArea(5);

console.log("");
