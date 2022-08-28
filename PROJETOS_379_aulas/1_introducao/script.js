function lembrarSoma(x) {
  console.log(x);
  return function(y) {
    console.log(x);
    console.log(y);
    return x + y;
  }
}

let soma1 = lembrarSoma(2);
// console.log(soma1(5));
