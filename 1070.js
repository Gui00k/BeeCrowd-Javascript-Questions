const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [num] = input.split(" ").map(item => parseInt(item));



 var cont = 0
    
    if(num%2==0)
        num=num+1;
    else
        num=num;
    console.log(num);
    for(cont=1;cont<=5;cont++)
    console.log(num+=2);

    
