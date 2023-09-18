const buttons = document.querySelectorAll(".button");
const clearButton = document.querySelector("#clearButton");
const backButton = document.querySelector("#backButton");
const equalButton = document.querySelector("#equalButton");
const displayOperationBox = document.querySelector(".displayOperation");
const displayResultBox = document.querySelector(".displayResult");

let operationString = "";
let lastResult = 0;
let lastOperationFinished = false;

buttons.forEach((button) => {
    // register all Handlers
    registerHandlers(button);
});

// register keypress handler
window.addEventListener("keydown", (event) => {
    keyboardPress(event);
})

registerHandlers(clearButton);
registerHandlers(backButton);
registerHandlers(equalButton);

function registerHandlers(button)
{
    // add on click handler for each button
    button.addEventListener('click', (event) => {
        buttonOnClick(event, button);
    });
}

// MAIN CLICK HANDLER

function buttonOnClick(event, button)
{
    let oldOperationString = operationString;
    let firstNegative = false;
    let concatMinus = false;
    if(operationString.startsWith("-"))
    {
        firstNegative = true;
        operationString = operationString.slice(1, operationString.length);
    }
    switch(button.id)
    {
        case "oneButton":
            operationString = operationString.concat("1");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "twoButton":
            operationString = operationString.concat("2");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "threeButton":
            operationString = operationString.concat("3");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
        break;
        case "fourButton":
            operationString = operationString.concat("4");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "fiveButton":
            operationString = operationString.concat("5");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "sixButton":
            operationString = operationString.concat("6");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
        break;
        case "sevenButton":
            operationString = operationString.concat("7");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "eightButton":
            operationString = operationString.concat("8");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "nineButton":
            operationString = operationString.concat("9");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
        break;
        case "zeroButton":
            operationString = operationString.concat("0");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
        break;
        case "decimalButton":
            if(!operationString.includes("."))
            {
                operationString = operationString.concat(".");
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
            } else {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
            }
        break;
        case "moduleButton":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }
            operationString = operationString.concat("%");
            break;
        case "powerButton":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }
            operationString = operationString.concat("^");
            break;
        case "squareButton":
            if(isNaN(operationString.charAt(0)))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                operationString = ((lastOperationFinished) ? lastResult : 0) + operationString;
            } else if(operationString === "" && (lastOperationFinished) && lastResult !== 0 && lastResult != NaN)
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                operationString = lastResult + operationString;
            }
            operationString = operationString.concat("²");
            displayOperationBox.textContent = operationString;
            executeSquare();
            return;
        case "sqrtButton":
            if(isNaN(operationString.charAt(0)))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                operationString = ((lastOperationFinished) ? lastResult : 0) + operationString;
            } else if(operationString === "" && (lastOperationFinished) && lastResult !== 0 && lastResult != NaN)
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                }
                operationString = lastResult + operationString;
            }
            operationString = "√" + operationString;
            displayOperationBox.textContent = operationString;
            executeSquareRoot();
            return;
        case "divideButton":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }
            operationString = operationString.concat("/");
            break;
        case "multiplyButton":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }
            operationString = operationString.concat("x");
            break;
        case "plusButton":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }
            operationString = operationString.concat("+");
            break;
        case "minusButton":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }
            concatMinus = true;
            operationString = operationString.concat("-");
            break;
        case "backButton":
            if(operationString.length > 0)
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                operationString = operationString.slice(0, operationString.length - 1);
            } else if(operationString.length === 1)
            {
                operationString = "";
            }
            break;
        case "plusMinusButton":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }

            if(lastResult !== 0 && operationString === "")
            {
                lastResult = -lastResult;
                displayResultBox.textContent = lastResult;
            } else if (operationString !== "")
            {   
                if(firstNegative)
                {
                    firstNegative = false;
                } else { 
                    operationString = "-" + operationString;
                    displayOperationBox.operationString = operationString;
                }
            }
            break;
        case "clearButton":
            operationString = "";
            oldOperationString = "";
            displayOperationBox.textContent = "";
            displayResultBox.textContent = "";
            lastResult = 0;
            lastOperationFinished = true;
            break;
        case "equalButton":
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            executeOperation();
            break;
    }

    if(oldOperationString !== operationString)
    {
        if(isNaN(operationString.charAt(0)))
        {
            if(!operationString.startsWith("-"))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                operationString = ((lastOperationFinished) ? lastResult : 0) + operationString;
            } else if(concatMinus) {
                concatMinus = false;
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                operationString = ((lastOperationFinished) ? lastResult : 0) + operationString;
            
            }
        }
        displayOperationBox.textContent = operationString;
    }
}

// KEYBOARD HANDLER

function keyboardPress(event)
{
    let oldOperationString = operationString;
    let firstNegative = false;
    let concatMinus = false;
    if(operationString.startsWith("-"))
    {
        firstNegative = true;
        operationString = operationString.slice(1, operationString.length);
    }

    switch(event.code)
    {
        case "Digit1":
        case "Numpad1":
            operationString = operationString.concat("1");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "Digit2":
        case "Numpad2":
            operationString = operationString.concat("2");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "Digit3":
        case "Numpad3":
            operationString = operationString.concat("3");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
        break;
        case "Digit4":
        case "Numpad4":
            operationString = operationString.concat("4");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "Digit5":
        case "Numpad5":
            operationString = operationString.concat("5");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "Digit6":
        case "Numpad6":
            operationString = operationString.concat("6");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
        break;        
        case "Digit7":
        case "Numpad7":
            operationString = operationString.concat("7");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "Digit8":
        case "Numpad8":
            operationString = operationString.concat("8");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;        
        case "Digit9":
        case "Numpad9":
            operationString = operationString.concat("9");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            break;
        case "Digit0":
        case "Numpad0":
            operationString = operationString.concat("0");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
        break;
        case "Period":
            if(!operationString.includes("."))
            {
                operationString = operationString.concat(".");
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
            } else {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
            }
        break;
        case "NumpadDivide":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }
            operationString = operationString.concat("/");
            break;
        case "NumpadMultiply":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }
            operationString = operationString.concat("x");
            break;
        case "BracketRight":
        case "NumpadAdd":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }
            operationString = operationString.concat("+");
            break;
        case "Slash":
        case "NumpadSubtract":
            if(operationString !== "" && isNaN(operationString))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                executeOperation();
            }
            concatMinus = true;
            operationString = operationString.concat("-");
            break;
        case "Backspace":
            if(operationString.length > 0)
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                operationString = operationString.slice(0, operationString.length - 1);
            } else if(operationString.length === 1)
            {
                operationString = "";
            }
            break;
        case "Delete":
            operationString = "";
            oldOperationString = "";
            displayOperationBox.textContent = "";
            displayResultBox.textContent = "";
            lastResult = 0;
            lastOperationFinished = true;
            break;
        case "Enter":
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
            }
            executeOperation();
            break;
    }

    if(oldOperationString !== operationString)
    {
        if(isNaN(operationString.charAt(0)))
        {
            if(!operationString.startsWith("-"))
            {
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                operationString = ((lastOperationFinished) ? lastResult : 0) + operationString;
            } else if(concatMinus) {
                concatMinus = false;
                if(firstNegative)
                {
                    operationString = "-" + operationString;
                    firstNegative = false;
                }
                operationString = ((lastOperationFinished) ? lastResult : 0) + operationString;
            
            }
        }
        displayOperationBox.textContent = operationString;
    }
}

// Operations Logic
function executeSquare()
{
    if(operationString === undefined || operationString === "" || operationString === "²")
    {
        if(lastResult > 0)
        {
            let result = Math.pow(lastResult, 2);
            displayResultBox.textContent = result;
            lastResult = result;
            lastOperationFinished = true;
            operationString = "";
        } else {
            displayResultBox.textContent = "0";
            lastResult = 0;
            lastOperationFinished = true;
        }
    } else {
        let firstNegative = false;
        if(operationString.startsWith("-"))
        {
            firstNegative = true;
            operationString = operationString.slice(1, operationString.length);
        }
        let result = Math.pow((firstNegative) ? -cleanUpNumber(operationString.slice(0, operationString.length - 1)) : cleanUpNumber(operationString.slice(0, operationString.length - 1)), 2);
        displayResultBox.textContent = result;
        lastResult = result;
        lastOperationFinished = true;
        operationString = "";
    }
}

function executeSquareRoot()
{
    if(operationString === undefined || operationString === "" || operationString === "√")
    {
        if(lastResult > 0)
        {
            let result = Math.pow(lastResult, 1/2);
            displayResultBox.textContent = result;
            lastResult = result;
            lastOperationFinished = true;
            operationString = "";
        } else {
            displayResultBox.textContent = "0";
            lastResult = 0;
            lastOperationFinished = true;
        }
    } else {
        // clean sqrt symbol
        operationString = (operationString.slice(1, operationString.length));
        // do math
        let firstNegative = false;
        if(operationString.startsWith("-"))
        {
            firstNegative = true;
            operationString = operationString.slice(1, operationString.length);
        }
        let result = Math.pow((firstNegative) ? -cleanUpNumber(operationString) : cleanUpNumber(operationString), 1/2);
        displayResultBox.textContent = result;
        lastResult = result;
        lastOperationFinished = true;
        operationString = "";
    }
}

function executeOperation()
{
    if(operationString === undefined || operationString === "")
    {
        if(lastResult !== 0)
        {
            displayResultBox.textContent = lastResult;
            lastOperationFinished = true;
        } else {
            displayResultBox.textContent = "0";
            lastResult = 0;
            lastOperationFinished = true;
        }
    } else {
        if(isNaN(operationString))
        {
            let firstNegative = false;
            if(operationString.startsWith("-"))
            {
                firstNegative = true;
                operationString = operationString.slice(1, operationString.length);
                console.log(operationString);
            }

            if(operationString.includes("+"))
            {
                if(operationString.endsWith("+"))
                {
                    let result = cleanUpNumber(operationString.slice(0, operationString.length - 1));
                    if(firstNegative)
                    {
                        result = -result;
                        firstNegative = false;
                    }
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                } else {
                    let split = operationString.split("+");
                    let result = ((firstNegative) ? -cleanUpNumber(split[0]) : cleanUpNumber(split[0])) + cleanUpNumber(split[1]);
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                }
            } else if(operationString.includes("-"))
            {
                if(operationString.endsWith("-"))
                {
                    let result = cleanUpNumber(operationString.slice(0, operationString.length - 1));
                    if(firstNegative)
                    {
                        result = -result;
                        firstNegative = false;
                    }
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                } else {
                    let split = operationString.split("-");
                    let result = ((firstNegative) ? -cleanUpNumber(split[0]) : cleanUpNumber(split[0])) - cleanUpNumber(split[1]);
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                }
            } else if(operationString.includes("x"))
            {
                if(operationString.endsWith("x"))
                {
                    let result = cleanUpNumber(operationString.slice(0, operationString.length - 1));
                    if(firstNegative)
                    {
                        result = -result;
                        firstNegative = false;
                    }
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                } else {
                    let split = operationString.split("x");
                    let result = ((firstNegative) ? -cleanUpNumber(split[0]) : cleanUpNumber(split[0])) * cleanUpNumber(split[1]);
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                }
            } else if(operationString.includes("/"))
            {
                if(operationString.endsWith("/"))
                {
                    let result = cleanUpNumber(operationString.slice(0, operationString.length - 1));
                    if(firstNegative)
                    {
                        result = -result;
                        firstNegative = false;
                    }
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                } else {
                    let split = operationString.split("/");
                    console.log(split[1]);
                    if(+split[1] === 0)
                    {
                        displayResultBox.textContent = "Come on...";
                        lastResult = Infinity;
                        lastOperationFinished = true;
                        operationString = "";
                    } else {
                        let result = ((firstNegative) ? -cleanUpNumber(split[0]) : cleanUpNumber(split[0])) / cleanUpNumber(split[1]);
                        displayResultBox.textContent = result;
                        lastResult = result;
                        lastOperationFinished = true;
                        operationString = "";
                    }
                }
            } else if(operationString.includes("^"))
            {
                if(operationString.endsWith("^"))
                {
                    let result = cleanUpNumber(operationString.slice(0, operationString.length - 1));
                    if(firstNegative)
                    {
                        result = -result;
                        firstNegative = false;
                    }
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                } else {
                    let split = operationString.split("^");
                    let result = Math.pow(((firstNegative) ? -cleanUpNumber(split[0]) : cleanUpNumber(split[0])), cleanUpNumber(split[1]));
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                }
            } else if(operationString.includes("%"))
            {
                if(operationString.endsWith("%"))
                {
                    let result = cleanUpNumber(operationString.slice(0, operationString.length - 1));
                    if(firstNegative)
                    {
                        result = -result;
                        firstNegative = false;
                    }
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                } else {
                    let split = operationString.split("%");
                    let result = ((firstNegative) ? -cleanUpNumber(split[0]) : cleanUpNumber(split[0])) % cleanUpNumber(split[1]);
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                }
            } else {
                displayResultBox.textContent = "Math error"; 
            }
        } else {
            if(operationString.includes("."))
            {
                lastResult = Number.parseFloat(operationString).toFixed(2);
                displayResultBox.textContent = lastResult;
                lastOperationFinished = true;
            } else {
                displayResultBox.textContent = operationString;
                lastResult = Number.parseInt(operationString);
                lastOperationFinished = true;
            }
            operationString = "";
        }
    }
}

function cleanUpNumber(numberString)
{
    if(numberString.includes("."))
    {
        return +Number.parseFloat(numberString).toFixed(2);
    } else {
        return +Number.parseInt(numberString);
    }

}