const numbers = [65, 44, 12, 4];

console.log("antes numbers: " + numbers);
numbers.forEach(item => {
  item = item * 10;
  console.log("item: " + item)
})
console.log("depois numbers: " + numbers);

// outro exemplo:
console.log("antes numbers com myFunction: " + numbers);
numbers.forEach(myFunction);
console.log("depois numbers com myFunction: " + numbers);

function myFunction(item, index, temporaryArray) {
  temporaryArray[index] = item * 10;
}

//arr é uma imagem do numbers, o que altera em arr, altera em numbers
