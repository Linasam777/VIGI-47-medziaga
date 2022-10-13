// Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

class Person {
  firstName;
  lastName;

  constructor(firstName, lastName) {
    this.firstName = this.getFormattedName(firstName);
    this.lastName = this.getFormattedName(lastName);

    // Pastaba: i table prideti galima ir cia.
  }

  getFormattedName(name) {
    if (name.toLowerCase().includes("van")) {
      const names = name.split(" ");
      const lastName = names[1];

      return `van ${lastName[0].toLocaleUpperCase()}${lastName
        .slice(1)
        .toLocaleLowerCase()}`;
    }

    return name[0].toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();
  }

  addToTheTable() {
    const usersListElement = document.querySelector("tbody#users-list");

    const nameRow = document.createElement("tr");
    const firstNameElement = document.createElement("td");
    const lastNameElement = document.createElement("td");

    firstNameElement.textContent = this.firstName;
    lastNameElement.textContent = this.lastName;

    nameRow.append(firstNameElement, lastNameElement);

    usersListElement.append(nameRow);
  }
}

const fullNameEntryForm = document.querySelector("form#fullNameEntry");

fullNameEntryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.querySelector("#fullNameInput").value.trim();

  const firstName = fullName.split(" ")[0];
  const otherNames = fullName.slice(firstName.length).trim(); // potential middle name, last name

  const user = new Person(firstName, otherNames);

  user.addToTheTable();

  console.log({ user }); // musu naujas vartotojas. galime POST i duomenu baze
});
