// - Знайти та вивести довижину настипних стрінгових значень
// let str1 ='hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 ='hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// strUp1 = str1.toUpperCase(); 
// strUp2 = str2.toUpperCase(); 
// strUp3 = str3.toUpperCase();
// console.log(strUp1);
// console.log(strUp2);
// console.log(strUp3);
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
// let strLo1= str1.toLowerCase();
// let strLo2= str2.toLowerCase();
// let strLo3= str3.toLowerCase();
// console.log(strLo1);
// console.log(strLo2);
// console.log(strLo3);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// let cstr = str.trim();
// console.log(cstr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    // let str = 'Каждый охотник желает знать';
    // let stringToarray = (str)=>{
    // return str.split(' ');
    // }
    // let arr = stringToarray(str);

    // console.log(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str,length)=>{
//     let arr = str.split(' ');
//     for(item of arr){
//         if(item.length === length){
//             console.log(item);
//         }
//     }
// }
// delete_characters(str,7);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. 
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str)=>{
//     strUp = str.toUpperCase();
//     strArr = strUp.split(' ');
//     strjoin = strArr.join('-');
//     return strjoin;
// }
// let dash = insert_dash(str);
// console.log(dash);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'каждый охотник желает знать';
// let firstUp = (str)=>{
//     let fr = str[0].toUpperCase();
//     return fr + str.slice(1);
// }
// console.log(firstUp(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'каждый охотник желает знать';
// let capitalize=(str)=>{
//     let arr = str.split(' ');
//     newarr =[]
//     for(item of arr){
//         nit = item[0].toUpperCase() + item.slice(1);
//         newarr.push(nit)
//     }
//     newstr = newarr.join(' ');
//     return newstr
// }
// console.log(capitalize(str));