const surveyForm = document.querySelector("form#survey-form");

surveyForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-input").value.trim();
  const author = document.querySelector("#author-input").value.trim();

  const newPost = { title, author };

  // todo: trycatch
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost), // HTTP REQUESTO PAGRINDINIS TURINYS (BODY)
  });

  if (response.ok) {
    document.body.style.backgroundColor = "green";
  }
});
