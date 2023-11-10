`use strict`;

/*Creiamo due prompt per chiedere le due parole da conforntare*/

const primaParola = prompt(`Inserisci la prima parola`);
const secondaParola = prompt(`Inserisci la prima parola`);

/*Creiamo la condizione in cui stampiamo in console la parola inserita più grande*/

if (primaParola.length > secondaParola.length) {
    console.log (`La parola più corta è: ` + secondaParola);
    console.log (`La parola più lunga è: ` + primaParola);
}
else if (secondaParola.length > primaParola.length) {
    console.log (`La parola più corta è: ` + primaParola);
    console.log (`La parola più lunga è: ` + secondaParola);
}
else {
    console.log(`Le parole hanno la stessa lunghezza`);
}