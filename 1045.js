const input = require('fs').readFileSync('stdin', 'utf8');

let [a, b, c] = input.split(" ").map(item => parseFloat(item));
let x = 0

if (a < b) {
    x = a, a = b, b = x
}
if (b < c) {
    x = b, b = c, c = x
}
if (a < b) {
    x = a, a = b, b = x
}
if (a >= b + c) console.log("NAO FORMA TRIANGULO");
else
    if (a * a == b * b + c * c)
        console.log("TRIANGULO RETANGULO");
    else
        if (a * a > b * b + c * c)
            console.log("TRIANGULO OBTUSANGULO");
        else
            if (a * a < b * b + c * c) console.log("TRIANGULO ACUTANGULO");
if (a == b && b == c)
    console.log("TRIANGULO EQUILATERO");
else
    if (a == b || b == c) console.log("TRIANGULO ISOSCELES");


