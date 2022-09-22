const listElement = document.getElementsByTagName("ol")[0];

const firstListElement = listElement.children[0];
const secondListElement = listElement.children[1];

listElement.replaceChildren(
  secondListElement,
  firstListElement,
  listElement.children[2]
);
