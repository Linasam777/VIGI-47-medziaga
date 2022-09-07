const firstName = prompt("Koks jūsų vardas?");

// Imk firstName reikšmę ir tikrink pagal loginius nurodymus/atvejus
switch(firstName) {
    case 'Jonas': {
        console.info("Atitinka mano vardą.");
        break; // kodo switch'e nebežiūrės
    }

    case 'Adolfas': {
        console.info("Neatitinka mano vardo.");
        break;
    }

    default: { // jei kiti atvejai netinka
        console.info(`Sis vardas idomus: ${firstName}`); // String template literal
    }
};
