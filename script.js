function add(a, b){ 
    return a + b
}
function substract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a / b
}

function operate(operator, a, b){
    a = Number(a)
    b = Number(b)
    switch(operator){
        case '+':
            return add(a,b)
        case '-':
            return substract(a,b)
        case 'x':
            return multiply(a,b)
        case '÷':
            if(b === 0){
                return null
            }else{
                return divide(a,b)
            }
        default:
            return null
    }
}

let first = ''
let second = ''
let currentOperation = null
let resetS = false

const screen = document.getElementById('screen')
const nButtons = document.querySelectorAll('[data-number]')
const oButtons = document.querySelectorAll('[data-operator]')
const equal = document.getElementById('equals')
const clearBtn = document.getElementById('clearBtn')
const backBtn = document.getElementById('backBtn')
const point = document.getElementById('pointBtn')


nButtons.forEach((button)=>
button.addEventListener('click', () => displayNumber(button.textContent))
)
oButtons.forEach((button)=>
button.addEventListener('click', ()=> operation(button.textContent))
)
equal.addEventListener('click', evaluate)
clearBtn.addEventListener('click', clear)
backBtn.addEventListener('click', deleteNumber)
point.addEventListener('click', addPoint)


function displayNumber(number){
    if (screen.textContent === '0'|| resetS){
    resetScreen()
    }
    screen.textContent += number
}

function resetScreen(){
    screen.textContent = ''
    resetS = false
}
function clear (){
    screen.textContent = '0'
    first = ''
    second = ''
    currentOperation = null
}
function addPoint(){
    if (resetS) resetScreen()

    if(screen.textContent === '')
    screen.textContent = '0'

    if (screen.textContent.includes('.')) return
    screen.textContent += '.'
}
function deleteNumber(){
    screen.textContent = screen.textContent.toString().slice(0,-1)
}

function roundResult(number){
    return Math.round(number * 1000) / 1000
}

function evaluate(){
    if (currentOperation === null || resetS) return
    if (currentOperation === '+' && screen.textContent === '0'){
        alert("can't divide by 0")
        return
    }
    second = screen.textContent
    screen.textContent = roundResult(
        operate(currentOperation, first, second)
    )
    currentOperation = null
}

function operation(operator){
    if(currentOperation !== null) evaluate()

    first = screen.textContent
    currentOperation = operator
    screen.textContent = `${first} ${currentOperation} ${second}`
    resetS = true
}