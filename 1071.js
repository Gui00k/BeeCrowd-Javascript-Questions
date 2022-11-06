const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let menor = lines[0]
let maior = lines[1]


    
	
	var somaImpar = 0;
	if(maior == menor){
		console.log(somaImpar);
	}else{
		if(maior < menor){
			somaImpar = maior;
			maior = menor;
			menor = somaImpar;
		}
		somaImpar = 0;
		if(menor%2!=0){
			menor++;
		}
		for(menor;menor<maior;menor++){
			if(menor%2!=0){
				somaImpar = somaImpar + menor;
			}
		}
		console.log(somaImpar);
	}	
