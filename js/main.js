const formConteiner = document.querySelector('#form-conteiner');
const numberInput = document.querySelector('#number-input');
const minInput = document.querySelector('#min-input');
const maxInput = document.querySelector('#max-input');
const btn = document.querySelector('#button-input');
const textResultBox = document.querySelector(".text-result-box");

console.log(document.querySelector('table'));
const clickBtnFun = function () {
  const obj = randomFunction(
    Number(numberInput.value),
    Number(minInput.value),
    Number(maxInput.value),
  );

  const tableBox = document.createElement('table');
  const summBox = document.createElement('p');
  summBox.classList.add('summ-box');
  if (document.querySelector('table') === null) {
    textResultBox.after(tableBox);
    tableBox.after(summBox);
  } else {
    document.querySelector('table').replaceWith(tableBox);
    document.querySelector(".summ-box").replaceWith(summBox);
  }

  obj.arr.forEach((num, idx) => {
    const tabLine = document.createElement('tr');
    const tabCell = document.createElement('td');
    const tabCellNum = document.createElement('td');
    tabCellNum.style.backgroundColor = '#CE2828';
    tabCellNum.style.fontWeight = "700";
    tableBox.appendChild(tabLine).append(tabCell, tabCellNum);
    tabCell.textContent = idx + 1;
    tabCellNum.textContent = num;
  });
  summBox.textContent = `Сума: ${obj.sun}`;
};
btn.addEventListener('click', clickBtnFun);
