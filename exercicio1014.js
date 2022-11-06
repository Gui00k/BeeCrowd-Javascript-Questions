const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [distance, fuelconsum] = input.split("\n");
const fullFuel = distance / fuelconsum;

console.log(fullFuel.toFixed(3) + " km/1");

