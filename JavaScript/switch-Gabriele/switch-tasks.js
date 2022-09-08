const rating = +prompt("Kiek vertinate prekę?"); //+paverčia į skaičių

switch (rating) {
  case 5:
    console.log("Puikus įvertinimas");

    break;
  case 4:
    console.log("Geras įvertinimas");

    break;
  case 3:
    console.log("Neblogas įvertinimas");

    break;

  default:
    console.log("ok");
    break;
}

console.log(`Įvertinimas ${rating}`);
