console.log("Welcome to Gambling Simulation");

const betEveryGame = 1;
let stakeEveryDay = 100;
let day =1;
var totalAmount = 0;
let totalDays = 20;

const LOOSER = 0;

let limitPercentage = 50;
let winingAmountToResign = ((stakeEveryDay * limitPercentage / 100 + stakeEveryDay));
let loosingAmoutToResign = ((stakeEveryDay - stakeEveryDay * limitPercentage / 100));
let limitValue = ((limitPercentage*stakeEveryDay/100));
console.log("Maximum amount a player can win :" + winingAmountToResign);
console.log("Minimum amount a player can be left with :" + loosingAmoutToResign);

function stakeCalculator(){
while (stakeEveryDay < winingAmountToResign && stakeEveryDay > loosingAmoutToResign) {
    let decider = Math.floor(Math.random() * 2);
    if (decider == LOOSER) {
        stakeEveryDay = ((stakeEveryDay + betEveryGame));
    }
    else {
        stakeEveryDay = ((stakeEveryDay - betEveryGame));
    }
}
}

for (let day = 0; day < totalDays; day++) {
    stakeCalculator();
    if (stakeEveryDay == winingAmountToResign) {
        totalAmount = (totalAmount+limitValue);
    }
    else{
        totalAmount = (totalAmount - limitValue);
    }
}
console.log("Total amount won or loss == " + totalAmount);
