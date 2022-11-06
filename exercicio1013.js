const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [X1,X2, X3] = input.split(" ").map(item => parseInt(item));

const bign = (X1 + X2 + Math.abs(X1 -X2)) / 2;
const bignumber = (X3 + bign + Math.abs(X3 - bign)) / 2;

console.log(bignumber + " eh o maior")

