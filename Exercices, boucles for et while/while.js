const prompt = require('prompt-sync')();


let nbr_articles = 0;
let total = 0;
let saisie = prompt("Entrez le prix d'un article (0 pour terminer) :");

// Boucle while : on continue tant que l'utilisateur n'a pas saisi 0
while (Number(saisie) !== 0) {
    let prix = Number(saisie);

    // Prix négatif : erreur, on ignore
    if (prix < 0) {
        console.log("Erreur : prix négatif (" + prix + ") ignoré.");
    } else {
        // Prix valide : on compte l'article et on ajoute au total
        nbr_articles++;
        total += prix;
    }

    // Demander le prix suivant
    saisie = prompt("Entrez le prix de l'article suivant  article (0 pour terminer) :");
}

// Aucun article valide
if (nbr_articles === 0) {
    console.log("Panier vide");
} else {
    // Remise de 10 % si total >= 100
    let remise = 0;
    if (total >= 100) {
        remise = total * 0.10;
    }

    let montantAPayer = total - remise;

    // Affichage du récapitulatif
    console.log("Nombre d'articles : " + nbr_articles);
    console.log("Total avant remise : " + total);
    console.log("Remise : " + remise);
    console.log("Montant à payer : " + montantAPayer);
}