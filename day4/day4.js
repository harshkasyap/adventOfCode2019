const INPUT = [172851, 675869];
const min = INPUT[0];
const max = INPUT[1];

function areTwoDigitsSame(num) {
    return num.some((digit, index) => {
        if (index == num.length - 1) {
            return;
        }
        return num[index] === num[index + 1];
    })
}

function areIncreasing(num) {
    return num.every((digit, index) => {
        if (index == num.length - 1) {
            return true;
        }
        return parseInt(num[index]) <= parseInt(num[index + 1]);
    })
}

function areOnlyTwoMatching(num) {
    num = String(num).split("");
    return num.some((digit, index) => {
        if (index === 0) {
            if ((num[index] === num[index + 1]) &&
                (num[index + 1] !== num[index + 2])) {
                return true;
            }
            return false
        }
        if ((num[index] === num[index + 1]) &&
            (num[index] !== num[index - 1]) &&
            (num[index + 1] !== num[index + 2])) {
            return true;
        }
    });
}

let passwords = [];
for (let i = min; i <= max; i++) {
    const num = String(i).split("");
    if (!areTwoDigitsSame(num)) {
        continue;
    }
    if (!areIncreasing(num)) {
        continue;
    }
    passwords.push(i);
}

console.log('part 1- ', passwords.length);

passwords = passwords.filter(areOnlyTwoMatching);
console.log('part 2- ', passwords.length);
