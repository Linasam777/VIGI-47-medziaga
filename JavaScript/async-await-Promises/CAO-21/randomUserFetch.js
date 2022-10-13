const getUser = async () => {
  const response = await fetch("https://randomuser.me/api/");

  const user = await response.json();

  return user;
};

// Neužbaigtas uždavinys

/*
IDENTIŠKA
try {
  const response = await fetch("https://randomuser.me/api/");
} catch (error) {
  console.error(error);
}

const response = await fetch("https://randomuser.me/api/").catch((error) =>
  console.error(error)
);

*/

const user = await getUser();

console.log(user);

// JSON - objektas, kuris turi daug parametru, iskaitant 'parse'

// JSON.parse('{"name": "Jonas"}')
// {name: 'Jonas'}

// JSON.stringify({name: "Tadas"})
// '{"name":"Tadas"}'
