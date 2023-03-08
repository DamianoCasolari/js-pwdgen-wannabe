const first_name = prompt("inserisci il tuo nome: ");
console.log(first_name);
const last_name = prompt("inserisci il tuo cognome: ");
console.log(last_name);
const favorite_color = prompt("inserisci il tuo colore preferito: ");
console.log(favorite_color);

document.getElementById("result").innerHTML = `${first_name}${last_name}${favorite_color}23`


