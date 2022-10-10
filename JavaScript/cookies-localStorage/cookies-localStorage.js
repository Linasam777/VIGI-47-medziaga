const privacyButton = document.querySelector("#privacy-policy-submit-button");
const localStorageButton = document.querySelector(
  "#local-storage-submit-button"
);

//cookie
privacyButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString();
  const AGREED_PRIVACY_POLICY_VERSION = `AGREED_PRIVACY_POLICY_VERSION`;
  const versionString = `version: ${todayDate}`;

  document.cookie = `${AGREED_PRIVACY_POLICY_VERSION}=${versionString}`;
});

//localeStorage
localStorageButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString();
  const AGREED_PRIVACY_POLICY_VERSION = `AGREED_PRIVACY_POLICY_VERSION`;
  const versionString = `version: ${todayDate}`;

  localStorage.setItem(AGREED_PRIVACY_POLICY_VERSION, versionString);
});

//locale storage
//localStorage.setItem("time", new Date());
