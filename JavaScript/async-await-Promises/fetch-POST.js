const getTodos = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = await request.json();

  console.log(response);

  return response;
};

const createArticle = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Sveiki",
      body: "Išsamus temos turinys",
      userId: 1,
    }),
  });

  const response = await request.json();

  console.log(response);
};

// esant modulyje, naudoti await su visais Promise (async) atvejais. dėl paprastumo palikta be await
createArticle();

createArticle();

getTodos();

console.log(1);
