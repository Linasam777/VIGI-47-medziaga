const showPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // "/posts" yra endpoint.
  const posts = await response.json();
  console.log(posts);
};
await showPosts();
