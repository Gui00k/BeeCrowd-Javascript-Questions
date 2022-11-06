var input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");
var a;
var b;
var c;
var d = 0;

while (1) {
  [a, b] = lines
    .shift()
    .split(" ")
    .map((item) => parseInt(item));

  if (a <= 0 || b <= 0) break;
  else {
    d = 0;
    if (a < b) {
      let n1 = [];

      for (c = a; c <= b; c++) {
        n1.push(c);

        d += c;
      }
      console.log(`${n1.join(" ")} Sum=${d}`);
    } else if (a > b) {
      let n1 = [];
      for (c = b; c <= a; c++) {
        n1.push(c);

        d += c;
      }
      console.log(`${n1.join(" ")} Sum=${d}`);
    }
  }
}
