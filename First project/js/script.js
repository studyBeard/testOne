/*

alert('Взаимодействие Javascript с пользователем');

const result = confirm('Are you here?'); // конфирм спрашивает ок/отмена

console.log(result); // Результат записывается в переменную

const answer = prompt('What is you name', 'Ivan'); //промпт спрашивает какие то данные. .Во 2 ковычках дефолтное значение

console.log(answer); // Результат записывается в переменную. В промпт это всегда строка
                     // Вся информация, которая приходит от пользователя - приходит в виде строк.

console.log(typeof(answer)); // Проверяем. Результат string

const answerAge = +prompt('How old are you', '18'); // Если перед промпт поставить +, то значение преобразуется в число

console.log(answerAge); 

console.log(typeof(answerAge)); // Проверяем. Результат number

const answers = []; //создаем переменную с массивом

answers[0] = prompt('Как ваше имя?', 'Alex'); // первый вопрос для первого свойства

answers[1] = prompt('Какая у вас фамилия?', 'Smith'); // второй вопрос для второго свойства

answers[2] = prompt('Сколько вам лет?', '18'); // третий вопрос для третьего свойства

console.log(answers); //получаем массив с 3 свойствами

document.write(answers); //отобразит свойства массива на сайте

console.log(typeof(answers)); // object. Массив это объект

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const category = 'toys';

console.log(`https//:www.comeurl.com/${category}/5`); //Чтобы писать в таком формате нужно использовать
                                                        // `` обратные ковычки (бэктики)

const user = prompt('Как вас зовут?', 'username');

alert(`Привет, ${user}`); // `` Бэктики