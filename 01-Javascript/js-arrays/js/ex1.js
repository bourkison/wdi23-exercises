let topChoices = ["Black", "Red", "Blue", "Green", "White", "Pink"];

for (let i = 0; i < topChoices.length; i++)
{
  let suffix = "";
  switch(i)
  {
    case 0:
      suffix = "st";
      break;

    case 1:
      suffix = "nd";
      break;

    case 2:
      suffix = "rd";
      break;

    default:
      suffix = "th";
      break;
  }

  console.log(`My ${i + 1}${suffix} choice is ${topChoices[i]}`);


}
