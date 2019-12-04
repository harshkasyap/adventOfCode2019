const fs = require('fs');

function calculateFuleFor(mass) {
    return Math.floor(parseInt(mass, 10) / 3) - 2;
}
const content = fs.readFileSync('day1//input.txt', 'utf8');
let masses = content.split("\r\n");
let fuel = 0;
masses.forEach(element => {
    fuel += calculateFuleFor(element);
});

console.log("part1- ", fuel)

let finalFuel = 0
masses.forEach(element => {
    finalFuel += calculateFuelRec(element);
});

function calculateFuelRec(fu) {
    let f = calculateFuleFor(fu);
    if (f <= 0) {
        return 0;
    }
    return f + calculateFuelRec(f);
}

console.log('part2- ', finalFuel);
