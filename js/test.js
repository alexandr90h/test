const elem = document.querySelector('#menu');
console.log(elem);

const elemByClass = document.querySelectorAll('.menu-item');
console.log(elemByClass);

const elemFirstMenuItem = document.querySelector('.menu-item');
elemFirstMenuItem.style.color = '#5EC14D';
elemFirstMenuItem.style.width = '400px';
console.log(elemFirstMenuItem);

const elemTextAreaById = document.querySelector('#text');
elemTextAreaById.value = 'Свойства';

const elemTitle = document.querySelector('h1');
console.log(elemTitle.textContent);

const link = document.createElement('a');
link.href = 'https://www.google.com.ua/';
link.textContent = 'GOOGLE.COM.UA';

const elemConteinerId = document.querySelector('.conteiner');
elemConteinerId.append(link);
elemConteinerId.append((document.createElement('p').textContent = 'abc'));
