import { getTodos } from "./getTodos.js";

const tableBody = document.querySelector("#todo-list>tbody");

const addRow = (todo) => {
  const { title, completed } = todo; // identiska, jei const title = todo.title;

  const rowElement = document.createElement("tr");
  const todoTitleElement = document.createElement("td");
  const todoCompletedElement = document.createElement("td");
  const isCompletedCheckbox = document.createElement("input");

  isCompletedCheckbox.type = "checkbox";
  isCompletedCheckbox.checked = completed;

  todoTitleElement.textContent = title;

  todoCompletedElement.append(isCompletedCheckbox); // į <td> pridėk checkboxą (<input>)

  rowElement.append(todoTitleElement, todoCompletedElement);

  tableBody.append(rowElement);
};

export const populateTable = async () => {
  const todos = await getTodos();

  todos.forEach((todoItem) => addRow(todoItem));
};
