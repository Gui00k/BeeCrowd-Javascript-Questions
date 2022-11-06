const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

X = 0;
fuel = 0;
alcool = 0;
gasolina = 0;
diesel = 0;
while (X != 4) {
  X = parseInt(lines.shift());
  if (X == 1) {
    alcool += 1;
  } else if (X == 2) {
    gasolina += 1;
  } else if (X == 3) {
    diesel += 1;
  }
}
console.log("MUITO OBRIGADO");
console.log("Alcool: %d", alcool);
console.log("Gasolina: %d", gasolina);
console.log("Diesel: %d", diesel);
