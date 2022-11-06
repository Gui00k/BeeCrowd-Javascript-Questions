const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");
var n1;
var n2;

while (n1 != 0 && n2 != 0) {
  [n1, n2] = lines
    .shift()
    .split(" ")
    .map((item) => parseInt(item));

  if (n1 > 0 && n2 > 0) {
    console.log("primeiro");
  } else {
    if (n1 < 0 && n2 > 0) {
      console.log("segundo");
    } else {
      if (n1 < 0 && n2 < 0) {
        console.log("terceiro");
      } else {
        if (n1 > 0 && n2 < 0) {
          console.log("quarto");
        }
      }
    }
  }

  //scanf("%d %d", &n1, &n2);
}
