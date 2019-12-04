const fs = require('fs');

const content = fs.readFileSync('day2//input.txt', 'utf8');
let input = content.split(",").map(a => parseInt(a));

function calc(prog, noun, verb) {
    prog[1] = noun;
    prog[2] = verb;
    for (let i = 0; i <= prog.length; i += 4) {
        const op1 = prog[i + 1];
        const op2 = prog[i + 2];
        const res = prog[i + 3];

        if (prog[i] === 1) {
            prog[res] = prog[op1] + prog[op2];
        }
        else if (prog[i] === 2) {
            prog[res] = prog[op1] * prog[op2];
        }
        else if (prog[i] === 99) {
            break;
        }
    }
    return prog;
}

const result = calc(input, 12, 2)
console.log("part 1 - ", result[0]);

let found = false;
let i, j;
for (i = 0; i <= 99; i++) {
    for (j = 0; j <= 99; j++) {
        input = content.split(",").map(a => parseInt(a));
        if (calc(input, i, j)[0] == 19690720) {
            found = true;
            break;
        }
    }
    if (found) {
        break;
    }
}

console.log("part 2 - ", 100 * i + j)
