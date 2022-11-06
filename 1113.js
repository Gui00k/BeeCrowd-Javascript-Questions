const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");
var n1 = 1;
var n2 = 0;

while (n1 != n2) {
  [n1, n2] = lines
    .shift()
    .split(" ")
    .map((item) => parseInt(item));

  if (n1 > n2) {
    console.log("Decrescente");
  } else if (n2 > n1) {
    console.log("Crescente");
  }
}
