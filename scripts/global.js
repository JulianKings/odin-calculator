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

registerHandlers(clearButton);
registerHandlers(backButton);
registerHandlers(equalButton);

function registerHandlers(button)
{
    // add on click handler for each button
    button.addEventListener('click', (event) => {
        buttonOnClick(event, button);
    });

    // add mouse handler for each button
    button.addEventListener('mouseup', (event) => {
        buttonOnRelease(event, button);
    });

    button.addEventListener('mousedown', (event) => {
        buttonOnMouseDown(event, button);
    });

    button.addEventListener('mouseleave', (event) => {
        buttonOnLeave(event, button);
    });

    button.addEventListener('mouseover', (event) => {
        buttonOnMouseOver(event, button);
    });
}

// MAIN CLICK HANDLER

function buttonOnClick(event, button)
{
    let oldOperationString = operationString;
    let firstNegative = false;
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
            operationString = operationString.concat(".");
            if(firstNegative)
            {
                operationString = "-" + operationString;
                firstNegative = false;
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
            } else if((lastOperationFinished))
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
            } else if((lastOperationFinished))
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

            if(lastResult !== 0)
            {
                lastResult = -lastResult;
                displayResultBox.textContent = lastResult;
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
            }
        }
        displayOperationBox.textContent = operationString;
    }
}

// SECONDARY STYLE HANDLERS
function buttonOnMouseDown(event, button)
{
    if(button.classList.contains("button"))
    {
        button.style["background-color"] = "#818181";
    } else if(button.classList.contains("red-button"))
    {
        button.style["background-color"] = "#4e0404";
    } else if(button.classList.contains("big-button"))
    {
        button.style["background-color"] = "#118634";
    }
}

function buttonOnRelease(event, button)
{
    if(button.style["background-color"] === "rgb(129, 129, 129)")
    {
        button.style["background-color"] = "#a7a7a7";
    } else if(button.style["background-color"] === "rgb(78, 4, 4)")
    {
        button.style["background-color"] = "#7c1919";
    } else if(button.style["background-color"] === "rgb(17, 134, 52)")
    {
        button.style["background-color"] = "#30a854";
    }
}

function buttonOnLeave(event, button)
{
    if(button.style["background-color"] === "rgb(129, 129, 129)")
    {
        button.style["background-color"] = "#5a5a5a";
    } else if(button.style["background-color"] === "rgb(167, 167, 167)")
    {
        button.style["background-color"] = "#5a5a5a";
    } else if(button.style["background-color"] === "rgb(78, 4, 4)")
    {
        button.style["background-color"] = "#a34444";
    } else if(button.style["background-color"] === "rgb(124, 25, 25)")
    {
        button.style["background-color"] = "#a34444";
    } else if(button.style["background-color"] === "rgb(17, 134, 52)")
    {
        button.style["background-color"] = "#5a5a5a";
    } else if(button.style["background-color"] === "rgb(48, 168, 84)")
    {
        button.style["background-color"] = "#5a5a5a";
    }
}

function buttonOnMouseOver(event, button)
{
    if(button.style["background-color"] === "rgb(129, 129, 129)")
    {
        if(button.classList.contains("button"))
        {
            button.style["background-color"] = "#a7a7a7";
        } else {
            button.style["background-color"] = "#30a854";
        }
    } else if(button.style["background-color"] === "rgb(167, 167, 167)")
    {
        if(button.classList.contains("button"))
        {
            button.style["background-color"] = "#a7a7a7";
        } else {
            button.style["background-color"] = "#30a854";
        }
    } else if(button.style["background-color"] === "rgb(90, 90, 90)")
    {
        if(button.classList.contains("button"))
        {
            button.style["background-color"] = "#a7a7a7";
        } else {
            button.style["background-color"] = "#30a854";
        }
    } else if(button.style["background-color"] === "rgb(78, 4, 4)")
    {
        button.style["background-color"] = "#7c1919";
    } else if(button.style["background-color"] === "rgb(124, 25, 25)")
    {
        button.style["background-color"] = "#7c1919";
    } else if(button.style["background-color"] === "rgb(163, 68, 68)")
    {
        button.style["background-color"] = "#7c1919";
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