class Cachorro {
  constructor(raca, cor) {
    this.raca1 = raca;
    this.cor1 = cor;
  }

  latir () { console.log("Au Au");}
}


let labrador = new Cachorro('Labrador', 'amarelo', 4,'longo');
console.log(Cachorro);
console.log(labrador);
Cachorro.prototype.raca1 = 'SRD';

Cachorro.prototype.patas1 = 3;
Cachorro.prototype.pelo1 = 'curto';
console.log(labrador);

labrador.latir();

console.log(Cachorro.prototype.raca1);
console.log(Cachorro);
console.log(labrador.raca1);
console.log(labrador.cor1);
console.log(labrador.patas1);
console.log(labrador.pelo1);
