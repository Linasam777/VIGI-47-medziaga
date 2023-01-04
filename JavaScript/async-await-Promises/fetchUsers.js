const fetchUsersBtn = document.getElementById("fetch-users-button");

const doFetch = async (amount) => {
  const getUsers = async () => {
    try {
      const response = await fetch("https://FAKEapi.github.com/users");
      const users = await response.json();
  
      return users;
    } catch (error) {
      throw Error();
    }
  };

  const users = await getUsers();

  console.info(users.slice(0, amount));
};

doFetch(5);

fetchUsersBtn.addEventListener("click", async () => {
  await doFetch(5);
});
