// Données initiales
let correctPin = "1234";
let balance = 500;

// 1. Demander à l'utilisateur de saisir son code PIN
let saisiePin = prompt("Saisir votre code PIN :");

// 2. Vérifier si le code saisi correspond au code enregistré
if (saisiePin !== correctPin) {
    // 3. Code incorrect : message d'erreur, pas de retrait
    console.log("Erreur : code PIN incorrect.");
    console.log("Opération refusée.");
} else {
    // 4. Code correct : demander le montant du retrait
    let saisieMontant = prompt("Montant du retrait :");
    let montant = parseFloat(saisieMontant);

    // 5. Vérifier que le montant est strictement positif
    if (montant <= 0) {
        console.log("Erreur : le montant doit être strictement positif.");
    }
    // 6. Vérifier que le solde est suffisant
    else if (montant > balance) {
        console.log("Erreur : solde insuffisant.");
        console.log("Solde disponible : " + balance + " TND");
    }
    // 7. Toutes les conditions respectées : effectuer le retrait
    else {
        balance = balance - montant;

        // 8. Afficher le montant retiré et le nouveau solde
        console.log("Retrait effectué avec succès !");
        console.log("Montant retiré : " + montant + " TND");
        console.log("Nouveau solde : " + balance + " TND");
    }
}