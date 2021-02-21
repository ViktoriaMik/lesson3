// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let arrDog = ['samoyed', 'Nick', 2, 'white', 'man']
let arrHuman = ['woman', 'Marysia', 47, 'Ukrainian', 'Chernivtsi']
let arrAvto = ['renault', 'kaleos', 2018, 'black', 'lviv']
let arrApartment = ['eight floor', 'lviv', 'bortnyanskogo', 'two room', 'green']
let arrBook = ['Джен', 'сенсеро', 'ни си', 230, 'pages']




// _______________________________________________________________________________________________________


// Дан массив:
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
''
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'andrey') {
        console.log(users[i].status)
    }
}
// } -
// статус Максима
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'max') {
        console.log(users[i].status)
    }
}
//     ім 'я передостаннього об'єкту
console.log(users[users.length - 2])
    //     
    //     ім 'я третього об'єкта
console.log(users[2])
    //     вік Олега -
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'oleg') {
        console.log(users[i].age)
    }
}
//     вік Олі -
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'olya') {
        console.log(users[i].age)
    }
}
//     вік + ім 'я 5го об'єкта
for (let i = 0; i < users.length; i++) {
    console.log(users[4].age, users[4].name)
}

//     вік + сатус Анни
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'anya') {
        console.log(users[i].age, users[i].status)
    }
}
// Приклад: вивести ім 'я 1го об'
// єкта.Відповідь: console.log(users[0].name).Будьте уважні!4 й об 'єкт має індес 3!

// -
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// --Напишіть код, який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName:
//     -отримує текст з параграфа з id "content" -
//     отримує текст з блоку з id "rules" -
//     замініть текст параграфа з id 'content'
// на будь - який інший -
//     замініть текст параграфа з id 'rules'
// на будь - який інший -
//     змініть кожному елементу колір фону на червоний -
//     змініть кожному елементу колір тексту на синій -
//     отримати весь список класів елемента з id = rules і вивести їх в console.log -
//     отримати всі елементи з класом fc_rules -
//     поміняти колір тексту у всіх елементів fc_rules на червоний