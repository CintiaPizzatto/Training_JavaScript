function criarCachorro(raca, patas, cor) {
  let cachorro = Object.create ({});
    cachorro.raca1 = raca;
    cachorro.patas1 = patas,
    cachorro.cor1 = cor;
    return cachorro;
  }

let doberman = criarCachorro('Doberman', 4, 'preta');

console.log(doberman);
console.log(doberman.raca1);
