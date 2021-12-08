// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1 = document.createElement('form');
form1.setAttribute('id','form1');
form1.setAttribute('name','form1');

let form2 = document.createElement('form');
form2.setAttribute('id','form2');
form2.setAttribute('name','form2');
document.body.append(form1,form2);


// let input1 = document.createElement('input');
// input1.setAttribute('id','input1');
// input1.setAttribute('name','input1');
//
// let input2 = document.createElement('input');
// input2.setAttribute('id','input2');
// input2.setAttribute('name','input2');
//
// let input3 = document.createElement('input');
// input3.setAttribute('id','input3');
// input3.setAttribute('name','input3');
//
// let input4 = document.createElement('input');
// input4.setAttribute('id','input4');
// input4.setAttribute('name','input4');
// form1.append(input1,input2);
// form2.append(input3,input4);
//
// let btn = document.createElement('button');
// btn.innerText = 'to console'
// document.body.appendChild(btn);
// btn.onclick = function (){
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
// }
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let input1 = document.createElement('input')
// input1.setAttribute('placeholder','кількість рядків');
//
// let input2 = document.createElement('input')
// input2.setAttribute('placeholder','кількість ячеєк');
//
// let input3 = document.createElement('input')
// input3.setAttribute('placeholder','вмиіст ячеєк');
//
// let btn = document.createElement('button');
// btn.innerText = 'make table!'
//
// document.body.append(input1, input2, input3, btn);
//
// btn.onclick = function (){
//     let table = document.createElement('table');
//     document.body.appendChild(table)
//     for (let i = 0; i < input1.value; i++) {
//     let tr = document.createElement('tr')
//         tr.style.border = '1px solid black';
//         for (let j = 0; j < input2.value; j++) {
//             let td = document.createElement('td')
//             td.style.border = '1px solid black';
//             td.innerText = `${input3.value}`;
//             table.appendChild(tr)
//             tr.appendChild(td);
//         }
//
//     }
// }
//
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let mats = ['shit','crap','fuck','fucked'];
// let input = document.createElement('input');
// let btn = document.createElement('button');
// document.body.append(input, btn)
// btn.innerText = 'test';
// btn.onclick = function (){
//     for (mat of mats){
//         console.log(mat);
//         if(input.value.includes(mat)){
//             alert('Э, не надо так')
//             return
//         }
//     }
//     if(!input.value){
//         alert("ничего не введено")
//     }
//     else {
//         alert("все хорошо!")
//     }
// }
//
//
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку