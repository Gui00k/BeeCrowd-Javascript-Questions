const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

const [X, Y] = input.split("\n").map((item) => parseInt(item));

let cont = 0;

if (X > Y) {
  for (cont = Y + 1; cont < X; cont++) {
    if (cont % 5 == 2 || cont % 5 == 3) {
      console.log(cont);
    }
  }
} else if (X < Y) {
  for (cont = X + 1; cont < Y; cont++) {
    if (cont % 5 == 2 || cont % 5 == 3) {
      console.log(cont);
    }
  }
}
