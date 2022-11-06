const input = require('fs').readFileSync('stdin', 'utf8');


let [n] = input.split(" ").map(item => parseInt(item));


var n1 = 0
var n2 = 0
var n3 = 0
var n4 = 0
var n5 = 0

for (n1 = 1; n1 <= n; n1++) {
    n2 = n1 * n1;
    n3 = n1 * n1 * n1;
    console.log(n1, n2, n3);
    n4 = n2 + 1;
    n5 = n3 + 1;
    console.log(n1, n4, n5);
}

