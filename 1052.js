const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [n1] = input.split(" ").map(item => parseInt(item));


    if (n1==1)
          console.log("January");
       else
          if (n1==2)
             console.log("February");
             else
          if (n1==3)
             console.log("March");
             else
          if (n1==4)
             console.log("April");
             else
          if (n1==5)
             console.log("May");
             else
          if (n1==6)
             console.log("June");
             else
          if (n1==7)
             console.log("July");
             else
          if (n1==8)
             console.log("August");
             else
          if (n1==9)
             console.log("September");
             else
          if (n1==10)
             console.log("October");
             else
          if (n1==11)
             console.log("November");
             else
          if (n1==12)
             console.log("December");
   
