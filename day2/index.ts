import * as fs from 'fs';
const input = fs.readFileSync('./day2/input.txt','utf8').split('\n');

let totalPointsPartOne = 0;
const [winningPoints, losingPoints, drawPoints] = [6, 0, 3];

function countPoints(singleMatch: string): number {
    const [opponent, player] = singleMatch.split(" ");
    let pointsForThisMatch = 0;
    switch(player){
        case "X":
            pointsForThisMatch += 1;
            return pointsForThisMatch += (opponent == "A" ? drawPoints : (opponent == "B" ? losingPoints : winningPoints));
        case "Y":
            pointsForThisMatch += 2;
            return pointsForThisMatch += (opponent == "B" ? drawPoints : (opponent == "C" ? losingPoints : winningPoints));
        case "Z":
            pointsForThisMatch += 3;
            return pointsForThisMatch += (opponent == "C" ? drawPoints : (opponent == "A" ? losingPoints : winningPoints));
    }
}

function partOne() {
    input.forEach(match => {
        totalPointsPartOne += countPoints(match);
    });
}


const [rockPoints, paperPoints, scissorsPoints] = [1, 2, 3];

function countPointsPartTwo(singleMatch: string): number {
    const [opponent, player] = singleMatch.split(" ");
    let pointsForThisMatch = 0;
    switch(player){
        case "X":
            pointsForThisMatch += 0;
            return pointsForThisMatch += (opponent == "A" ? scissorsPoints : (opponent == "B" ? rockPoints : paperPoints));
        case "Y":
            pointsForThisMatch += 3;
            return pointsForThisMatch += (opponent == "A" ? rockPoints : (opponent == "B" ? paperPoints : scissorsPoints));
        case "Z":
            pointsForThisMatch += 6;
            return pointsForThisMatch += (opponent == "A" ? paperPoints : (opponent == "B" ? scissorsPoints : rockPoints));
    }
}

let totalPointsPartTwo = 0;

function partTwo() {
    input.forEach(match => {
        totalPointsPartTwo += countPointsPartTwo(match);
    });
}

partTwo();
