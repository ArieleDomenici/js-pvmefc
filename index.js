// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1> Test</h1>`;

//esercizio provate a scrivere il codice per verificare titolo e autore di un certo volume contengono una certa sequenza di caratteri
let titolo = 'RidsjTFwielfj';
let autore = 'EoiwpoFDfewr';
let stringToCheck = 'z';
let contains = (titolo + autore).toLowerCase().includes(stringToCheck);
console.log(contains);

//esercizio a partire dal codice realizzato nell'esercizio precedente realizzate una classe archivio contenente un metodo che restituisce un array di libri che corrispondono ad una certa stringa
//l'array in cui eseguire la ricerca è caricato in una variabile nella stessa classe tramite il costruttore
//il singolo libro può essere a sua volte rappresentato da una classe Libro con i quattro attributi necessari, specificati nella consegna del progetto
class archivio {
  constructor(libri) {
    this.libri = libri;
  }
  trovaLibro(testoRicerca) {
    let libriMatch = [];
    let libri = this.libri;
    for (let libro in libri) {
      let titolo = libro.titolo;
      let autore = libro.autore;
      if ((titolo + autore).toLowerCase().includes(stringToCheck)) {
        libriMatch.push(libro);
      }
    }
    return libriMatch;
  }
}
