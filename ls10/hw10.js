// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let btn = document.createElement('button');
// document.body.appendChild(btn);
// let p = document.createElement('p');
// document.body.appendChild(p);
// p.id = 'text';
// btn.innerText = 'click';
// p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur dolor dolore ea earum excepturi id iste libero odit officiis quisquam quos sequi, unde? Aperiam delectus earum eligendi ipsa ipsam, ipsum iure, molestiae quis saepe similique sit unde vel voluptatibus.'
// btn.onclick = function (){
//     p.style.display = 'none';
// }


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btn = document.createElement('button');
// document.body.appendChild(btn);
// btn.id = 'text';
// btn.innerText = 'click';
// btn.onclick = function (){
//     btn.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let btn = document.getElementById('btn');
// btn.onclick = function (){
//     let age = document.getElementById('inp1');
//     if(age.value >= 18){
//         document.write('laskavo prosumo!')
//     }
//     else{
//         document.write('prohod zapreshen');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// let btn = document.getElementById('menu')
// let ul = document.getElementById('ulList')
// btn.onclick = function (){
//     ul.classList.toggle('hide');
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let coments = [
//     {title:' не качество', body:'качество не очень'},
//     {title:'качество', body:'качество очень'},
//     {title:'не практичность', body:'практичность не очень'},
//     {title:'практичность', body:'рактичность очень'},
//     {title:'товар', body:'товар не очень'}
// ]
// for(coment of coments){
//     let btn = document.createElement('button');
//     btn.innerText = 'hiden';
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     h2.innerText = `${coment.title}`;
//     let p = document.createElement('p');
//     p.innerText = `${coment.body}`;
//     div.append(h2,p,btn);
//     document.body.appendChild(div);
//     btn.onclick = function (){
//         p.classList.toggle('hide')
//     }
//
// }