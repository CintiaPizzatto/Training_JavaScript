const cachorro = {
  raca: '',
  uivar: function() { console.log("Auuuuu"); },
  rosnar: function() { console.log("Grrrr"); },
  setRaca: function(racca) { this.raca = racca; },
  getRaca: function() { return "A raça é "  + this.raca;}
}

console.log(cachorro.getRaca());
cachorro.uivar();
cachorro.setRaca('Pastor Alemão');
console.log(cachorro.raca);
console.log(cachorro.getRaca());
