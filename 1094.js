var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;

for (let i = 0; i < lines.length; i++) {
  const [x, y] = lines[i].split(" ");

  if (y == "C\r" || y == "C") {
    n2 += parseInt(x);
  }

  if (y == "R\r" || y == "R") {
    n3 += parseInt(x);
  }

  if (y == "S\r" || y == "S") {
    n4 += parseInt(x);
  }
}

n1 = n2 + n3 + n4;

console.log(`Total: ${n1} cobaias`);
console.log(`Total de coelhos: ${n2}`);
console.log(`Total de ratos: ${n3}`);
console.log(`Total de sapos: ${n4}`);
console.log(`Percentual de coelhos: ${((n2 * 100) / n1).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((n3 * 100) / n1).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((n4 * 100) / n1).toFixed(2)} %`);
