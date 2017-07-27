let gradeAssigner = function()
{
  let grade;

  for (let i = 60; i <= 100; i++)
  {
    if (i >= 90)
    {
      grade = "A";
    }
    else if (i >= 80)
    {
      grade = "B";
    }
    else if (i >= 70)
    {
      grade = "C";
    }
    else if (i >= 60)
    {
      grade = "D"
    }
    else if (i >= 50)
    {
      grade = "E"
    }
    else
    {
      grade = "F"
    }

    console.log(`For ${i} you got ${grade}`);

  }



}

gradeAssigner();
