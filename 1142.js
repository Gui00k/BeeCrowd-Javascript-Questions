const input = require('fs').readFileSync('stdin', 'utf8');


let [n] = input.split(" ").map(item => parseInt(item))


var i = 0;


for (i = 1; i <= n * 4; i += 4) {
    console.log(`${i} ${i + 1} ${i + 2} PUM`)
}
