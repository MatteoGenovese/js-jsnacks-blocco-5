/**
 * 
    Crea un array composto da 10 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà:
    marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati:
    nel primo array solo le auto a benzina, 
    nel secondo solo le auto a diesel, 
    nel terzo il resto delle auto.
    
    Infine stampa separatamente i 3 array.

 * 
 */

macchine = [

    {
        marca: "Audi A1",
        modello: "ultra TDI",
        alimentazione: "Diesel"
    },
    {
        marca: "Audi A1",
        modello: "TBI",
        alimentazione: "Benzina"
    },
    {
        marca: "Audi A3",
        modello: "ultra TDI",
        alimentazione: "Diesel"
    },
    {
        marca: "Audi A3",
        modello: "TBI",
        alimentazione: "Benzina"
    },
    {
        marca: "Audi A4",
        modello: "ultra TDI",
        alimentazione: "Diesel"
    },
    {
        marca: "Audi A4",
        modello: "TBI",
        alimentazione: "Benzina"
    },
    {
        marca: "Audi Q8",
        modello: "ultra TDI",
        alimentazione: "Diesel"
    },
    {
        marca: "Audi Q8",
        modello: "TBI",
        alimentazione: "Elettrico"
    },
    {
        marca: "Audi S1",
        modello: "ultra TDI",
        alimentazione: "Benzina"
    },
    {
        marca: "Audi A4",
        modello: "TBI",
        alimentazione: "Benzina"
    },
]

const autoABenzina = macchine.filter((macchina) => macchina.alimentazione === "Benzina")
console.log(autoABenzina)

const autoDiesel = macchine.filter((macchina) => macchina.alimentazione === "Diesel")
console.log(autoDiesel)

const altreAuto = macchine.filter((macchina) => macchina.alimentazione !== "Diesel" && macchina.alimentazione !== "Benzina")
console.log(altreAuto)