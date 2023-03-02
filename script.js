


let minValue = parseInt(prompt('Минимальное знание числа для игры', '-999')) || 0;

function inputMinValue() {
    return minValue < -999 ? -999 : minValue;
};
inputMinValue();
minValue = inputMinValue();
console.log(minValue);


let maxValue = parseInt(prompt('Максимальное знание числа для игры', '999')) || 0;

function inputMaxValue() {

    return maxValue > 999 ? 999 : maxValue;

};
inputMinValue();
maxValue = inputMaxValue();
console.log(maxValue);

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);




let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerHTML = orderNumber;
answerField.innerText = `Вы загадали ${answerNumber}?`;


document.querySelector('#btnRetry').addEventListener('click', function () {

    let minValue = parseInt(prompt('Минимальное знание числа для игры', '-999')) || 0;

    function inputMinValue() {

        return minValue < -999 ? -999 : minValue;
    };
    inputMinValue();
    minValue = inputMinValue();
    console.log(minValue);


    let maxValue = parseInt(prompt('Максимальное знание числа для игры', '999')) || 0;

    function inputMaxValue() {

        return maxValue > 999 ? 999 : maxValue;
    };
    inputMinValue();
    maxValue = inputMaxValue();
    console.log(maxValue);

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    orderNumber = 1;

    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerHTML = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;

    gameRun = true;
});


document.getElementById("btnLess").addEventListener('click', function () {
    if (gameRun) {
        if (minValue === answerNumber) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Что-то неверно,нужно подумать...\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber ;
        
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round(Math.random() * 3);
            answerField.innerText = (phraseRandom === 1) ? `Наверное это число ${answerNumber}` :
            (phraseRandom === 2) ? `Слушай, это точно ${answerNumber}`: ` Я уверен, что это ${answerNumber}`;
        }
    }
})


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Что-то неверно,нужно подумать...\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round(Math.random() * 4);
            answerField.innerText = (phraseRandom === 1) ? `Думаю, что это число ${answerNumber}` :
            (phraseRandom === 2) ? `А может это число ${answerNumber}`: 
            (phraseRandom === 3) ? `100% это число  ${answerNumber}`:  `Это точно число ${answerNumber}`;
        }

    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {

        phraseRandom = Math.round(Math.random());
        answerField.innerText = (phraseRandom) ?
            `Это было нетрудно!` : `Я угадал! Повторим?`;
        gameRun = false;
    }
})