const buttons = document.querySelectorAll(".button");
const clearButton = document.querySelector("#clearButton");
const backButton = document.querySelector("#backButton");
const equalButton = document.querySelector("#equalButton");

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


function buttonOnClick(event, button)
{
    console.log("CLICK => " + button.id);
}

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