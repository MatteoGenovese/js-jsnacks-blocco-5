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
pesoZucchineCorte = 0;
zucchineLunghe = [];
pesoZucchineLunghe = 0;

let pesoTot = 0
for (let zucchina in zucchine) {
    if (zucchine[zucchina].lunghezza > 15) {
        zucchineLunghe.push(zucchine[zucchina].lunghezza);
        pesoZucchineLunghe = pesoZucchineLunghe + zucchine[zucchina].peso;
    } else {
        zucchineCorte.push(zucchine[zucchina].lunghezza);
        pesoZucchineCorte = pesoZucchineCorte + zucchine[zucchina].peso;
    }

}


console.log(`
Zucchine lunghe
Lunghezze = ${zucchineLunghe} 
peso = ${pesoZucchineLunghe}`);

console.log(`
Zucchine corte
Lunghezze = ${zucchineCorte} 
peso = ${pesoZucchineCorte}`);