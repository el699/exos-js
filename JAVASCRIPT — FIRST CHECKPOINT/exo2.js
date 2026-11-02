// 1. Demander à l'utilisateur de saisir deux nombres
let saisie1 = prompt("Entrez le premier nombre :");
let saisie2 = prompt("Entrez le deuxième nombre :");

// 2. Convertir les valeurs saisies en nombres
let nombre1 = Number(saisie1);
let nombre2 = Number(saisie2);

// 3. Calculer la somme, la différence, le produit et le quotient
let somme = nombre1 + nombre2;
let difference = nombre1 - nombre2;
let produit = nombre1 * nombre2;

// 4. Afficher les résultats dans la console
console.log("Premier nombre : " + nombre1);
console.log("Deuxième nombre : " + nombre2);
console.log("Somme : " + somme);
console.log("Différence : " + difference);
console.log("Produit : " + produit);

// 5. Vérifier que le deuxième nombre est différent de zéro avant la division
if (nombre2 !== 0)
    {
    let quotient = nombre1 / nombre2;
    console.log("Quotient : " + quotient);
    } 
else
    {
    console.log("Quotient : impossible ");
    }