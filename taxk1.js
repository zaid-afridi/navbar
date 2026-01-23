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