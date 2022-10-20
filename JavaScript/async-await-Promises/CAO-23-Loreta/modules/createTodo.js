const createTodoForm = document.body.querySelector("form#create-todo-form");

const showAdditionStatus = (isSuccessfullyAdded) => {
  if (isSuccessfullyAdded) {
    const successfulTextParagraph = document.createElement("p");

    successfulTextParagraph.textContent =
      "Congratulations! This to-do has been added.";

    createTodoForm.prepend(successfulTextParagraph); // Todo: leisti pridėti tik vieną elementą

    return;
  }

  alert("Could not add to-do.");

  throw Error("Could not add to-do.");
};

createTodoForm.addEventListener("submit", (event) => {
  const localStorageTodosName = "todos";
  // demonstracinis pavyzdys. kai dirbsime su Node.js, naudosim back-end (rinkos praktika)

  event.preventDefault();

  const randomNumber = Math.random();
  const isSuccessfullyAdded = Math.round(randomNumber);
  const todoTitle = document.querySelector("#todo-title").value.trim();
  const todoCompleted = document.querySelector("#todo-completed").checked;
  const fakeBackendTodos =
    JSON.parse(localStorage.getItem(localStorageTodosName)) || []; // imk, kas yra localstorage. priesingu atveju - tuscias masyvas

  const newTodo = {
    // imanoma kintamuosius pavadinti tiesiog title ir completed, tokiu atveju objektas paprasciau apsirasytu
    title: todoTitle,
    completed: todoCompleted,
  };

  showAdditionStatus(isSuccessfullyAdded);

  localStorage.setItem(
    localStorageTodosName,
    JSON.stringify([newTodo, ...fakeBackendTodos]) // pridedu esamas reiksmes ir nauja
  );
});
