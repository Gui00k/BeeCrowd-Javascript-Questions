const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let [Peca1, Item1, price1] = lines.shift().split(" ");
let [Peca2, Item2, price2] = lines.shift().split(" ");

let totalPrice1 = Item1 * price1;
let totalPrice2 = Item2 * price2;

let TotalBuy = totalPrice1 + totalPrice2;

console.log("VALOR A PAGAR: R$ " + TotalBuy.toFixed(2));