// 1. Demander à l'utilisateur de saisir deux nombres
let saisie1 = prompt("Entrez le premier nombre :");
let saisie2 = prompt("Entrez le deuxième nombre :");

// 2. Convertir les valeurs saisies en nombres
let nombre1 = Number(saisie1);
let nombre2 = Number(saisie2);

// 3. Demander à l'utilisateur de choisir une opération
let operation = prompt("Choisissez une opération : + , - , * ou /");

// 4. Effectuer uniquement l'opération choisie et afficher le résultat
if (operation === "+") {
    console.log("Résultat : " + (nombre1 + nombre2));
} else if (operation === "-") {
    console.log("Résultat : " + (nombre1 - nombre2));
} else if (operation === "*") {
    console.log("Résultat : " + (nombre1 * nombre2));
} else if (operation === "/") {
    // Vérifier que le deuxième nombre est différent de zéro avant la division
    if (nombre2 !== 0) {
        console.log("Résultat : " + (nombre1 / nombre2));
    } else {
        console.log("Résultat : impossible (division par zéro).");
    }
} else {
    console.log("Opération non reconnue. Utilisez + , - , * ou /.");
}