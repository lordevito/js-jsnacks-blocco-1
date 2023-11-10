`use strict`;

/*Creiamo variabili per il ciclo*/

let contatoreInizio = 0;
let contatoreFine = 10;

/*Creiamo il ciclo*/

for (let i = 1; i <= contatoreFine; i++){

    const numeroInserito = Number(prompt(`${i} - Inserisci il tuo numero`));
    if (!isNaN(numeroInserito)) {
        console.log(`${i} - Hai inserito il numero ${numeroInserito}`)
        contatoreInizio +- numeroInserito;
        console.log(`${i} - La somma è ${contatoreInizio}`)
    }
    else{
        console.log(`${i} - Hai inserito un valore non valido`)
    }
    
}

console.log(`La somma dei nuemeri è ` + contatoreInizio);