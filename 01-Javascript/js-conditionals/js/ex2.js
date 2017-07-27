let helloWorld = function(langCode)
{
  if (langCode === "fr")
  {
    return "Bonjour le monde";
  }
  else if (langCode === "de")
  {
    return "Hallo Welt";
  }
  else if (langCode === "es")
  {
    return "Hola Mundo";
  }
  else
  {
    return "Hello World";
  }
}

console.log("");

console.log(helloWorld("fr"));
console.log(helloWorld("de"));
console.log(helloWorld("es"));
console.log(helloWorld("en"));
