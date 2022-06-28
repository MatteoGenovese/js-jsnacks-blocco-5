/* 
 * Crea 10 oggetti che rappresentano un peperone, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutti i peperoni.
 */

peperoni = [

    {
        nome: "Peperone di Pontecorvo Dop",
        peso: 1,
        lunghezza: 20
    },
    {
        nome: "Peperone di Carmagnola Igp",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Peperone di Senise Igp",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Peperone Quadrato di Asti",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Peperone di Capriglio",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Papaccella napoletana",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Friggitello Torricello",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Peperone dolce di Altino",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Peperone di Polizzi Generosa",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Cappello del Vescovo",
        peso: 1,
        lunghezza: 23
    }
]

let pesoTot = 0
for (let peperone in peperoni) {
    pesoTot = pesoTot + peperoni[peperone].peso;
    console.log(peperoni[peperone].peso)
}

console.log(pesoTot);