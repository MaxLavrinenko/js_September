// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let fun = (a,b,c)=>{
//     if (a<b && a<c){
//         console.log(`min num is ${a}`);
//     }
//     else if(b<a && b<c){
//         console.log(`min num is ${b}`);
//     }
//     else{
//         console.log(`min num is ${c}`);
//     }
// }
// fun(2,4,3)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let fun = (a,b,c)=>{
//     if (a>b && a>c){
//         console.log(`max num is ${a}`);
//     }
//     else if(b>a && b>c){
//         console.log(`max num is ${b}`);
//     }
//     else{
//         console.log(`max num is ${c}`);
//     }
// }
// fun(2,4,3)
// - створити функцію яка повертає найбільше число з масиву
// let arr = [1,2,3,45,5,6,7,8,9]
// let fun = (arr)=>{
//     let max=0
//     for(i=0;i < arr.length;i++){
//         if(max  < arr[i]){
//             max = arr[i]    
//         }
//     }
//     return max
// }
// console.log(fun(arr))
// - створити функцію яка повертає найменьше число з масиву
// let arr = [1,2,3,-45,5,6,7,8,9]
// let fun = (arr)=>{
//     let min=arr[0]
//     for(i=0;i < arr.length;i++){
//         if(min  > arr[i]){
//             min = arr[i]    
//         }
//     }
//     return min
// }
// console.log(fun(arr))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1,2,3,4,5,6,7,8,9];
// let fun=(arr)=>{
//     let sum = 0;
//     for(item of arr){
//         sum = sum+item;
//     }
//     return sum;
// }
// console.log(fun(arr))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1,2,3,4,5,6,7,8,9];
// let fun=(arr)=>{
//     let sum = 0;
//     for(item of arr){
//         sum = sum + item;
//     }
//     return sum/arr.length;
// }
// console.log(fun(arr));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, 
// а виводить найбільше (Math використовувати заборонено);
// let fun=(...nums)=>{
//     let max = nums[0];
//     let min = nums[0];
//     for (item of nums){
//         if(item > max){
//             max = item;
//         }
//         else{
//             min = item;
//         }
//     }
//     console.log(`max num is ${max}`);
//     return min
// }
// console.log(`min nams ${fun(1,2,3,4)}`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// let fun = ()=>{
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     return arr
// }
// console.log(fun());


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// let fun = (limit,size)=>{
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random()*limit);
//     }
//     return arr
// }
// console.log(fun(25,100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3]
// let fun = (arr)=>{
//     let newarr = []
//     for (let i = arr.length - 1; i >=0; i--) {
//         newarr.push(arr[i])
//     }
//     return newarr
// }
// console.log(fun(arr));