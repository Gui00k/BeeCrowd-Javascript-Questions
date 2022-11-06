const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

var temp1;
var temp2;
var number;
var i = 0;
var X;

while (1) {
  var number = parseFloat(lines.shift());

  if (number >= 0 && number <= 10) {
    if (i == 1) {
      temp2 = number;
      media = (temp1 + temp2) / 2;
      console.log("media = " + media.toFixed(2));
      i = 0;
      [X] = lines
        .shift()
        .split(" ")
        .map((item) => parseInt(item));
      console.log("novo calculo (1-sim 2-nao)");

      while (X < 1 || X > 2) {
        [X] = lines
          .shift()
          .split(" ")
          .map((item) => parseInt(item));
        console.log("novo calculo (1-sim 2-nao)");

        if (X == 1) break;
        else if (X == 2) break;
      }

      if (X == 1) continue;
      else if (X == 2) break;
    } else {
      temp1 = number;
      i++;
    }
  } else console.log("nota invalida");
}
