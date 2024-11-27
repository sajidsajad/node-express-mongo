const fs = require('fs');

console.log('------- Blocking, SYNCHRONOUS -------- ');
const inputText = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(inputText);

const outputText = `About the avocado: ${inputText}. \n created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', outputText);
console.log('File is written');
const inputNewText = fs.readFileSync('./txt/output.txt', 'utf-8');
console.log(inputNewText + '\n');