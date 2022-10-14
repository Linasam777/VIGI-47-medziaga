const displayPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const randomNumber = Math.round(Math.random() * 100);
  const post = posts[randomNumber];

  insertPost(post);
};

const insertPost = (newPost) => {
  const postContainer = document.createElement("div");
  const headingElement = document.createElement("h3");
  const paragraphElement = document.createElement("p");

  headingElement.textContent = newPost.title;

  paragraphElement.textContent = newPost.body;

  postContainer.append(headingElement, paragraphElement);

  postContainer.style.border = "1px solid black";
  postContainer.style.margin = "14px 0";

  document.body.querySelector("#usersContainer").append(postContainer);
};

export { displayPost, insertPost };
