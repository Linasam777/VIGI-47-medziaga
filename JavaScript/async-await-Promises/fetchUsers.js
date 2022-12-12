const fetchUsersBtn = document.getElementById("fetch-users-button");

const doFetch = async (amount) => {
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();

    return users;
  };

  const users = await getUsers();

  console.info(users.slice(0, amount));
};

doFetch(5);

fetchUsersBtn.addEventListener("click", async () => {
  await doFetch(5);
});
