const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');
const [n] = input.split(" ").map(item => parseInt(item));


	var c =1
    var r

	while(c<=10){		
		r = n * c;
		console.log(`${c} x ${n} = ${r}`);
		c++;		
	}	
	
