const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');
const [n] = input.split(" ").map(item => parseInt(item));

	
	var q = 1;
	
	while(q<=10000){
		if(q%n==2){
			console.log(q);
		}
		q++;
	}	
	