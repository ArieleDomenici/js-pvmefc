// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Test</h1>`;

//esercizio provate a scrivere il codice per verificare titolo e autore di un certo volume contengono una certa sequenza di caratteri
let titolo = 'RidsjTFwielfj';
let autore = 'EoiwpoFDfewr';
let stringToCheck = 'z';
let contains = (titolo + autore).toLowerCase().includes(stringToCheck);
console.log(contains);
