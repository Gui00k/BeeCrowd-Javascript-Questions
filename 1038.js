const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [quantidade] = lines.shift().split(" ").map(item => parseInt(item));

switch (quantidade) { case 1: console.log(`Total: R$ ${(4.00 * parseInt(quantidade).toFixed(2))}`); break;

   case 2:
   console.log(`Total: R$ ${(4.50 * quantidade).toFixed(2)}`);
   break;

   case 3:
   console.log(`Total: R$ ${(5.00 * quantidade).toFixed(2)}`);
   break;

   case 4:
   console.log(`Total: R$ ${(2.00 * quantidade).toFixed(2)}`);
   break;

   default:
    console.log(`Total: R$ ${(1.50 * quantidade).toFixed(2)}`);
}