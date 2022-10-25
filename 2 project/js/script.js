
alert('Операторы в JS');

let incr = 10,
    decr = 10;

incr++;  // ++ Увеличивает значение на 1 (Постфиксная форма)
decr--;  // -- Уменьшает значение на 1 (Постфиксная форма)

console.log(incr); //11
console.log(decr); //9

console.log(++incr); //11 + 1 = 12 (Префиксная форма) 
console.log(--decr); //9 - 1 = 8 (Префиксная форма)

// % оператор остаток от деления

console.log(9%2); //1. число 9 делится на 2 столько раз, сколько это возможно и оставляет неделимую часть.

console.log(2*4 == '8'); //true, так как оператор сравнения сравнивает значения, а не типы

console.log(2*4 === '8'); // при строгом сравнении будет falls

// Операторы && (и) и || (или)
// Оператор && (и) работает только тогда, когда 2 или больше подопотных являются правдивыми
// Оператор || будет работать, когда один из вариантов будет правдивым

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose); // true, так как оба значения true

const isCheckedOne = true,
      isCloseOne = false;

console.log(isCheckedOne || isCloseOne); // true, так как хоябы одно значение true

// ! Оператор отрицания. Обращает значение в обратное.

const isCheckedTwo = false,
      isCloseTwo = false;

console.log(isCheckedTwo || !isCloseTwo); // true, поменял значение isCloseTwo с fallse на true

// Приоритет операторов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Курс гита на русском https://githowto.com/ru















