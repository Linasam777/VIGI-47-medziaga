// Kintamųjų kūrimo struktūra:
// let/const pavadinimas = reikšmė;

// GALI KEISTIS:    let age = 15;  
// NEGALI* keistis: const name = 'jonas';    * - Pazengusieji raso i asmenines zinutes

const productPrice1 = 15;        // kintamojo pavadinimas ir reiksmes priskyrimas
const productName1 = "Batai";    // string - tekstas
const productAvailable1 = false; // boolean: true false


const productPrice2 = 10; // number: 3, -4.124124124, 12412490190235
const productName2 = 'Šlepetės';
const productAvailable2 = true;

let cartItemsAmount = 0;


const itemCategories = ["Baldai", "Kompiuteriai", "Geles"]; // array (masyvas/sarasas):   [ ]
const usersAges = [16, 82, 25];


const recycleBin = [false, 15, "readme.txt", -5]; // masyvai gali talpinti ivairias reiksmes

console.log(productPrice1 + productPrice2); // spausdinimui


/*
Kodas vykdomas sinchroniskai - kol praeita operacija nebaigta, kitos nebus. Pavyzdziui: kol neivedeme teksto ir prompt nebaige veiklos, tol neatvaizduojamos kintamuju reiksmes HTML. 

* buna isimciu - pazengusiems ASYNC (asinchroniskas kodas)
*/


const userDevice = 'iPhone/iOS';
const userEmail = prompt("Enter your email");
const userLocale = navigator.language;
const currentDate = new Date();

document.getElementById("user-device").innerText = userDevice;
document.getElementById("user-email").innerText = userEmail;
document.getElementById("user-locale").innerText = userLocale;
document.getElementById("current-date").innerText = currentDate;

