const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [X] = input.split(" ").map(item => parseInt(item));

 if (X==61)
       console.log("Brasilia");
    else
       if (X==71)
          console.log("Salvador");
          else
       if (X==11)
          console.log("Sao Paulo");
          else
       if (X==21)
          console.log("Rio de Janeiro");
          else
       if (X==32)
          console.log("Juiz de Fora");
          else
       if (X==19)
          console.log("Campinas");
          else
       if (X==27)
          console.log("Vitoria");
          else
       if (X==31)
          console.log("Belo Horizonte");
       else
          console.log("DDD nao cadastrado");

