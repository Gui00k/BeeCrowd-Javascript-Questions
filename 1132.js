const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");
const [n1, n2] = input.split("\n").map((item) => parseInt(item));

var i;
var soma = 0;

if (n1 < n2) {
  for (i = n1; i <= n2; i++) {
    if (i % 13 != 0) {
      soma += i;
    }
  }
} else {
  for (i = n2; i <= n1; i++) {
    if (i % 13 != 0) {
      soma += i;
    }
  }
}
console.log("%d", soma);
// var soma = 0;
// var i;
// var aux = 0;

// if (y < x) {
//   aux = x;
//   x = y;
//   y = aux;
// }

// for (i = x; i <= y; i++) {
//   if (i % 13 != 0) {
//     soma += i;
//   }
// }
// console.log(soma);
