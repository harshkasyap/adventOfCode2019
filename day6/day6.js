const fs = require('fs');
const content = fs.readFileSync('day6//input.txt', 'utf8');
let input = content.split("\r\n").map((a) => { return a.split(')') });
const tree = {};
const planets = new Set();
const orbits = {};

input.forEach((line) => {
    const earth = line[0];
    const moon = line[1];
    planets.add(earth);
    planets.add(moon);
    if (tree.hasOwnProperty(earth)) {
        tree[earth].push(moon)
    } else {
        tree[earth] = [moon];
    }
});

planets.forEach(planet => {
    orbits[planet] = 0;
});

const queue = [];
function addCount(root) {
    console.log('processing', root);
    if (!Object.keys(tree).includes(root)) {
        console.log(root, 'has no child');
        return;
    }
    const moons = tree[root];
    moons.forEach(moon => {
        if (!queue.includes(moon)) {
            queue.push(moon);
        }
        orbits[moon] = orbits[root] + 1;
    });
    addCount(queue.shift());
}

queue.push('COM');
orbits['COM'] = 0;
while (queue.length > 0) {
    addCount(queue.shift());
}
const total = Object.values(orbits).reduce((acc, val) => acc + val);
console.log('Part 1 -', total)

function findParentChain(child, chain) {
    planets.forEach((planet) => {
        if (tree[planet] && tree[planet].includes(child)) {
            chain.push(planet);
            return findParentChain(planet, chain);
        }
    });
    return chain;
}

const youChain = findParentChain('YOU', [])
const sanChain = findParentChain('SAN', [])

for (let index1 in youChain) {
    let index2 = sanChain.indexOf(youChain[index1])
    if (index2 > -1) {
        console.log('part2 - ', parseInt(index1) + parseInt(index2));
        break;
    }
}