// 1. Demander le nom du produit
let produit = prompt("Entrez le nom du produit :");

// 2. Demander son prix unitaire en TND
let saisiePrix = prompt("Entrez le prix unitaire (TND) :");
let prixUnitaire = parseFloat(saisiePrix);

// 3. Demander la quantité commandée
let saisieQuantite = prompt("Entrez la quantité commandée :");
let quantite = parseInt(saisieQuantite);

// 4. Calculer le montant total avant remise
let totalAvantRemise = prixUnitaire * quantite;

// 5. Déterminer le pourcentage de remise selon le montant
let pourcentageRemise;

if (totalAvantRemise < 100) {
    pourcentageRemise = 0;
} else if (totalAvantRemise < 200) {
    pourcentageRemise = 10;
} else {
    pourcentageRemise = 20;
}

// 6. Calculer le montant de la remise et le prix final
let montantRemise = totalAvantRemise * pourcentageRemise / 100;
let totalAPayer = totalAvantRemise - montantRemise;

// 7. Afficher le récapitulatif de la commande
console.log("Produit : " + produit);
console.log("Prix unitaire : " + prixUnitaire + " TND");
console.log("Quantité : " + quantite);
console.log("");
console.log("Total avant remise : " + totalAvantRemise + " TND");
console.log("Remise appliquée : " + pourcentageRemise + " %");
console.log("Montant de la remise : " + montantRemise + " TND");
console.log("");
console.log("Total à payer : " + totalAPayer + " TND");