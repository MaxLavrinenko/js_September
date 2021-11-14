//  - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt("0-59");
//     if(time < 15){
//         document.write( 'это первая четверьть часа');
//     }
//     else if(time >=15 && time < 30){
//         document.write('это вторая четверь часа');
//     }
//     else if (time >=30 && time < 45 ){
//         document.write('это третья часть часа ')
//     }
//     else if (time >=45 && time <=60){
//         document.write("это четвертая четверть часа")
//     }
//     else {
//         document.write('нужно вводить от 0 до 59')
// }


//  - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

 // let day = +prompt('введите день от 0-31');
 // if (day > 0 && day < 10){
 //     document.write( 'это первая декада')
 // }
 // else if (day >=10 && day<21){
 //     document.write("это вторая декада")
 // }
 // else if(day >=21 && day <= 31){
 //     document.write( ' это третья декада')
 // }
 // else{
 //     document.write(" введите от 0 до 31")
 // }

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = confirm();
// console.log(test ? 'Неправильно' : 'Вірно');  // странное условие Оо//

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = +prompt('vvedite chislo');
    // if(a == 0){
    //     document.write("Невірно")
    // }
    // else{
    //     document.write('Вірно')
    // }

// console.log(a ? 'Вірно' : 'Невірно');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let day = prompt('Введи порядковый номер дня недели');
// switch (day){
//     case '1':
//         console.log('work and study')
//         break;
//     case '2':
//         console.log('work and  do classwork')
//         break;
//     case '3':
//         console.log('work and study')
//         break;
//     case '4':
//         console.log('work and  do classwork')
//         break;
//     case '5':
//         console.log('work and study')
//         break;
//     case '6'  :
//         console.log('party time')
//         break;
//     case '7':
//         console.log('relax')
//         break;
//     default:
//         console.log('week have 7 days')
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let yaer = +prompt('vvedite god');
 // if(yaer % 4 == 0){
 //     console.log('Високосний рік')
 // }
 // else {
 //     console.log('NE Високосний рік')
 // }
//
//
// console.log(yaer % 4 ? 'NE Високосний рік': 'Високосний рік' )

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let js = prompt('Яка «офіційна» назва JavaScript?');
// if (js === 'ECMAScript'){
//     console.log('Правильно!')
// }
// else {
//     console.log('Не знаєте? ECMAScript!')
// }