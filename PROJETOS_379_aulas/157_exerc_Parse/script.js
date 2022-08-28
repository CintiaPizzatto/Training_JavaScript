let pessoa = {
  "nome": "Matheus",
  "idade": 81,
  "languages": ["PHP",
                "JavaScript",
                "Python"]
}
// pessoaTest é um JSON.
// tem a chave languages com o valor: array de strings
let pessoaTest = {
  "languages": ["PHP",
                "JavaScript",
                "Python"]
}
// console.log(pessoa);

// converter o Json para string
// let jsonToString = JSON.stringify(pessoa);
// console.log(jsonToString);
// let stringToJson = JSON.parse(jsonToString);
// console.log(stringToJson);

// flag é um JSON.
// tem a chave countries com o valor: array de JSON
// o JSON[0] é country e flag da Ireland
// o JSON[1] é country e flag da Serbia
// o JSON[2] é country e flag do Peru
let flag = {
            "countries" :
                          [ { "country":"Ireland" , "flag":"🇮🇪" } ,
                            { "country":"Serbia"  , "flag":"🇷🇸" } ,
                            { "country":"Peru"    , "flag":"🇵🇪" } ]
            };
console.log(flag); // {countries: Array(3)}
console.log(flag.countries[0]); // {country: 'Ireland', flag: 'IE'}
console.log(flag.countries[0].country); // Ireland





// cria uma variável (flagsJSON) com a concactenação (' ' + ' ' + ' ') de strings
let flagsJSON =
  '{ "countries" : [' +
  '{ "country":"Ireland" , "flag":"🇮🇪" },' +
  '{ "country":"Serbia" , "flag":"🇷🇸" },' +
  '{ "country":"Peru" , "flag":"🇵🇪" } ]}';
  // console.log(flagsJSON);

  let pessoa2 =
    '{ "nome": "Matheus",' +
    '"idade": 81,' +
    '"languages": ["PHP", "JavaScript", "Python"] }';
  console.log('pessoa2 é um string:');
  console.log(pessoa2);
  var pessoa2ToJson = JSON.parse(pessoa2);
  console.log('pessoa2 To string:');
  console.log(pessoa2ToJson);
  console.log(pessoa2ToJson.languages[1]); // Javascript

  // faço um PARSE neste string e crio um JSON flagDatabase
var flagDatabase = JSON.parse(flagsJSON);
// console.log(flagDatabase);
