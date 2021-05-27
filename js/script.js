// Lettura dei chilometri percorsi dall'utente
var kmPercorsi = parseInt(prompt('Quanti chilometri percorrerai?'));
console.log(kmPercorsi);

// Lettura dell'età del passeggero
var eta = parseInt(prompt('Quanti anni hai?'));
console.log(eta);

// Definizione del prezzo al kilometro
var prezzoAlKm = 0.21;
// sconto del 20% per i minori
var scontoMinorenne = 0.8;
// sconto per gli over 65
var scontoAnziano = 0.6;

// Calcolo del prezzo totale
var totale = kmPercorsi * prezzoAlKm;

// check se necessaria l'applicazione di uno sconto
if (eta < 18) {
    // se minorenne
    totale = totale * scontoMinorenne;
} else if (eta >= 65) {
    // se over 65
    totale = totale * scontoAnziano;
}

console.log(totale + '€');