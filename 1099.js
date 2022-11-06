const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");
let n = parseInt(lines[0]);
lines.shift();

let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;
while (a3 < n) {
  [n1, n2] = lines
    .shift()
    .split(" ")
    .map((item) => parseInt(item));

  if (n1 == n2 || n2 == n1 + 1 || n1 == n2 + 1) {
    console.log("0");
  } else if (n1 < n2 || n1 > n2) {
    if (n1 > n2) {
      a1 = n1;
      n1 = n2;
      n2 = a1;
    }
    for (a4 = 0; a4 < n; a4++) {
      while (n1 < n2 - 1) {
        n1 += 1;
        if (n1 % 2 != 0) {
          a2 += n1;
        }
      }
    }
    console.log(a2);
    a2 = 0;
  }
  a3++;
}
