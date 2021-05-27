// Lettura dei chilometri percorsi dall'utente
var kmPercorsi = parseInt(prompt('Quanti chilometri percorrerai?'));
// console.log(kmPercorsi);
document.getElementById('km-percorsi').innerHTML += kmPercorsi + 'km';

// Lettura dell'età del passeggero
var eta = parseInt(prompt('Quanti anni hai?'));
// console.log(eta);

// Definizione del prezzo al kilometro e degli sconti
var prezzoAlKm = 0.21;
document.getElementById('prezzo-al-km').innerHTML += prezzoAlKm + '€';

var scontoMinorenne = 0.8;
var scontoAnziano = 0.6;


// Calcolo del prezzo totale
var totale = (kmPercorsi * prezzoAlKm).toFixed(2);
document.getElementById('prezzo-totale').innerHTML += totale + '€';

// check se necessaria l'applicazione di uno sconto
if (eta < 18) {
    // se minorenne
    totale = (totale * scontoMinorenne).toFixed(2);
    document.getElementById('prezzo-scontato').innerHTML = 'Essendo minorenne hai diritto ad uno sconto del 20%. Il tuo prezzo scontato è ==> ' + totale + '€';
} else if (eta > 65) {
    // se over 65
    totale = (totale * scontoAnziano).toFixed(2);
    document.getElementById('prezzo-scontato').innerHTML = 'Essendo over 65 hai diritto ad uno sconto del 40%. Il tuo prezzo scontato è ==> ' + totale + '€';
}

// console.log(totale + '€');