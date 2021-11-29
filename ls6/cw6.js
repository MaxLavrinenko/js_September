// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// let normal = (str)=>{
//     let newstr = '';
//     if(str.includes('..')){
//         let arr = str.split('..');
//         newstr = arr.join(' ')
//     }else if (str.includes('---')){
//         let arr = str.split('---');
//         newstr = arr.join(' ')
//     }
//     else if(str.includes('__')){
//     let arr = str.split('__');
//     newstr = arr.join(' ')
//     }
//     else {
//         console.log(`pu pu pu`);
//     }
//     return newstr
// }
// console.log(normal(n3));

// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// function randomizator (length,max){
//     let arr =[];
//     for(i=0; i < length; i++){
//         arr.push(Math.floor(Math.random() * max))
//     }
//     return arr
// }
// // console.log(randomizator(20,100));
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. 
// // Відсортувати його за допомоги sort.
// let arr = randomizator(10,50);
// // console.log(arr.sort());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. 
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// console.log(arr.filter(item => item % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
//  за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// console.log(arr.map(item => item.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, 
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// let sortNums =(arr,direction)=>{
//     if(direction == 'ascending'){
//     return arr.sort((a,b) => a-b)
// }
//     else if(direction == 'descending'){
//         return arr.sort((a,b)=>b-a);
//     }
//     else{
//         console.log(`${direction} is pupupu`)
//     }
// }
// console.log(sortNums(nums,'descending'));
// // sortNums('ascending') // [3,11,21]
// // sortNums('descending') // [21,11,3]


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //  -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a,b)=> a.monthDuration - b.monthDuration));

// //  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(item => item.monthDuration>=5));
