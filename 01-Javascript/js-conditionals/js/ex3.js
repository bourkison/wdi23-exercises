let assignGrade = function(numScore)
{
  if (numScore >= 90)
  {
    return "A";
  }
  else if (numScore >= 80)
  {
    return "B";
  }
  else if (numScore >= 70)
  {
    return "C";
  }
  else if (numScore >= 60)
  {
    return "D";
  }
  else if (numScore >= 50)
  {
    return "E";
  }
  else
  {
    return "F";
  }
}

console.log("");

console.log(assignGrade(95));
console.log(assignGrade(82));
console.log(assignGrade(77));
console.log(assignGrade(64));
console.log(assignGrade(50));
console.log(assignGrade(23));
