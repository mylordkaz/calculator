function add(a, b){
    return a + b
}

function sub(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a / b
}


let ope = ''

function operate(ope, a, b){
    a = Number(a)
    b = Number(b)
    switch(ope){
        case '+':
            return add(a,b)
        case '-':
            return sub(a,b)
        case 'x':
            return multiply(a,b)
        case '/':
            if(b === 0){
                return null
            }else{
                return divide(a,b)
            }
        default:
            return null
    }
}

