// 1. Demander le nom de l'étudiant
let nom = prompt("Entrez le nom de l'étudiant :");

// 2. Demander sa note sur 20
let saisieNote = prompt("Entrez la note sur 20 :");
let note = Number(saisieNote);

// 3. Déterminer la mention avec if / else if / else
let mention;

if (note < 0 || note > 20) {
    mention = "Note invalide (doit être entre 0 et 20)";
} else if (note < 10) {
    mention = "Échec";
} else if (note < 12) {
    mention = "Passable";
} else if (note < 14) {
    mention = "Assez bien";
} else if (note < 16) {
    mention = "Bien";
} else {
    mention = "Très bien";
}

// 4. Afficher le nom, la note et la mention obtenue
console.log("Étudiant : " + nom);
console.log("Note : " + note + "/20");
console.log("");
console.log("Résultat : " + mention);

// Message personnalisé selon la mention
if (mention === "Très bien" || mention === "Bien") {
    console.log("Félicitations " + nom + " !");
} else if (mention === "Échec") {
    console.log("Courage " + nom + ", il faut persévérer !");
}