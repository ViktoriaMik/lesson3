// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let h2Element = document.getElementsByTagName('h2');

// let idContent = document.getElementById('content');
// if (idContent) {
//     let ulElement = document.createElement('ul')
//     let liElement = document.createElement('li')
//     ulElement.appendChild(liElement)
//     idContent.appendChild(ulElement)
// }
// // _____________________________________________________________________________________________________________
// // -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let rules = [{
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];
// let wrap = document.createElement('wrap')
// document.body.appendChild(wrap)
// for (const rule of rules) {
//     let div = document.createElement('div')
//     div.classList.add('title')
//     wrap.appendChild(div)
//     div.innerText = (`${rule.title}`)
//     let divBody = document.createElement('div')
//     divBody.classList.add('body')
//     wrap.appendChild(divBody)
//     divBody.innerText = (`${rule.body}`)

// }


// ____________________________________________________________________________________________________________
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).


// let mainDiv = document.createElement('div')
// document.body.appendChild(mainDiv)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {

//         for (let user of json) {
//             let userDiv = document.createElement('div')
//             mainDiv.appendChild(userDiv)
//             for (let key in user) {
//                 let div = document.createElement('div')
//                 div.innerText = (`${[key]}:${user[key]}`)
//                 userDiv.appendChild(div)

//             }
//         }

//     })

// _______________________________________________________________________________________________________
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// let mainDiv = document.createElement('div')
// document.body.appendChild(mainDiv)

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => {

//         for (let post of json) {
//             let postDiv = document.createElement('div')
//             mainDiv.appendChild(postDiv)
//             for (let key in post) {
//                 let div = document.createElement('div')
//                 div.innerText = (`${[key]}:${post[key]}`)
//                 postDiv.appendChild(div)

//             }
//         }

//     })

// __________________________________________________________________________________________________________

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// let newDiv = document.createElement('div')
// document.body.appendChild(newDiv)
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(json => {
//         for (let comment of json) {
//             let ElementDiv = document.createElement('div')
//             newDiv.appendChild(ElementDiv)
//             for (let key in comment) {
//                 let divKey = document.createElement('div')
//                 divKey.innerText = (`${[key]}:${comment[key]}`)
//                 ElementDiv.appendChild(divKey)
//             }
//         }
//     })

// _____________________________________________________________________________________________________________
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

let mainDiv = document.createElement('div')
document.body.appendChild(mainDiv)

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(jsonPosts => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(jsonComent => {
                for (let p = 0; p < jsonPosts.length; p++) {
                    for (let c = 0; c < jsonComent.length; c++)
                        if (jsonPosts[p].postId === jsonComent[c].postId) {
                            let div = document.createElement('div')
                            document.body.appendChild(div)
                                // div.innerText = (`${ jsonPosts[p]} ${jsonComent[c]}`)
 

                        }
                }
            })
    })


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(jsonPosts => console.log(jsonPosts))