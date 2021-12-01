// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let element = document.getElementById('main_header');
// element.classList.add('sept-2021');
//     b) робить шириниу елементу ul 400px
// let uls = document.getElementsByTagName('ul')
// for(ul of uls){
// ul.style.width = '400px'
// }
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linklists = document.getElementsByClassName('linkList');
// for(element of linklists){
//     element.style.width = '50%';
// }
//     d) отримує текст який зберігається в елементі з класом listElement2
// let le2 = document.getElementsByClassName('listElement2');
// console.log(le2.innerText); //В это элементе нет текста

//     e) отримує всі елементи li та змінює ім колір фону на сірий
// let lis = document.getElementsByTagName('li');
// for(li of lis){
//     li.style.background = 'grey'
// }
//     f) отримує всі елементи 'a' та додає їм клас anchor
// let as = document.getElementsByTagName('a');
// for (a of as){
//     a.classList.add('anchor')
// }
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let as = document.getElementsByTagName('a');
// for (a of as){
//     if(a.innerText ==='link3'){
//         a.style.fontSize = '40px';
//     }
// }
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let as = document.getElementsByTagName('a');
// for (a of as){
//     a.classList.add(`element_${a.innerText}`)
//     }

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subheaders = document.getElementsByClassName('sub-header');
// let pcolor = prompt('Vvedite cvet')
// for (sh of subheaders){
//     sh.style.background = pcolor;
// }
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subheaders = document.getElementsByClassName('sub-header');
// let pcolor = prompt('Vvedite cvet')
// for (sh of subheaders){
//     if(sh.innerText === 'content 2 segment'){
//     sh.style.color = pcolor;
//     }
// }
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let cont = document.getElementsByClassName('content_1');
// let pcon = prompt('vvedi pukvi')
// for (con of cont){
//     con.innerText = pcon;
// }

//     l) отримати елементи p та змінити їм padding на 20px
// let ps = document.getElementsByTagName('p');
// for(p of ps){
//     p.style.padding = '20px';
// }
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let texts = document.getElementsByClassName('text2');
// for (text of texts){
//     text.innerText = 'sep-2021'
// }
