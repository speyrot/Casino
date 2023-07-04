//Step 1. Deposit money
//Step 2. Determine number of lines to bet on
//Step 3. Collect bet amount
//Step 4. Spin slot machine
//Step 5. Check if user won
//Step 6. Give user payout
// Step 7. Play Again

//GLOBAL VARIABLES

const prompt = require("prompt-sync") ();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
};

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
};

//Beg of Step 1

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

//End of Step 2

//Beg of Step 3

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter bet per line: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        } else {
            return numberBet;
        }    
    }
};

//End of Step 3

//Beg Step 4

//The Spin

const spin = () => {
    const symbols = [];
    
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        
        const reelSymbols = [...symbols];

        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];

            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

//transpose arrays (reels) 

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);

        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
};

//print rows

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";

        for (const [i, symbol] of row.entries()) {
            rowString += symbol
            if (i != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString)
    }    
};

//End of Step 4

//Beg of Step 5 

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]]
        }
    }

    return winnings;
};

//End of Step 5

//Beg of Step 6 & 7
const game = () => {
    let balance = deposit();

    while (true) {
        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log("You won, $" + winnings);

        if (balance <= 0) {
            console.log("You ran out of money!");
            break;
        }

        const playAgain = prompt("Do you want to play again? (y/n) ");

        if (playAgain != "y") break;
    }
};

//End of Step 6 & 7

game();

