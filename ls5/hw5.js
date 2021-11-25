
// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let s = (a,h)=>{ return 0.5*a*h};
// console.log(s(10,5));
// - створити функцію яка обчислює та повертає площу кола
// let s = (r)=> {return 3.14 * (r**2) };
// console.log(s(5));
// - створити функцію яка обчислює та повертає площу циліндру
// let s = (r,h) => {return 2*3.14*r*h };
// console.log(s(10,5));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,3,5,2,4,7,6,8,9];
// let fun = (arr) =>{
//     for(item of arr){
//         console.log(item)
//     }
// }
// fun(arr);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let fun = (text)=>{
//     document.write(`<p> ${text}</p>`)
// }
// fun ('some text');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let fun = (text)=>{
//     document.write(`<ul>`)
//     for (i=0;i<3;i++){
//         document.write(`<li> ${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// fun ('some text');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. 
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let fun = (text,size)=>{
//     document.write(`<ul>`)
//     for (i=0;i<size;i++){
//         document.write(`<li> ${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// fun ('some text',10);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mixs = [1,2,3,'text','hello',true,false]
// let fun = (arr)=>{
//     document.write(`<ul>`)
//     for(item of arr){
//         document.write(` <li> ${item} </li> `)
//     }
//     document.write(`</ul>`)
// }
// fun(mixs)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [{id:1,name:'Vasya',age: 20},{id:2,name:'Petya',age: 30},{id:3,name:'Kolya',age: 40}];
// let fun =(arr)=>{
//     for(user of arr){
//         document.write(`<div id=> NAME:${user.name} ID:${user.id} AGE:${user.age} </div>`)
//     }
// }
// fun(arr)