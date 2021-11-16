// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let nums = [1,2,3,4,5];
// let strings = ['hello', 'okten', 'from', 'Zaporozhye','kosmos'];
// let mixs = ['hello', 'okten', true, 10,false];
// console.log(nums);
// console.log(strings);
// console.log(mixs);

// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 1;
// arr[1] = 'str';
// arr[2] = true;
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>довільним текстом</div> `);
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>довільним текстом i index ${i}</div> `);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0
// while (i<20){
//     document.write(`<h1>довільним текстом </h1> `);
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//  let i=0
// while (i<20){
//     document.write(`<h1>довільним текстом і індексом ${i} </h1> `);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strings = ['hello', 'okten', 'from', 'Zaporozhye','kosmos'];
// for (let i = 0; i < strings.length; i++) {
//     const string = strings[i];
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mixs = [1,2,3,'hello','okten','from',12,-23,true,false];
// for (const mix of mixs) {
//     console.log(mix);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mixs = [1,2,3,'hello','okten','from',12,-23,true,false];
// for (const mix of mixs) {
//     if(typeof mix === 'boolean'){
//         console.log(mix);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mixs = [1,2,3,'hello','okten','from',12,-23,true,false];
// for (let i = 0; i < mixs.length; i++) {
//     const mix = mixs[i];
//     if (typeof mix === 'number'){
//         console.log(mix);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mixs = [1,2,3,'hello','okten','from',12,-23,true,false];
//  let i = 0;
//  while (i < mixs.length){
//      if(typeof mixs[i] === 'string'){
//          console.log(mixs[i]);
//      }
//      i++;
//  }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let mixs = [];
// mixs[0] = 1;
// mixs[1] = 2;
// mixs[2] = 3;
// mixs[3] = 'hello';
// mixs[4] = 'okten';
// mixs[5] = 'from';
// mixs[6] = 12;
// mixs[7] = -23;
// mixs[8] = true;
// mixs[9] = false;
// for (const mix of mixs) {
//     console.log(mix);
// }


// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i)
// }
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i} <br>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`${i} <br>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i%2 == 0){
//         console.log(i);
//     document.write(`${i} <br>`)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i%3 == 0 && i%2!==0){
//         console.log(i);
//     document.write(`${i} <br>`)
//     }
// }






