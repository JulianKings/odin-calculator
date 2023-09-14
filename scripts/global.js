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
    switch(button.id)
    {
        case "oneButton":
            operationString = operationString.concat("1");
            break;
        case "twoButton":
            operationString = operationString.concat("2");
            break;
        case "threeButton":
            operationString = operationString.concat("3");
        break;
        case "fourButton":
            operationString = operationString.concat("4");
            break;
        case "fiveButton":
            operationString = operationString.concat("5");
            break;
        case "sixButton":
            operationString = operationString.concat("6");
        break;
        case "sevenButton":
            operationString = operationString.concat("7");
            break;
        case "eightButton":
            operationString = operationString.concat("8");
            break;
        case "nineButton":
            operationString = operationString.concat("9");
        break;
        case "zeroButton":
            operationString = operationString.concat("0");
        break;
        case "decimalButton":
            operationString = operationString.concat(".");
        break;
        case "moduleButton":
            if(operationString !== "" && isNaN(operationString))
            {
                executeOperation();
            }
            operationString = operationString.concat("%");
            break;
        case "powerButton":
            if(operationString !== "" && isNaN(operationString))
            {
                executeOperation();
            }
            operationString = operationString.concat("^");
            break;
        case "squareButton":
            if(operationString !== "" && isNaN(operationString))
            {
                executeOperation();
            }
            operationString = operationString.concat("²");
            break;
        case "squareButton":
            if(operationString !== "" && isNaN(operationString))
            {
                executeOperation();
            }
            operationString = operationString.concat("√");
            break;
        case "divideButton":
            if(operationString !== "" && isNaN(operationString))
            {
                executeOperation();
            }
            operationString = operationString.concat("/");
            break;
        case "multiplyButton":
            if(operationString !== "" && isNaN(operationString))
            {
                executeOperation();
            }
            operationString = operationString.concat("x");
            break;
        case "plusButton":
            if(operationString !== "" && isNaN(operationString))
            {
                executeOperation();
            }
            operationString = operationString.concat("+");
            break;
        case "minusButton":
            if(operationString !== "" && isNaN(operationString))
            {
                executeOperation();
            }
            operationString = operationString.concat("-");
            break;
        case "backButton":
            if(operationString.length > 0)
            {
                operationString = operationString.slice(0, operationString.length - 1);
            } else if(operationString.length === 1)
            {
                operationString = "";
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
            executeOperation();
            break;
    }

    if(oldOperationString !== operationString)
    {
        if(isNaN(operationString.charAt(0)))
        {
            operationString = ((lastOperationFinished) ? lastResult : 0) + operationString;
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
function executeOperation()
{
    if(operationString === undefined || operationString === "")
    {
        displayResultBox.textContent = "0";
        lastResult = 0;
        lastOperationFinished = true;
    } else {
        if(isNaN(operationString))
        {
            if(operationString.includes("+"))
            {
                if(operationString.endsWith("+"))
                {
                    let result = cleanUpNumber(operationString.slice(0, operationString.length - 1));
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                } else {
                    let split = operationString.split("+");
                    let result = cleanUpNumber(split[0]) + cleanUpNumber(split[1]);
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
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                } else {
                    let split = operationString.split("-");
                    let result = cleanUpNumber(split[0]) - cleanUpNumber(split[1]);
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
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                } else {
                    let split = operationString.split("x");
                    let result = cleanUpNumber(split[0]) * cleanUpNumber(split[1]);
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
                    displayResultBox.textContent = result;
                    lastResult = result;
                    lastOperationFinished = true;
                    operationString = "";
                } else {
                    let split = operationString.split("/");
                    let result = cleanUpNumber(split[0]) / cleanUpNumber(split[1]);
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