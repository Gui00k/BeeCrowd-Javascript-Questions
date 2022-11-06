const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

var co = 0;

c1 = 0;
c2 = 0;
c3 = 0;
while (1) {
  [a, b] = lines
    .shift()
    .split(" ")
    .map((item) => parseInt(item));
  if (a > b) {
    c1++;
  }
  if (a < b) {
    c2++;
  }
  if (a == b) {
    c3++;
  }
  co++;
  console.log("Novo grenal (1-sim 2-nao)");
  [c] = lines.map((item) => parseInt(item));
  lines.shift();
  if (c == 2) {
    break;
  }
}
console.log("grenais", co);
console.log("Inter:", c1);
console.log("Gremio:", c2);
console.log("Empates:", c3);
if (c1 > c2) {
  console.log("Inter venceu mais");
} else if (c1 < c2) {
  console.log("Gremio venceu mais");
} else {
  console.log("Empates venceu mais");
}

// var c = 0;
// var d = 0;
// var e = 0;
// var f;
// var g;
// var h;
// var i;
// var j = 0;
// var k = 0;
// var l = 0;
// while (1) {
//   var f = parseInt(lines[1]);
//   [a, b] = lines
//     .shift()
//     .split(" ")
//     .map((item) => parseInt(item));

//   if (a > b) l++;
//   if (a < b) k++;
//   if (a == b) j++;
//   c += a;
//   d += b;
//   e++;
//   console.log("Novo grenal (1-sim 2-nao)");

//   if (f == 1) continue;
//   if (f == 2) break;
//   lines.shift();
// }
// console.log(e + " grenais");
// console.log("Inter:" + l);
// console.log("Gremio:" + k);
// console.log("Empates:" + j);
// if (l > k) console.log("Inter venceu mais");
// if (l < k) console.log("Gremio venceu mais");
// if (k == l) console.log("Nao houve vencedor");
