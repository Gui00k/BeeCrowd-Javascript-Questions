const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [n1] = input.split(" ").map(item => parseFloat(item));

 if (n1.toFixed(2) <= 2000.0)
 console.log("Isento");
 else if (n1.toFixed(2) <= 3000.0)
 console.log(`R$ ${(n1.toFixed(2) - 2000.0)* 0.08} `);
 else if (n1.toFixed(2) <= 4500.0)
 console.log(`R$ ${1000.0 * 0.08 + (n1.toFixed(2) - 3000.0)* 0.18} `);
 else
 console.log(`"R$ ${1000.0 * 0.08 + 1500.0 * 0.18 + (n1.toFixed(2) - 4500.0) * 0.28}`);
    