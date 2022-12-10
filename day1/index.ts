import * as fs from 'fs';
const input = fs.readFileSync('./day1/input.txt','utf8').split('\n\n');

let elfWithMostCal = 0;
let calsOfElf = 0;

function partOne() {
    input.map((elfCalories, id) => {
        let calories = 0;
        elfCalories.split('\n').map(value => calories += parseInt(value));
        
        if (calories > calsOfElf) {
            calsOfElf = calories;
            elfWithMostCal = id;
        }
    })
}


let topThree = [0,0,0];
let totalTopThree = 0;

function partTwo() {
    input.map((elfCalories, id) => {
        let calories = 0;
        elfCalories.split('\n').map(value => calories += parseInt(value));
        
        if (calories > topThree[0]) {
            topThree[2] = topThree[1];
            topThree[1] = topThree[0];
            topThree[0] = calories;
        } else if (calories > topThree[1]) {
            topThree[2] = topThree[1];
            topThree[1] = calories;
        } else if (calories > topThree[2]) {
            topThree[2] = calories;
        }
    })
    topThree.map(calories => totalTopThree += calories);
}

partTwo();
