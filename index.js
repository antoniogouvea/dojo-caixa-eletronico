var caixa = require('./caixa');
let input = process.argv[2];
console.log('input:', input);
let output = caixa.getNotas(parseInt(input,10));
console.log('output:', output);
