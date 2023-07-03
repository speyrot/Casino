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