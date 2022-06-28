/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

zucchine = [

    {
        nome: "Zucchino romanesco",
        peso: 1,
        lunghezza: 5
    },
    {
        nome: "Zucchino fiorentino",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Zucchina napoletana",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Zucchine tonde",
        peso: 1,
        lunghezza: 4
    },
    {
        nome: "Zucchine trombetta",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Zucchino romanesco",
        peso: 1,
        lunghezza: 5
    },
    {
        nome: "Zucchino fiorentino",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Zucchina napoletana",
        peso: 1,
        lunghezza: 23
    },
    {
        nome: "Zucchine tonde",
        peso: 1,
        lunghezza: 4
    },
    {
        nome: "Zucchine trombetta",
        peso: 1,
        lunghezza: 23
    },
]

zucchineCorte = [];
zucchineLunghe = []

let pesoTot = 0
for (let zucchina in zucchine) {
    if (zucchine[zucchina].lunghezza > 15)
        zucchineLunghe.push(zucchine[zucchina].lunghezza);
    else
        zucchineCorte.push(zucchine[zucchina].lunghezza);

}


console.log(zucchineLunghe);
console.log(zucchineCorte);