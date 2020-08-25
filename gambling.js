console.log("Welcome to Gambling Simulation");

const betEveryGame = 1;
const stakeEveryDay = 100;


const WINNER = 1;
const LOOSER = 0;

function winnerDecider() {

    let decider = Math.floor(Math.random() * 2);
    if (decider == 0) {
        console.log ("Lost");
    }
    else
        console.log("Won")    
}

winnerDecider();