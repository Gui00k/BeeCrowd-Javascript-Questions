const input = norequire("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");
let n = parseInt(lines[0]);
lines.shift();

var i;

for (i = 0; i < n; i++) {
  [x, y] = lines
    .shift()
    .split(" ")
    .map((item) => parseInt(item));

  if (y === 0) {
    console.log("divisao impossivel");
  } else {
    var resultado = parseFloat(x / y);

    console.log(resultado.toFixed(1));
  }
}

// while (t--) {
//   [n, m] = lines
//     .shift()
//     .split(" ")
//     .map((item) => parseInt(item));

//   if (m == 0) console.log("divisao impossivel");
//   else {
//     d = n / m;
//     console.log(d);
//   }
// }
