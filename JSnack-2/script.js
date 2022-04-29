/*
Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/


const zucchineList = [
  {
    variety : "varietà1",
    weightInGr : 520,
    lenghtInCm : 30
  },

  {
    variety : "varietà2",
    weightInGr : 160,
    lenghtInCm : 15
  },

  {
    variety : "varietà3",
    weightInGr : 320,
    lenghtInCm : 23
  },

  {
    variety : "varietà4",
    weightInGr : 100,
    lenghtInCm : 10
  },

  {
    variety : "varietà5",
    weightInGr : 110,
    lenghtInCm : 11
  },

  {
    variety : "varietà6",
    weightInGr : 160,
    lenghtInCm : 19
  },

  {
    variety : "varietà7",
    weightInGr : 150,
    lenghtInCm : 14
  },

  {
    variety : "varietà8",
    weightInGr : 190,
    lenghtInCm : 20
  },

  {
    variety : "varietà9",
    weightInGr : 200,
    lenghtInCm : 28
  },

  {
    variety : "varietà10",
    weightInGr : 220,
    lenghtInCm : 24
  },

];



const zucchinaSmall = [];

const zucchinaLong = [];


for(let index in zucchineList){

  let zucchina = zucchineList[index]

    if(zucchina.lenghtInCm <= 15){
      zucchinaSmall.push(zucchina)
    }else{
      zucchinaLong.push(zucchina)
    }
  
}

console.log(zucchinaSmall)
console.log(zucchinaLong)


let sumSmall = 0;

for(let zucchina of zucchinaSmall){
  const {weightInGr} = zucchina
  sumSmall += weightInGr;
}

console.log(sumSmall);

let sumLong = 0;

for(let zucchina of zucchinaLong){
  const {weightInGr} = zucchina
  sumLong += weightInGr;
}

console.log(sumLong);