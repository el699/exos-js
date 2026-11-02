const prompt = require('prompt-sync')();

let entier = prompt("Entrez un entier N strictement positif :");
let N = Number(entier);

let somme = 0;
let nbMultiple = 0;
let sommePairs = 0;


for (let i = 1; i <= N; i++) 
    {
    // Afficher le nombre et sa parité
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }

    // Accumuler la somme totale
    somme += i;

    // Compter les multiples de 3
    if (i % 3 === 0) {
        nbMultiple++;
    }

    // Accumuler la somme des pairs
    if (i % 2 === 0) {
        sommePairs += i;
    }
}

// Résultats finaux
console.log("");
console.log("Somme de tous les nombres : " + somme);
console.log("Nombre de multiples de 3 : " + nbMultiple);
console.log("Somme des nombres pairs : " + sommePairs);