/**
 * 
    A partire da un array di stringhe,
    crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
 */

const words = ['pippo', 'PLUTO', 'Paperino'];

const wordsFormatted = words.map((word) => {

    wordElement = (word.toLowerCase());
    return wordElement.charAt(0).toUpperCase() + wordElement.slice(1);

})

console.log(wordsFormatted)