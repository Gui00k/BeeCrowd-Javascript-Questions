const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');
const [n] = input.split(" ").map(item => parseInt(item));


	var i=2;
	var r;

	while(i<=n){
		if(i%2==0){
			r = i * i;
			console.log(`${i}^2 = ${r}`);
		}
		i++;
	}

