const input = require('fs').readFileSync('stdin', 'utf8');


//let n1 = Number 
//let n2 = Number 
//let n3 = Number
const [n1,n2, n3] = input.split(" ").map(item => parseInt(item));

if (n1 > n2 && n1 > n3 && n2 > n3) {
    console.log(`${n3}`)
    console.log(`${n2}`)
    console.log(`${n1}`)
}else if (n1 > n2 && n1 > n3 && n2 < n3){
    console.log(`${n2}`)
    console.log(`${n3}`)
    console.log(`${n1}`)
}else if (n2 > n1 && n2 > n3 && n1 > n3) {
    console.log(`${n3}`)
    console.log(`${n1}`)
    console.log(`${n2}`)
}else if (n2 > n1 && n2 > n3 && n1 < n3) {
    console.log(`${n1}`)
    console.log(`${n3}`)
    console.log(`${n2}`)
}else if (n3 > n1 && n3 > n2 && n1 > n2){
    console.log(`${n2}`)
    console.log(`${n1}`)
    console.log(`${n3}`)
}else if (n3 > n1 && n3 > n2 && n1 < n2){
    console.log(`${n1}`)
    console.log(`${n2}`)
    console.log(`${n3}`)
}
console.log(`\n${n1}`)
    console.log(`${n2}`)
    console.log(`${n3}`)