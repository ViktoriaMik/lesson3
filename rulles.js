// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

//     З 'єднати в один об'єкт користувача та місто з відповідними "id"та "user_id".Записати цей об 'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{
//         id: 1,
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1,
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     }....]

let usersWithId = [{
    id: 1,
    name: 'vasya',
    age: 31,
    status: false
}, {
    id: 2,
    name: 'petya',
    age: 30,
    status: true
}, {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true
}, {
    id: 4,
    name: 'olya',
    age: 28,
    status: false
}, ];
let citiesWithId = [{
    user_id: 3,
    country: 'USA',
    city: 'Portland'
}, {
    user_id: 1,
    country: 'Ukraine',
    city: 'Ternopil'
}, {
    user_id: 2,
    country: 'Poland',
    city: 'Krakow'
}, {
    user_id: 4,
    country: 'USA',
    city: 'Miami'
}, ];


for (let u = 0; u < usersWithId.length; u++) {
    for (let c = 0; c < citiesWithId.length; c++)
        if (usersWithId[u].id === citiesWithId[c].user_id) {
            usersWithId[u].adress = citiesWithId[c]

        }
}
console.log(usersWithId)

// _____________________________________________________________________________________________________________

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let idget = document.getElementById('wrap')
// console.log(idget);
// console.log(idget.innerHTML)
// idget.innerHTML = 'hello'
// let clas = document.getElementsByClassName('rules')
// console.log(clas)
// let tag = document.getElementsByTagName('div')
// - змінити цей текст використовуючи селектори id, class,  tag
// for (const idElement of idget) {
// idElement.innerHTML = 'okten web'
// }
// }
// for (const clasElement of clas) {
//     clasElement.innerHTML = 'hello'
// }
// for (const tagElement of tag) {
//     tagElement.innerHTML = 'viktoria'
// }
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// ___________________________________________________________________________________________________

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let header = document.getElementsByTagName('h2')
let content = document.getElementById('content')

if (content) {
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    ul.appendChild(li)
    content.appendChild(ul)
}


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
let table = document.createElement('table')
document.body.appendChild(table)
let promptN = +prompt('enter n')
let promptm = +prompt('enter m')
let tabl = document.createElement('table')
document.body.appendChild(tabl)
for (let n = 0; n < promptN; n++) {
    let tr = document.createElement('tr')
    tabl.appendChild(tr)
    document.body.appendChild(tr)
    for (let m = 0; m < promptm; m++) {
        let td = document.createElement('td')
        td.innerHTML = 'td' + (m + 1)
        tr.appendChild(td)
        table.appendChild(tr)
    }


}
// let table = document.createElement('table')
// document.body.appendChild(table)

// let promptR = +prompt('Row')
// let promptC = +prompt('Column')
//     // let tr = document.createElement('tr')
// for (let r = 0; r < promptR; r++) {
//     let tr = document.createElement('tr');
//     for (let c = 0; c < promptC; c++) {
//         let td = document.createElement('td');
//         td.innerText = 'Ячейка ' + (c + 1)
//         tr.appendChild(td);
//         table.appendChild(tr);
//     }

// }