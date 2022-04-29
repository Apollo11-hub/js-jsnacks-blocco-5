/*
Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
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

let sumGr = 0;

let sumCm = 0;



for(let zucchina of zucchineList){
  const {weightInGr,lenghtInCm} =zucchina
  sumGr += weightInGr;
}

console.log(sumGr);

