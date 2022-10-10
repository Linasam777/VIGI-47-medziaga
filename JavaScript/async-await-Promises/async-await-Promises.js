const getDelayedMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello!"); // be resolve, await nezinotu, kada gauna atsakyma
    }, 5_000);
  });
};

console.log(1);

// kviecia funkcija. kai grizta atsakymas - naudoja resolve reiksme ir ja talpina result kintamajame
// kadangi be await, veikia fone.
getDelayedMessage().then((result) => console.log(result));

console.log(2);

await getDelayedMessage();

console.log(3);
