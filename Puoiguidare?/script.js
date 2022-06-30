/**
 * 
 * Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare,
in base all'età.
 * 
 */

const persone = [

    {
        nome: "Matteo",
        eta: 31,
    },
    {
        nome: "Giorgia",
        eta: 17,
    },
    {
        nome: "Matteo",
        eta: 31,
    },
    {
        nome: "Matteo",
        eta: 31,
    },
    {
        nome: "Matteo",
        eta: 31,
    },
    {
        nome: "Matteo",
        eta: 31,
    },
]


const permessi = persone.map((persona) => {
    const { nome, eta } = persona;
    if (eta >= 18)
        return `${nome} ha ${eta}, può guidare`
    else
        return `${nome} ha ${eta}, non può guidare`
})

console.log(permessi)