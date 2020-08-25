console.log("Welcome to Gambling Simulation");

const betEveryGame = 1;
let stakeEveryDay = 100;

const LOOSER = 0;

let limitPercentage = 50;
let winingAmountToResign = ((stakeEveryDay * limitPercentage / 100 + stakeEveryDay));
let loosingAmoutToResign = ((stakeEveryDay - stakeEveryDay * limitPercentage / 100));

console.log("Maximum amount a player can win :" + winingAmountToResign);
console.log("Minimum amount a player can be left with :" + loosingAmoutToResign);

while (stakeEveryDay < winingAmountToResign && stakeEveryDay > loosingAmoutToResign) {
    let decider = Math.floor(Math.random() * 2);
    if (decider == LOOSER) {
        stakeEveryDay = ((stakeEveryDay + betEveryGame));
    }
    else {
        stakeEveryDay = ((stakeEveryDay - betEveryGame));
    }
}
console.log("Final amout today with player :: " + stakeEveryDay + "Rs");
