const randomFunction = function (number, rangeMin, rangeMax) {
  //---------------------
  // number = number === 0 ? 1 : number;
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

  for (let i = 0; i < number; i += 1) {
    randNum.push(getRandomInt(a, part));
  }
  array = summArray(randNum);
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
  for (let i = 0; i < number; i++) {
    randNum = transferDifference(randNum);
  }

  // randNum.forEach((nam, idx) => console.log(`#${idx} - ${nam}`));
  // console.log(`Сума = ${array}`);
  const obj = { arr: randNum, sun: array };
  return obj;
};