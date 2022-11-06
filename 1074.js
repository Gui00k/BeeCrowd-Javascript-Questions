const input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");
lines.shift();
let i = parseInt();
for (i of lines) {
    if (parseInt(i) % 2 === 0) {
        out = "EVEN";
    } else {
        out = "ODD";
    }
    if (parseInt(i) === 0) {
        console.log((out = "NULL"));
    }
    if (parseInt(i) > 0) {
        console.log((out += " POSITIVE"));
    }
    if (parseInt(i) < 0) {
        console.log((out += " NEGATIVE"));
    }

}
