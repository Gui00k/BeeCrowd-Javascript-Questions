const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [num, cont] = lines.shift().split(" ").map(item => parseFloat(item));



//cont = 0
totalnum = 0;
total = 0;
media = 0;

for (cont = 1; cont <= 6; cont++) {
    if (num > 0) {
        totalnum += 1;
        total += num;
    }
}
media = total / totalnum;

console.log("%d valores positivos\n", totalnum);
console.log("%.1f\n", media);
return 0;
