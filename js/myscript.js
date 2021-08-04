
const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Inserisci il tuo cognome");
const colorePreferito = prompt("Inserisci il tuo colore preferito");
const generatedPassword = (nome + cognome + colorePreferito);

document.getElementById("nome").innerHTML = nome;
document.getElementById("cognome").innerHTML = cognome;
document.getElementById("colore-preferito").innerHTML = colorePreferito;
document.getElementById("generated-password").innerHTML = generatedPassword;