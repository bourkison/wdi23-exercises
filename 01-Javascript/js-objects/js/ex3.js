const movie = function(m)
{
  console.log(`${m.title} lasts for ${m.time} minutes. Stars: ${m.actors.join(', ')}`);
}

let pulpFiction =
{
  title: "Pulp Fiction",
  time: 154,
  actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
};

movie(pulpFiction);
