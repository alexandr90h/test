const number = prompt('Кількість чисел:');
//---------------------
const rangeMin = 2900;
const rangeMax = 3400;
let maxSumm = getRandomInt(rangeMin, rangeMax);
let randNum = [];
let array = 0;
let a = 20;
let part = Math.floor(maxSumm / number);
//----------------------
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення
}
const summArray = function (arr) {
  let summArr = 0;
  for (let i = 0; i < number; i += 1) {
    summArr += arr[i];
  }
  return summArr;
};
const transferDifference = function (arr) {
  let transDiff = getRandomInt(0, number - 1);
  arr.forEach(function (num, idx) {
    if (idx === transDiff) {
      arr[idx] = Math.floor(num / 2);
      arr.splice(idx + 1, 1, arr[idx + 1] + Math.floor(num / 2));
    }
  });
  return arr;
};

// console.log(`Початкова сума: ${maxSumm}`);
// console.log(`Частина: ${part}`);
for (let i = 0; i < number; i += 1) {
  randNum.push(getRandomInt(a, part));
}
array = summArray(randNum);
// console.log(`Сума= ${array}`);

// console.log(`randNum (до) = ${randNum}`);
while (array < rangeMin || array > rangeMax) {
  if (array < rangeMin) {
    part = (rangeMin - array) / number;
    array = 0;
    for (let i = 0; i < number; i += 1) {
      randNum[i] += getRandomInt(a, part);
    }
    array = summArray(randNum);
  } else if (array > rangeMax) {
    part = (array - rangeMax) / number;
    array = 0;
    for (let i = 0; i < number; i += 1) {
      randNum[i] -= getRandomInt(a, randNum[i]);
    }
    array = summArray(randNum);
  }
}
// randNum.forEach((nam, idx) => console.log(`#${idx} - ${nam}`));
// console.log(`transferDifference=${transDiff}`);
for (let i = 0; i < number; i++) {
  randNum = transferDifference(randNum);
}

// console.log(`randNum (після)`);
randNum.forEach((nam, idx) => console.log(`#${idx} - ${nam}`));
console.log(`Сума = ${array}`);
