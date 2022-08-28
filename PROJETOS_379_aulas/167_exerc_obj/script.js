// let onibus = {
//   rodas: 8,
//   limitePassageiros: 40,
//   portas: 2
// };

// delete onibus.rodas;
// console.log(onibus.rodas);

// onibus.janelas = 20; // adicionei uma nova propriedade
// console.log(onibus);
// console.log(onibus.janelas);

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
console.log(name);
