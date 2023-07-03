//Step 1. Deposit money
//Step 2. Determine number of lines to bet on
//Step 3. Collect bet amount
//Step 4. Spin slot machine
//Step 5. Check if user won
//Step 6. Give user payout
// Step 7. Play Again

//Beg of Step 1

const prompt = require("prompt-sync") ();

const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }    
    }
};

const depositAmount = deposit();
console.log(depositAmount);

//End of Step 1

//Beg of Step 2

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }    
    }
};

const lines = getNumberOfLines();
console.log(lines);

//End of Step 2