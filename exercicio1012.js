const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const PI = 3.14159

let [A, B, C] = input.split(" ").map(item => parseFloat(item));

let triang = (A * C) / 2.0;
let circ = PI * Math.pow(C, 2);
let trape = ((A + B) * C) / 2.0;
let quadr = B * B;
let rtg = A * B;

console.log("TRIANGULO: " + triang.toFixed(3));
console.log("CIRCULO: " + circ.toFixed(3));
console.log("TRAPEZIO: " + trape.toFixed(3));
console.log("QUADRADO: " + quadr.toFixed(3));
console.log("RETANGULO: " + rtg.toFixed(3));


