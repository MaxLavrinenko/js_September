// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNum(a,b,c){
//     if (a<b && a<c){
//         console.log(`${a} меньшее число`);
//     }
//     else if(b<a && b<c){
//         console.log(`${b} меньшее число`);
//     }
//     else (
//         console.log(`${c} меньшее число`)
//         )
// }minNum(1,2,3)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNum(a,b,c){
//     if (a>b && a>c){
//         console.log(`${a} большее число`);
//     }
//     else if(b>a && b>c){
//         console.log(`${b} большее число`);
//     }
//     else (
//         console.log(`${c} большее число`)
//         )
// }maxNum(1,2,3)
// - створити функцію яка повертає найбільше число з масиву
// let arr = [1,2,3,4,5,6,7,8,9,10];
// function maxNum(arr){
//     let max = arr[0];
//     for (const item of arr) {
//         if(item > max){
//             max = item;
//         }
//     }
//     return console.log(max);
// }
// maxNum(arr);
// - створити функцію яка повертає найменьше число з масиву
// let arr = [1,2,-3,4,5,6,7,8,9,10];
// function minNum(arr){
//     let min = arr[0];
//     for (const item of arr) {
//         if(item < min){
//             min = item;
//         }
//     }
//     return console.log(min);
// }
// minNum(arr);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1,2,10];
// function summator (arr){
//     let sum = 0;
//     for (item of arr){
//        sum = item + sum;
//     }
//     return console.log(sum)
// }
// summator(arr);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//  let arr = [1,2,10];
// function srednie (arr){
//     let sum = 0;
//     for (item of arr){
//        sum = item + sum;
//     }
//     return console.log(sum/arr.length)
// }
// srednie(arr);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let arr = [1,2,-3,4,5,6,7,8,9,10];
// function minMaxNum(arr){
//     let min = arr[0];
// 	let max = arr[0];
//     for (const item of arr) {
//         if(item < min){
//             min = item;
//         }
// 		else if(item > max){
// 			max = item
// 		}
//     } console.log(`maximal number ${max}`)
//     return min;
// }

// console.log(minMaxNum(arr));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// arr = [];
// function random (arr, size){
// 	for (i=0;i<size;i++){
// 		arr[i] = Math.round(Math.random()*100);
// 	}
// }
// random(arr,5);
// console.log(arr);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// arr = [];
// function random (arr, size,limit=100){
// 	for (i=0;i<size;i++){
// 		arr[i] = Math.round(Math.random()*limit);
// 	}
// }
// random(arr,20,50);
// console.log(arr);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3]
//     function reverse(arr) {
//         let newArr = [];
//         for (i = arr.length - 1, ni = 0; i > -1; i--, ni++) {
//             newArr[ni] = arr[i];
//         }
//         return newArr;
//     }
// 	console.log(reverse(arr));
