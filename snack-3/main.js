`use strict`;

/*Creiamo variabili per il ciclo*/

const contatoreInizio = 0;
const contatoreFine = 10;
let insiemeNumeri = 0;

/*Creiamo il ciclo*/

for (let numeroIniziale = contatoreInizio; numeroIniziale <= contatoreFine; numeroIniziale++){

    const numeroInserito = prompt(`Inserisci il tuo numero`);
    insiemeNumeri +- numeroInserito;
}

console.log(`La somma dei nuemri è ` + insiemeNumeri);