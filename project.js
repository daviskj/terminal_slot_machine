//deposit money
//determine #of lines to bet
//collect bet amount
//spin
//check if won
//give user winnings/take loss
//play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) { 
    const depositAmount = prompt("enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("invalid deposit amount, try again.");
    } else {
        return numberDepositAmount;
    }
}
};

const getNumberOfLines = () => {
    while (true) { 
        const lines = prompt("enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }
    }
}


const depositAmount = deposit();
const numberOfLines = getNumberOfLines();