const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let R = parseFloat(input);
let PI = 3.14159;
let V =(4/3) * PI * Math.pow(R, 3);
console.log("VOLUME = " + V.toFixed(3));
