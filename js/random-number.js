const number = prompt('Кількість чисел:');
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення
}
const rangeMin = 2900;
const rangeMax = 3400;
let maxSumm = getRandomInt(rangeMin, rangeMax);
let randNum = [];
let array = 0;
let a = 20;
let part = Math.floor(maxSumm / number);
console.log(`Початкова сума: ${maxSumm}`);
console.log(`Частина: ${part}`);
for (let i = 0; i < number; i += 1) {
    randNum.push(getRandomInt(a, part));
    array += randNum[i];
}
console.log(`Сума= ${array}`);

console.log(`randNum (до) = ${randNum}`);
while (array < rangeMin || array > rangeMax) {
    if (array < rangeMin) {
        part = (rangeMin - array) / number;
        array = 0;
        for (let i = 0; i < number; i += 1) {
            randNum[i] += getRandomInt(a, part);
            array += randNum[i];
        }
    } else if (array > rangeMax) {
        part = (array - rangeMax) / number;
        array = 0;
        for (let i = 0; i < number; i += 1) {
            randNum[i] -= getRandomInt(a, randNum[i]);
            array += randNum[i];
        }
    }
}
console.log(`randNum (після) = ${randNum}`);
console.log(`Сума= ${array}`);
