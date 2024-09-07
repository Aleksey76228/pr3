'use strict';
// 1

let price = Number(prompt('Введите цену товара'));
let money = Number(prompt('Введите ваши деньги'));

let neh = price - money;
let sd = money - price;


if(price < 0 || money <0){
    alert('Неверный формат')
}
else if(price == money){
    alert('Покупка совершена');
}else if(price > money){
    alert(`У вас нехватает ${neh}`)
} else if(price < money){
    alert(`Ваша сдача ${sd}`)
}

// 2

let x = Number(prompt('Введите число'));

if(x>0){
    alert('1')
}else if(x<0){
    alert('-1')
}else if(x==0){
    alert('0')
}

// 3

let a = Number(prompt('Введите число a'));
let b = Number(prompt('Введите число b'));
let result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);

// 4

let login = prompt('Кто ты есть?');
let message = (login=='Сотрудник') ? 'Привет' : (login=='Директор') ? 'Здравствуйте' : (login=='') ? 'Нет логина' : '';
alert(message);

// 5 

let log = prompt('Введите логин');

if (log === 'Админ') {
    let j = prompt('Введите пароль');

    if (j === 'Я главный') {
        alert('Здравствуйте!');
    } else if (j === '') {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (log === '') {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}






  