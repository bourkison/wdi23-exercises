// let singSong = function(num, goTo)
// {
//   num = num || 99;
//   goTo = goTo || 0;
//
//   for (let i = num; i >= goTo; i--)
//   {
//     if (i === 2)
//     {
//       console.log("2 bottles of beer on the wall, 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall...");
//     }
//     else if (i === 1)
//     {
//       console.log("1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.");
//     }
//     else if (i === 0)
//     {
//       console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
//     }
//     else
//     {
//       console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${i - 1} bottles of beer on the wall...`);
//     }
//   }
// }

const beer =
{
  beerQuantity: function(num)
  {
    if (num === 0)
    {
      return "No bottles of beer";
    }
    else if (num === 1)
    {
      return "1 bottle of beer";
    }
    else
    {
      return `${num} bottles of beer`;
    }
  },

  action: function(num)
  {
    if (num === 0)
    {
      return "go to the store, buy some more";
    }
    else
    {
      return "take one down, pass it around";
    }
  },

  decrement: function(num)
  {
    if (num === 0)
    {
      return 99
    }
    else
    {
      return num - 1;
    }
  },

  verseOne: function(num)
  {
    let verse = `${this.beerQuantity(num)} on the wall, ${this.beerQuantity(num)}`
    console.log(verse);
    return verse;
  },

  verseTwo: function(num)
  {
    let verse = `${this.action(num)}, ${this.beerQuantity(this.decrement(num))} on the wall`
    console.log(verse);
    return verse;
  },

  song: function(start = 99, end = 0)
  {
    for (let i = start; i >= end; i--)
    {
      this.verseOne(i);
      this.verseTwo(i);
    }
  }
}
