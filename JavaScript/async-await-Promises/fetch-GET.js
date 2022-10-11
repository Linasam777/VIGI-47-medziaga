// GET - uzklausos metodas. tipiskai neturi body (tam tikru siunciamu parametru) ir jo rezultato apimtis nera didziausia - tada naudokit POST. uzklausoms, kurios itin mazos (pvz.: vartotojo info, sios dienos prognoze)
// POST - arba kai bandai kazka pakeisti arba reikia daug atminties atsakymui (response) (pvz.: visu vartotoju informacija).
// https://stackoverflow.com/a/55998160

// jei naudojam async, tipiskai naudojam await. Priesingu atveju, async funkcijos veikla GALI nesibaigti iki kitos operacijos.
const doFetch = async () => {
  const getUsers = async () => {
    // trycatch
    // real url
    const response = await fetch("http://localhost:3001/user");

    const data = await response.json();

    return data.users;
  };

  // users = [{name:..., time:...}]
  const users = await getUsers();
  const usersWithTime = users.map((user) => {
    return {
      time: user.time,
    };
  });

  console.log(users);
  console.log(usersWithTime);
};

doFetch();
