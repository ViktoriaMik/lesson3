// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let firstUser = {
//     userId: 1,
//     id: 3,
//     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
//     body: 'et iusto sed quo iure nvoluptatem occaecati omnis eligendi aut adnvoluptatem doloribus vel accusantium quis pariatur nmolestiae porro eius odio et labore et velit aut'
// }
// let secondUser = {
//     name: 'Oleg',
//     email: 'Jayne_Kuhic@sydney.com',
//     age: 56
// }
// let thirdUser = {
//     habits: 'football',
//     child: 2,
//     pets: 'dog',
// }

// let forthUser = {
//     home: 'private house',
//     floor: 3,
//     room: 4,

// }
// let fifthUser = {
//     national: 'Germanies',
//     wife: true,
//     wifeNational: 'ukranian',
// }

// // _________________________________________________________________________________________________________

// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let firstObject = {
//     user: 'Yuriy',
//     child: [{
//             childName: 'Anastasia',
//             age: 14,
//             school: 'number43'
//         },
//         {
//             childName: 'Andriy',
//             age: 9,
//             school: 'number56'
//         },
//     ]
// }

// let secondObject = {
//     skills: ['python', 'js'],
//     avto: 'toyota highlender',
//     workExpirience: [{
//             firstJob: 'driver',
//             year: 3,
//             salary: 300,
//         },
//         {
//             secondJob: 'programer',
//             workPlace: 'epam',
//             rank: 'junior',
//         }

//     ]
// }
// let thirdObject = {

//     car: [{
//             idCar: 364,
//             model: 'CX-5',
//             producer: 'Mazda',
//             tankVolume: 2.0,
//             horsePower: 165,
//             img: 'https://www.autocentre.ua/wp-content/uploads/2021/02/2020-mazda-cx-5-01.jpg'
//         },
//         {
//             id: 904,
//             model: 'X-5',
//             producer: 'BMW',
//             tankVolume: 3.0,
//             horsePower: 225,
//             img: 'https://lh3.googleusercontent.com/proxy/PpYcQ1QXbOa_xEvKx2xNkXYhwzybW-F6VH0Z0nJh8tEMkrTAQoxjycUlgJApteWZnd5cqj2W1z8kBWEK7-YsOz-P8wI'
//         }
//     ],
//     hobies: ['golf', 'football', 'swimming']
// }
// let forthObject = {
//     birthday: [23, 'June', 1987],
//     fauvoriteColor: 'green',
//     fauvoriteDrink: 'wiskey',
//     national: 'scottish',
//     countries: [{
//             firstCountry: 'franch',
//             secondCountry: 'germany',
//             thirdCountry: 'italia',
//         },
//         {
//             firstCity: 'paris',
//             secondCity: 'koln',
//             thirdCity: 'verona',
//         }
//     ],
// };
// // _________________________________________________________________________________________________________
// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// // a) From first task

// let arrFirstKeyUser = [];
// for (const key in firstUser) {
//     arrFirstKeyUser.push(key)

// }
// console.log(arrFirstKeyUser)

// let arrSecondKeyUser = [];
// for (const key in secondUser) {
//     arrSecondKeyUser.push(key)

// }
// console.log(arrSecondKeyUser)

// let arrthirdKeyUser = [];
// for (const key in thirdUser) {
//     arrthirdKeyUser.push(key)

// }
// console.log(arrthirdKeyUser)

// let arrfourthKeyUser = [];
// for (const key in forthUser) {
//     arrfourthKeyUser.push(key)

// }
// console.log(arrfourthKeyUser)

// let arrfifthKeyUser = [];
// for (const key in fifthUser) {
//     arrfifthKeyUser.push(key)

// }
// console.log(arrfifthKeyUser)

// // b) From second task

// // let firstObject = {
// //     user: 'Yuriy',
// //     child: [{
// //             childName: 'Anastasia',
// //             age: 14,
// //             school: 'number43'
// //         },
// //         {
// //             childName: 'Andriy',
// //             age: 9,
// //             school: 'number56'
// //         },
// //     ]
// // }
// let arrFirstObjectKey = []
// for (const key in firstObject) {
//     arrFirstObjectKey.push(key)
// }
// for (let i = 0; i < firstObject.child.length; i++)
//     for (const key in firstObject.child[i]) {
//         arrFirstObjectKey.push(key)

//     }
// console.log(arrFirstObjectKey)
//     // _______________________________________________________________
//     // let secondObject = {
//     //     skills: ['python', 'js'],
//     //     avto: 'toyota highlender',
//     //     workExpirience: [{
//     //             firstJob: 'driver',
//     //             year: 3,
//     //             salary: 300,
//     //         },
//     //         {
//     //             secondJob: 'programer',
//     //             workPlace: 'epam',
//     //             rank: 'junior',
//     //         }

// //     ]
// // }
// let arrSecondObjectUser = []
// for (const key in secondObject) {
//     arrSecondObjectUser.push(key)
// }
// for (let i = 0; i < secondObject.workExpirience.length; i++) {
//     for (const key in secondObject.workExpirience[i])
//         arrSecondObjectUser.push(key)
// }
// console.log(arrSecondObjectUser)
//     // ______________________________________________________
//     // let thirdObject = {

// //     car: [{
// //             idCar: 364,
// //             model: 'CX-5',
// //             producer: 'Mazda',
// //             tankVolume: 2.0,
// //             horsePower: 165,
// //             img: 'https://www.autocentre.ua/wp-content/uploads/2021/02/2020-mazda-cx-5-01.jpg'
// //         },
// //         {
// //             id: 904,
// //             model: 'X-5',
// //             producer: 'BMW',
// //             tankVolume: 3.0,
// //             horsePower: 225,
// //             img: 'https://lh3.googleusercontent.com/proxy/PpYcQ1QXbOa_xEvKx2xNkXYhwzybW-F6VH0Z0nJh8tEMkrTAQoxjycUlgJApteWZnd5cqj2W1z8kBWEK7-YsOz-P8wI'
// //         }
// //     ],
// //     hobies: ['golf', 'football', 'swimming']
// // }

// let arrthirdObjectUser = []
// for (const key in thirdObject) {
//     arrthirdObjectUser.push(key)
// }

// for (let i = 0; i < thirdObject.car.length; i++) {
//     for (const key in thirdObject.car[i])
//         arrthirdObjectUser.push(key)
// }
// console.log(arrthirdObjectUser)
//     // ____________________________________________________________________
//     // let forthObject = {
//     //     birthday: [23, 'June', 1987],
//     //     fauvoriteColor: 'green',
//     //     fauvoriteDrink: 'wiskey',
//     //     national: 'scottish',
//     //     countries: [{
//     //             firstCountry: 'franch',
//     //             secondCountry: 'germany',
//     //             thirdCountry: 'italia',
//     //         },
//     //         {
//     //             firstCity: 'paris',
//     //             secondCity: 'koln',
//     //             thirdCity: 'verona',
//     //         }
//     //     ],
//     // };
// let arrForthObjectUser = []
// for (const key in forthObject) {
//     arrForthObjectUser.push(key)
// }
// for (let i = 0; i < forthObject.countries.length; i++) {
//     for (const key in forthObject.countries[i]) {
//         arrForthObjectUser.push(key)
//     }
// }
// console.log(arrForthObjectUser)

// // _________________________________________________________________________________________________________
// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// // a) From first task

// console.log(Object.keys(firstUser))
// console.log(Object.keys(secondUser))
// console.log(Object.keys(thirdUser))
// console.log(Object.keys(forthUser))
// console.log(Object.keys(fifthUser))

// // _______________________________________________________________________________________________________
// // b) From second task

// // let firstObject = {
// //     user: 'Yuriy',
// //     child: [{
// //             childName: 'Anastasia',
// //             age: 14,
// //             school: 'number43'
// //         },
// //         {
// //             childName: 'Andriy',
// //             age: 9,
// //             school: 'number56'
// //         },
// //     ]
// // }

// console.log(Object.keys(firstObject))
// console.log(Object.keys(firstObject.child[0]))
// console.log(Object.keys(firstObject.child[1]))
//     // _______________________________________________________________
//     // let secondObject = {
//     //     skills: ['python', 'js'],
//     //     avto: 'toyota highlender',
//     //     workExpirience: [{
//     //             firstJob: 'driver',
//     //             year: 3,
//     //             salary: 300,
//     //         },
//     //         {
//     //             secondJob: 'programer',
//     //             workPlace: 'epam',
//     //             rank: 'junior',
//     //         }

// //     ]
// // }
// console.log(Object.keys(secondObject))
// console.log(Object.keys(secondObject.workExpirience[0]))
// console.log(Object.keys(secondObject.workExpirience[1]))

// // ______________________________________________________
// // let thirdObject = {

// //     car: [{
// //             idCar: 364,
// //             model: 'CX-5',
// //             producer: 'Mazda',
// //             tankVolume: 2.0,
// //             horsePower: 165,
// //             img: 'https://www.autocentre.ua/wp-content/uploads/2021/02/2020-mazda-cx-5-01.jpg'
// //         },
// //         {
// //             id: 904,
// //             model: 'X-5',
// //             producer: 'BMW',
// //             tankVolume: 3.0,
// //             horsePower: 225,
// //             img: 'https://lh3.googleusercontent.com/proxy/PpYcQ1QXbOa_xEvKx2xNkXYhwzybW-F6VH0Z0nJh8tEMkrTAQoxjycUlgJApteWZnd5cqj2W1z8kBWEK7-YsOz-P8wI'
// //         }
// //     ],
// //     hobies: ['golf', 'football', 'swimming']
// // }

// console.log(Object.keys(thirdObject))
// console.log(Object.keys(thirdObject.car[0]))
// console.log(Object.keys(thirdObject.car[1]))
//     // ____________________________________________________________________
//     // let forthObject = {
//     //     birthday: [23, 'June', 1987],
//     //     fauvoriteColor: 'green',
//     //     fauvoriteDrink: 'wiskey',
//     //     national: 'scottish',
//     //     countries: [{
//     //             firstCountry: 'franch',
//     //             secondCountry: 'germany',
//     //             thirdCountry: 'italia',
//     //         },
//     //         {
//     //             firstCity: 'paris',
//     //             secondCity: 'koln',
//     //             thirdCity: 'verona',
//     //         }
//     //     ],
//     // };

// console.log(Object.keys(forthObject))
// console.log(Object.keys(forthObject.countries[0]))
// console.log(Object.keys(forthObject.countries[1]))

// // _______________________________________________________________________________________________________
// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)


// let car = [{
//         id: 364,
//         model: 'CX-5',
//         producer: 'Mazda',
//         tankVolume: 2.0,
//         color: 'grey',
//         horsePower: 165,
//         img: 'https://www.autocentre.ua/wp-content/uploads/2021/02/2020-mazda-cx-5-01.jpg'
//     },

//     {
//         id: 904,
//         model: 'X-5',
//         producer: 'BMW',
//         tankVolume: 3.0,
//         horsePower: 225,
//         color: 'green',
//         img: 'https://lh3.googleusercontent.com/proxy/PpYcQ1QXbOa_xEvKx2xNkXYhwzybW-F6VH0Z0nJh8tEMkrTAQoxjycUlgJApteWZnd5cqj2W1z8kBWEK7-YsOz-P8wI'
//     },
//     {
//         id: 674,
//         model: 'GLE-Class ',
//         producer: 'Mercedes-Benz',
//         tankVolume: 2.9,
//         horsePower: 330,
//         color: 'white',
//         img: 'https://i.infocar.ua/i/12/6032/700x350.jpg'
//     },
//     {
//         id: 812,
//         model: 'LX-570',
//         producer: 'Lexus',
//         tankVolume: 5.7,
//         horsePower: 367,
//         color: 'red',
//         img: 'https://images.ua.prom.st/1025029087_w640_h640_obves-lexus-lx.jpg'
//     },
//     {
//         id: 762,
//         model: 'Compass Trailhawk',
//         producer: 'jeep',
//         tankVolume: 2.4,
//         horsePower: 220,
//         color: 'black',
//         img: 'https://www.carscope.ru/imglib/22/23/71/600x400.jpeg'
//     },
//     {
//         id: 482,
//         model: ' Q8 ',
//         producer: 'Audi',
//         tankVolume: 3.0,
//         horsePower: 286,
//         color: 'purple',
//         img: 'https://nahodim.com.ua/uploads/cars/new/audi/q8/oI8QHCwwFh75FFystP2Q_So9/slider_audi_q8.jpg'
//     },
//     {
//         id: 762,
//         model: 'XC40',
//         producer: 'Volvo',
//         tankVolume: 2.0,
//         horsePower: 150,
//         color: 'pink',
//         img: 'https://nahodim.com.ua/uploads/cars/new/volvo/xc40/5a47acb394d5da76158a8f1c/slider_volvo_xc40_xc_40.jpg'
//     },
//     {
//         id: 213,
//         model: 'QX50',
//         producer: 'Infiniti ',
//         tankVolume: 2.0,
//         horsePower: 249,
//         color: 'yellow',
//         img: 'https://www.motortrend.com/uploads/sites/5/2019/11/2020-Infiniti-QX50-Edition-30-3.jpg?fit=around%7C875:492.1875'
//     },
//     {
//         id: 143,
//         model: 'Kuga',
//         producer: 'Ford',
//         tankVolume: 2.0,
//         horsePower: 190,
//         color: 'blue',
//         img: 'https://cdn.riastatic.com/photosnewr/auto/newauto_photos/ford-kuga__925234-620x415x70.jpg'
//     },
//     {
//         id: 432,
//         model: 'ASX ',
//         producer: 'Mitsubish',
//         tankVolume: 1.6,
//         horsePower: 117,
//         color: 'silver',
//         img: 'https://skolkomasla.ru/wp-content/uploads/2019/05/mainimage-835.jpg'
//     }
// ]



// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)


// let cities = [{
//         city: 'Monako',
//         region: 'Monako',
//         population: 38400,
//         language: 'french'
//     },
//     {
//         city: 'Barbados',
//         region: 'Bridgetown',
//         population: 96786,
//         language: 'english'
//     },
//     {
//         city: 'Italy',
//         region: 'SanMarino',
//         population: 33028,
//         language: 'italian'
//     },
//     {
//         city: 'Puerto Rico',
//         region: 'San Hyan',
//         population: 9104,
//         language: 'espanol'
//     },
//     {
//         city: 'El Salvador',
//         region: 'San Salvador',
//         population: 45785,
//         language: 'espanol'
//     },
// ]

// // ______________________________________________________________________________________________________
// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let arrCar = [{
//         id: 432,
//         model: 'ASX ',
//         producer: 'Mitsubish',
//         color: 'black',
//         driver: {
//             driverName: 'Volodya',
//             age: 67,
//             gender: 'man',
//             expirience: '40 years',
//         }
//     },
//     {
//         id: 226,
//         model: '3008',
//         producer: 'Peugeot',
//         color: 'red',
//         driver: {
//             driverName: 'yulia',
//             age: 43,
//             gender: 'woman',
//             expirience: '10 years',
//         }
//     },
//     {
//         id: 994,
//         model: 'CR-V',
//         producer: 'Honda',
//         color: 'pink',
//         driver: {
//             driverName: 'oleg',
//             age: 37,
//             gender: 'man',
//             expirience: '12 years'
//         }
//     },
//     {
//         id: 220,
//         model: 'Sportage',
//         producer: 'Kia',
//         color: 'blue',
//         driver: {
//             driverName: 'Valeriy',
//             age: 56,
//             gender: 'man',
//             expirience: '22 years',
//         }
//     },
//     {
//         id: 564,
//         model: ' Qashqai',
//         producer: 'Nissan',
//         color: 'grey',
//         driver: {
//             driverName: 'Olena',
//             age: 43,
//             gender: 'woman',
//             expirience: '12 years',
//         }
//     }
// ]


// // __________________________________________________________________________
// //  - проитерировать каждый массив из задания 5,6,7 при помощи while.
// // let i = 0;
// // while (i < car.length) {
// //     console.log(car[i])
// //     i++
// // }
// // let i = 0;
// // while (i < cities.length) {
// //     console.log(cities[i])
// //     i++
// // }
// // let i = 0;
// // while (i < arrCar.length) {
// //     console.log(arrCar[i])
// //     i++
// // }
// // _______________________________________________________________________________
// // - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < car.length; i++) {
//     console.log(car[i])
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i])
// }
// for (let i = 0; i < arrCar.length; i++) {
//     console.log(arrCar[i])
// }

// // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const element of car) {
//     console.log(element)
// }
// for (const element of cities) {
//     console.log(element)
// }
// for (const element of arrCar) {
//     console.log(element)
// }

// // - взять объекты из задания 1 и превратить каждый в json.
// JSON.stringify(firstUser)
// JSON.stringify(secondUser)
// JSON.stringify(thirdUser)
// JSON.stringify(forthUser)
// JSON.stringify(fifthUser)

// // - взять json из задания 11 и превратить их обратно в объекты.

// // JSON.parse(firstUser);
// // JSON.parse(secondUser);
// // JSON.parse(thirdUser);
// // JSON.parse(forthUser);
// // JSON.parse(fifthUser);
// // ____________________________________________________________________________________________
// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// // for (let i = 0; i < car.length; i++) {
// //     JSON.stringify(car[i])
// // }
// // for (let i = 0; i < car.length; i++) {
// //     JSON.parse(car[i])
// // }
// // // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// // for (let i = 0; i < cities.length; i++) {
// //     JSON.stringify(cities[i])
// // }

// // // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let arrJson = []
// for (let i = 0; i < arrCar.length; i++) {
//     arrJson.push(JSON.stringify(arrCar[i]))
// }
// console.log(arrJson)

// // _________________________________________________________________________________________________________
// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let arrayUsers = [
//         ['Vasya', '25 years', ['java', 'js', 'html']],
//         ['Oleg', '45 years', ['python', 'css', 'js', 'html']],
//         ['Olga', '23 years', ['nodeJS', 'css', 'js', 'html']],
//         ['Ivan', '23 years', ['react', 'css', 'angular', 'js', 'html']]

//     ]
//     // for (let i = 0; i < 4; i++) {
//     //     console.log(arrayUsers[i])
//     //     console.log(arrayUsers[i][2])
//     // }
//     // ______________________________________________________________________________________________________
//     // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let arrayPushUsers = []
// for (let i = 0; i < 4; i++) {
//     // arrayPushUsers.push(arrayUsers[i]),
//     arrayPushUsers.push(arrayUsers[i][2])

// }
// console.log(arrayPushUsers)
//     // _________________________________________________________________________________________
//     // - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.


// let usersSkill = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     skills: ['java', 'js']
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     skills: ['java', 'js', 'html']
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     skills: ['mysql', ',mongo']
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     skills: ['java', 'js']
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     skills: ['mysql', ',mongo']
// }];


// for (let i = 0; i < usersSkill.length; i++) {
//     console.log(usersSkill[i])
//     console.log(usersSkill[i].skills)

// }
// // _________________________________________________________________________________________________
// // - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Lviv',
//         country: 'Ukraine',
//         street: 'Shevchenko',
//         houseNumber: 1
//     }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {
//         city: 'New York',
//         country: 'USA',
//         street: 'East str',
//         houseNumber: 21
//     }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {
//         city: 'Budapest',
//         country: 'Hungary',
//         street: 'Kuraku',
//         houseNumber: 78
//     }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {
//         city: 'Prague',
//         country: 'Czech',
//         street: 'Paster',
//         houseNumber: 56
//     }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Istanbul',
//         country: 'Turkey',
//         street: 'Mikar',
//         houseNumber: 39
//     }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Rio',
//         country: 'Brasil',
//         street: 'Ronaldi',
//         houseNumber: 5
//     }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {
//         city: 'Montreal',
//         country: 'Canada',
//         street: 'Acusto',
//         houseNumber: 90
//     }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {
//         city: 'Quebeck',
//         country: 'Canada',
//         street: 'Binaro',
//         houseNumber: 33
//     }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Moscow',
//         country: 'Russia',
//         street: 'Gogolia',
//         houseNumber: 1
//     }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Portland',
//         country: 'USA',
//         street: 'Forest str',
//         houseNumber: 4
//     }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {
//         city: 'Cairo',
//         country: 'Egypt',
//         street: 'Seashore',
//         houseNumber: 45
//     }
// }];

// let adresUser = []
// for (let i = 0; i < users.length; i++) {
//     adresUser.push(users[i].address)
// }
// console.log(adresUser)

// // ____________________________________________________________________________________________
// // Дано 2 масиви з рівною кількістю об'єктів.
// // Масиви:
// let usersWithId = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false
// }, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// }, {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {
//     id: 4,
//     name: 'olya',
//     age: 28,
//     status: false
// }, ];



// let citiesWithId = [{
//     user_id: 3,
//     country: 'USA',
//     city: 'Portland'
// }, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {
//     user_id: 2,
//     country: 'Poland',
//     city: 'Krakow'
// }, {
//     user_id: 4,
//     country: 'USA',
//     city: 'Miami'
// }, ];
// // З 'єднати в один об'єкт користувача та місто з відповідними "id"та "user_id".
// // Записати цей об 'єкт в новий масив
// // Частковий приклад реультату:
// //     let usersWithCities = [{
// //         id: 1,
// //         name: 'vasya',
// //         age: 31,
// //         status: false,
// //         address: {
// //             user_id: 1,
// //             country: 'Ukraine',
// //             city: 'Ternopil'
// //         }
// //     }....]

// // for (let i = 0; i < usersWithId.length; i++) {
// //     for (let y = 0; y < citiesWithId.length; y++) {
// //         if (usersWithId[i].id === citiesWithId[y].user_id) {
// //             usersWithId[i].adress = citiesWithId[y]

// //         }
// //     }
// // }
// // console.log(usersWithId);

// // __________________________________________________________________________________________
// // - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// // let newDocument = document.createElement('div');
// // newDocument.setAttribute('id', 'xxx')
// // newDocument.classList.add('item');
// // document.body.appendChild(newDocument);
// // newDocument.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt voluptate explicabo dolorum, sequi tempore quae ipsam facilis exercitationem, placeat cumque quibusdam, dolor beatae ducimus vero optio quia obcaecati dolore?'
// // console.log(document.getElementsByTagName('div'))


// // __________________________________________________________________________________________
// // - змінити цей текст використовуючи селектори id, class,  tag

// // item.innerText = 'fdffhj'
// // xxx.innerText = 'some text'



// // ___________________________________________________________________________________________________________
// // - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// // xxx.style.heigth = '500px';
// // xxx.style.width = '800px';
// // xxx.style.background = 'silver'

// // __________________________________________________________________________________________________________

// // - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// // let tr = document.createElement('tr');

// // let table = document.createElement('table');
// // document.body.appendChild(table);

// // for (let i = 0; i < 3; i++) {
// //     let td = document.createElement('td');
// //     td.innerText = 'Ячейка ' + i
// //     tr.appendChild(td);
// // }

// // table.appendChild(tr);


// // __________________________________________________________________________________________________________
// // - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// // let arrTable = document.createElement('table')

// // for (let r = 0; r < 10; r++) {
// //     let tr = document.createElement('tr')
// //     let td = document.createElement('td')
// //     let td2 = document.createElement('td')
// //     let td3 = document.createElement('td')
// //     td.innerText = 'ячейка1'
// //     td2.innerText = 'ячейка2'
// //     td3.innerText = 'ячейка3'
// //     tr.appendChild(td)
// //     tr.appendChild(td2)
// //     tr.appendChild(td3)
// //     arrTable.appendChild(tr)
// // }

// // document.body.appendChild(arrTable);


// // ________________________________________________________________________________________________________
// // - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// // let newTable = document.createElement('table')
// // document.body.appendChild(newTable)
// // for (let r = 0; r < 10; r++) {
// //     let trr = document.createElement('tr')
// //     for (let col = 0; col < 5; col++) {
// //         let td = document.createElement('td')
// //         td.innerText = 'ячейка' + (col + 1)
// //         tr.appendChild(td)
// //     }
// //     newTable.appendChild(tr)
// // }

// // ____________________________________________________________________________________________________
// // - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// // let promptR = +prompt('Row')
// // let promptC = +prompt('Column')
// //     // let tr=document.createElement('tr')
// // for (let r = 0; r < promptR; r++) {
// //     let tr = document.createElement('tr');
// //     for (let c = 0; c < promptC; c++) {
// //         let td = document.createElement('td');
// //         td.innerText = 'Ячейка ' + (c + 1)
// //         tr.appendChild(td);
// //     }
// //     table.appendChild(tr);
// // }



// // _______________________________________________________________________________________________________

// // --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// // _______________________________________________
// //  - знайти всі елементі, які мають class
console.log(document.getElementsByClassName('class'));
//     //  - знайти всі параграфи ,та змінити текст на hello oktenweb!
let paragraph = document.getElementsByTagName('p');
console.log(paragraph)
for (const pElement of paragraph) {
    pElement.innerText = 'Hello Okten'
    console.log(pElement.innerText)
}

// p.innerText = 'hello'
// console.log(p.innerText)
// paragraph.innerText = 'hello okten'
//     //  - знайти всі div та змінити ім колір на червоний








let usersSkill = [{
    name: 'vasya',
    age: 31,
    status: false,
    skills: ['java', 'js']
}, {
    name: 'petya',
    age: 30,
    status: true,
    skills: ['java', 'js', 'html']
}]
for (let userObj of usersSkill) {
    for (const usersk of userObj) {
        console.log(usersk)
    }
}