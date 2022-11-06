const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

var n1 = 1;

while (n1 != 2002) {
  [n1] = lines
    .shift()
    .split(" ")
    .map((item) => parseInt(item));

  if (n1 == 2002) {
    console.log("Acesso Permitido");
    return 0;
  } else {
    console.log("Senha Invalida");
  }
}
