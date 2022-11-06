const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [n1, n2, n3, n4] = lines.shift().split(" ").map(item => parseInt(item));

let dif = (Math.abs(n2 * 60) + n4) - (Math.abs(n1 * 60) + n3);
    if ((dif <= 0) & (dif += 24 * 60)) {
        console.log(`O JOGO DUROU ${Math.abs(dif/60)} HORA(S) E ${dif % 60} MINUTO(S)`);
    }




