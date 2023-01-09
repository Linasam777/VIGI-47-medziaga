const loginForm = document.body.querySelector("form#loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.body.querySelector("input#emailInput");
  const passwordInput = document.body.querySelector("input#passwordInput");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // const accessToken = localStorage.getItem('accessToken')
  const accessToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("accessToken="))
    ?.split("=")[1];

  const headers = {
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  try {
    const res = await fetch("http://localhost:5000/sign-in", {
      method: "POST",
      headers,
      body: JSON.stringify({
        userName: email,
        password,
      }),
    });

    if (!res.ok || res.status >= 400) {
      return console.error("Could not fetch the login.");
    }

    const user = await res.json();

    localStorage.setItem("accessToken", user.accessToken);

    document.cookie += `accessToken=${user.accessToken}; SameSite=None; Secure`;
  } catch (error) {
    return console.error(error);
  }
});
