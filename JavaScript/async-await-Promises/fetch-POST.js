const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todos = await response.json();

  return todos;
};

const createArticle = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Sveiki",
      body: "Išsamus temos turinys",
      userId: 1,
    }),
  });

  const article = await response.json();

  console.log(article);
};

// esant modulyje, naudoti await su visais Promise (async) atvejais. dėl paprastumo palikta be await
createArticle();

createArticle();

getTodos();

console.log(1);
