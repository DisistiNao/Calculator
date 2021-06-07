//-----------------------------------
//Variavel
let calcEl = document.querySelector(".buttons")
let labelEl = document.querySelector(".label")
let amount = 0;
let logicOperator;

//-----------------------------------
//Functions
function init() {
    labelEl.innerHTML = '0'
    calcEl.addEventListener("click", function(e) {buttonClick(e.target.innerText)})
}

function buttonClick(value) {
    if(parseInt(value) || parseInt(value) == 0)
        numbers(value)
    else
      operators(value)
}

function numbers(value) {
    if(parseInt(labelEl.innerHTML) == 0)
        labelEl.innerHTML = value
    else
        labelEl.innerHTML += value
}

function operators(value) {
    switch(value) {
        case '+':
        case '-':
        case 'x':
        case '/':
            operations(value)
            break
        case '=':
            operationsMath()
            labelEl.innerHTML = amount
            amount = 0
            break
        case 'C':
            labelEl.innerHTML = amount = 0
            break
        case '←':
            var newLabel = ""
            if(labelEl.innerHTML.length - 1 == 0)
                newLabel = "0"
            else
                for(var i = 0; i < labelEl.innerHTML.length - 1; i++)
                    newLabel += labelEl.innerHTML[i]
            labelEl.innerHTML = newLabel
            break
    }
}

function operations(value) {
    if(amount == 0)
        amount = parseInt(labelEl.innerHTML)
    else
        operationsMath()
    
    logicOperator = value
    labelEl.innerHTML = 0
}

function operationsMath() {
    switch(logicOperator) {
        case '+':
            amount += parseInt(labelEl.innerHTML)
            break;
        case '-':
            amount -= parseInt(labelEl.innerHTML)
            break;
        case 'x':
            amount *= parseInt(labelEl.innerHTML)
            break;
        case '/':
            amount /= parseInt(labelEl.innerHTML)
            break; 
    }
}

//-----------------------------------
//Init
init();