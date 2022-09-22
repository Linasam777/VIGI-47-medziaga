const showAlert = (callback) => {
  alert();

  callback();
};

// callbackas
const logGreeting = () => {
  console.log("Laba diena.");
};

showAlert(logGreeting);
