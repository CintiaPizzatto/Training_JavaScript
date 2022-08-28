function Cachorro(raca, patas, cor) {
  this.raca1 = raca;
  this.patas1 = patas;
  this.cor = cor;
  this.uivar = function () {
    console.log("Auuuuu");
  }
  }

let husky = new Cachorro('Husky', 4, 'branco');

console.log(husky);
console.log(husky.raca1);
