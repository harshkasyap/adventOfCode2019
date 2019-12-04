const fs = require('fs');

const content = fs.readFileSync('day3//input.txt', 'utf8');
const lines = content.split("\r\n");
lines.forEach((element, index) => {
    lines[index] = element.split(",")
});

function buildLine(line, output) {
    line.forEach((move) => {
        const dir = move[0];
        const len = move.slice(1);
        for (let i = 1; i <= len; i++) {
            const [x, y] = output[output.length - 1].split("_").map(a => parseInt(a));
            switch (dir) {
                case 'U':
                    output.push(`${x}_${y + 1}`);
                    break;
                case 'D':
                    output.push(`${x}_${y - 1}`);
                    break;
                case 'L':
                    output.push(`${x - 1}_${y}`);
                    break;
                case 'R':
                    output.push(`${x + 1}_${y}`);
                    break;
            }
        }
    })
}

function determineIntersects(output) {
    const intersections = [];
    const [line1, line2] = output;
    line2.forEach((point, index1) => {
        let index2 = line1.indexOf(point);
        if (index2 > -1) {
            intersections.push({ point, index1, index2 });
        }
    });
    return intersections;
}

function findClosestIntersection(intersections) {
    const distances = intersections.map((point) => {
        const [x, y] = point.point.split("_").map(a => Math.abs(parseInt(a)));
        return x + y;
    }).filter(a => a != 0);
    return Math.min(...distances)
}

function determineFewestSteps(intersections) {
    intersections = intersections.filter(point => point.point !== '0_0');
    const steps = intersections.map(point => point.index1 + point.index2);
    return Math.min(...steps)
}

const output = [['0_0'], ['0_0']]
buildLine(lines[0], output[0])
buildLine(lines[1], output[1])
const intersections = determineIntersects(output)

const closest = findClosestIntersection(intersections)
console.log("part 1- ", closest)

const fewestSteps = determineFewestSteps(intersections)
console.log("part 2- ", fewestSteps)



