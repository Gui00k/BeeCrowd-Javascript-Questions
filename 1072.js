const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');
const [qtd,n] = input.split(" ").map(item => parseInt(item));



  
    var n2 = 0;
    var out = 0
    var i
    
    for(i=0;i<qtd;i++){
     if((n>=10) && (n<=20)){
      n2++;
     }else{
      out++;
     }
    }
    
    console.log("%d in\n", n2);
    console.log("%d out\n",out);
