let pluralize = function(noun, number)
{
  let result;

  if (number != 1 && noun != "sheep")
  {
    if (noun === "goose")
    {
      result = number + " geese";
    }
    else if (noun === "cactus")
    {
      result = number + " cacti";
    }
    else
    {
      result = number + " " + noun + "s";
    }

    return result;

  }
  else
  {
    result = number + " " + noun;
    return result;
  }
}

console.log("");

console.log(pluralize("book", 11));
console.log(pluralize("goose", 3));
console.log(pluralize("cactus", 1002));
console.log(pluralize("bottle", 4));
console.log(pluralize("laptop", 1));
console.log(pluralize("sheep", 4));
