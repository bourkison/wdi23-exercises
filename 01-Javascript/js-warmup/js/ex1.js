let talkToSerge = function(input)
{
  if (input === "" || input === undefined)
  {
    console.log("Fine, be that way.");
    return "Fine, be that way.";
  }

  if (input[input.length - 1] === "?")
  {
    console.log("Sure.");
    return "Sure.";
  }

  if(input.toUpperCase() === input)
  {
    console.log("Woah, chill out!");
    return "Woah, chill out!";
  }


  console.log("Whatever");
  return "Whatever";

}
