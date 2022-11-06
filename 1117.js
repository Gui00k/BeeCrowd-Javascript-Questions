const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

c = 0;
d = 0;

while (1) {
  var a = parseFloat(lines.shift());

  if (d == 2) break;

  if (a >= 0 && a <= 10) {
    d++;

    c += a;
  } else console.log("nota invalida");
}

var b = c / 2.0;

console.log("media = " + b);
