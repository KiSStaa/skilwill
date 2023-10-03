// davaleba 1


function calculate(a,b){
    if(a === b){
        return ("tolia")
    }
    else{
        return ("ar aris toli")
    }
}
console.log(calculate("4",4))
console.log(calculate(4,4))



// davaleba 2

function celsiusToFahrenheit(celsius){
    if(typeof celsius === "string"){
        return false
    }
    const fahrenheit = celsius * 9/5 + 32;
        return fahrenheit;
    
}
console.log(celsiusToFahrenheit(22))
console.log(celsiusToFahrenheit("giga"))


// davaleba 3

function calculate1(a,b,oper){
    if(typeof a === "string" || typeof b === "string"){
        return false
    }
    if(typeof oper === "Number"){
        return false
    }
function Add() {
    if(oper === '+') {
        const count = a + b;
        console.log(count)
        return count
    }
}

function Sub() {
    if(oper === '-') {
        const count = a - b;
        console.log(count)
        return count
    }
}

function Mult() {
    if(oper === "*") {
        const count = a * b;
        console.log(count)
        return count
    }
}
function Div() {
    if(oper === "/") {
        const count = a / b;
        console.log(count)
        return count
    }
}
Add()
Sub()
Mult()
Div()
}

calculate1(5,4,'+')
calculate1(5,4,'-')
calculate1(5,4,'*')
calculate1(5,4,'/')


