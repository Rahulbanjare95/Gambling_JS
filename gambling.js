const EVERYDAY_STAKE = 100;
const BET_EVERY_GAME = 1;
const TOTAL_DAYS = 20;
const MAX_LOOSING_AMOUNT = EVERYDAY_STAKE - (EVERYDAY_STAKE * 50 / 100);
const MAX_WIN_AMOUNT = EVERYDAY_STAKE + (EVERYDAY_STAKE * 50 / 100);
var cash;
var absoluteAmount;

var BetsEveryDay = {};

class GamblingSimulator {
    
    dailyBet() {
        absoluteAmount = 0;
        cash = EVERYDAY_STAKE;
        while (cash > MAX_LOOSING_AMOUNT && cash < MAX_WIN_AMOUNT) {
            var RandomValue = Math.round(Math.random() * 2);
            if (RandomValue == 1) {
                cash += BET_EVERY_GAME;
            }
            else {
                cash -= BET_EVERY_GAME;
            }
        }
        absoluteAmount = cash - EVERYDAY_STAKE;
        return absoluteAmount;
    }

    /**
     * Function To store cash in dictionary
     */
    monthlyGambling() {
        var day = 0;
        BetsEveryDay["Day " + day] = 0;
        for (day = 1; day <= TOTAL_DAYS; day++) {
            var cash = this.dailyBet();
            //storing Each Day amount in Dictionary
            BetsEveryDay["Day " + day] = BetsEveryDay["Day " + (day - 1)] + cash;
        }
        this.sort();
    }

    /**
     * Sort dictionary
     */
    sort() {
        // Create amount array
        var amount = Object.keys(BetsEveryDay).map(function (key) {
            return [key, BetsEveryDay[key]];
        });

        // Sort the array based on the second element
        amount.sort(function (first, second) {
            return second[1] - first[1];
        });

        //display Luckiest Day
        console.log("LUCKY DAY - ");
        console.log(amount.slice(0, 1));
        console.log("UNLUCKY DAY - ");
        console.log(amount.slice(amount.length - 2, amount.length - 1));
    }

    /**
     * function To Start Game, if Player win continue play for next month
     */
    simulateGame() {
        this.monthlyGambling()
        var playNextMonth = "";

        while (BetsEveryDay['Day 20'] > 0) {
            console.log("You  are in profit");
            console.log("Last Day Balance : " + BetsEveryDay['Day 20']);
            const prompt = require('prompt-sync')();
            playNextMonth = prompt('Do you want to For Next Month ? Type yes to play :: ');

            if (playNextMonth == "yes") {
                this.monthlyGambling()
            }
            else {
                return;
            }
        }
        console.log("You are in loss can't play for next month");
    }
}
module.exports = GamblingSimulator;