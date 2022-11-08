// BASE URL = https://olive-bead-glazer.glitch.me

//     Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais
// iš base URL.
//     Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem
// inputais - brand ir model; šie paduotų su post
// 'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
//     Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą,
//     turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.

//     Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite
// ar įrašyti duomenys atsivaizduoja :)

const getTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    const fakeBackendTodos = JSON.parse(localStorage.getItem("todos")) || []; // imk, kas yra localstorage. priesingu atveju - tuscias masyvas

    return [...fakeBackendTodos, ...todos];
  } catch (error) {
    console.error(error);
  }
};

export { getTodos };
