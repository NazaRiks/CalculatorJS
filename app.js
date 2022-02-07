const buttonAc = document.getElementById('btn-ac');
const buttonEqual = document.getElementById('equal');
const buttonPlusMin = document.getElementById('btn-plus-min');
const buttonPercent = document.getElementById('btn-percent');
const calcResult = document.getElementById('calc-result');




const objOperation = {
    '/' : (num1, num2) => num1 / num2,
    'x' : (num1, num2) => num1 * num2,
    '-' : (num1, num2) => num1 - num2,
    '+' : (num1, num2) => +num1 + +num2,
}

const currentState = {
    num1: null,
    operation: null,
    isActionPressed: false,
    zeroCleaning: false,
    comaState: false,

}

buttonPercent.addEventListener('click', function(){
    calcResult.innerText = calcResult.innerText / 100;
})

buttonPlusMin.addEventListener('click', function(){
    calcResult.innerText = calcResult.innerText * -1;
})

buttonAc.addEventListener('click', function(){
        calcResult.innerText = '0'
        currentState.zeroCleaning = false
        buttonAc.innerText = 'AC'
})

buttonEqual.addEventListener('click', function(){
    let numberTwo = calcResult.innerText;
    calcResult.innerText = currentState.operation(currentState.num1, numberTwo);
    
})

const buttonNumber = document.getElementsByClassName('btn-number')
for(const elem of buttonNumber){
        elem.addEventListener('click', function(){
            if(currentState.isActionPressed == true){
                calcResult.innerText = ' ';
                currentState.isActionPressed = false
            }
            if(currentState.zeroCleaning == false){
                calcResult.innerText = ' ';
                currentState.zeroCleaning = true
            }
            if(calcResult.innerText.length > 6){
                return
            }
            calcResult.innerText += elem.innerText;

            if(calcResult.innerText != 0){
                buttonAc.innerText = 'C'
            }
        })
}


const buttonOperation = document.getElementsByClassName('btn-operation')
for(const elem of buttonOperation){
    elem.addEventListener('click', function(){
        currentState.num1 = calcResult.innerText;
        currentState.operation = objOperation[elem.innerText];
        currentState.isActionPressed = true
        console.log(currentState)
    })
}

