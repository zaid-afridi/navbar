//**************************add******************
let button1 = document.getElementById('button1')
let result = document.getElementById('answer')

let sum;

function answer() {
    const a = document.getElementById('inputA').value

    const inputB = document.getElementById('inputB').value

    sum = Number(a) + Number(inputB)
    console.log('sum', sum);

    result.innerText = sum
}
button1.addEventListener('click', answer)

// ********************sub*************************
let button2 = document.getElementById('button2')
let result1 = document.getElementById('answer1')

let sum1;

function answer1() {
    const input1 = document.getElementById('input1').value

    const input2 = document.getElementById('input2').value

    sum1 = Number(input1) - Number(input2)
    console.log('sum', sum1);

    result1.innerText = sum1
}
button2.addEventListener('click', answer1)

// **************************multip***********************
let button3 = document.getElementById('button3')
let result2 = document.getElementById('answer2')

let sum2;

function answer2() {
    const input3 = document.getElementById('input3').value

    const input4 = document.getElementById('input4').value

    sum2 = Number(input3) * Number(input4)
    console.log('sum', sum2);

    result2.innerText = sum2
}
button3.addEventListener('click', answer2)
// ***********************************division************************
let button4 = document.getElementById('button4')
let result3 = document.getElementById('answer3')

let sum3;

function answer3() {
    const input5 = document.getElementById('input5').value

    const input6 = document.getElementById('input6').value

    sum3 = Number(input5) / Number(input6)
    console.log('sum', sum3);

    result3.innerText = sum3
}
button4.addEventListener('click', answer3)
// ***************************%********************
let button5 = document.getElementById('button5')
let result4 = document.getElementById('answer4')

let sum4;

function answer4() {
    const input7 = document.getElementById('input7').value

    const input8 = document.getElementById('input8').value

    sum4 = Number(input7) % Number(input8)
    console.log('sum', sum4);

    result4.innerText = sum4
}
button5.addEventListener('click', answer4)