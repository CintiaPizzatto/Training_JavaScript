function retornaPositivo(x) {
return Math.abs(x);
}


console.log(retornaPositivo(12));
console.log(retornaPositivo("-1"));     // 1
console.log(retornaPositivo(-2));       // 2
console.log(retornaPositivo("teste"));     // 0

console.log(retornaPositivo("-teste"));    // NaN

console.log(retornaPositivo('string')); // NaN
console.log(retornaPositivo("string"));         // NaN
