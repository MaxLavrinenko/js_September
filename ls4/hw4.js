// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function plosha(a,b){
//     let p = a*b;
//     return console.log(p);
// }
// plosha(3,3);
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function ploshaKruga (a){
//     let pi = 3.14;
//     let s = pi*(a**2);
//     return console.log(s);
// }
// ploshaKruga(5);
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function ploshaCilindr (h,r){
//     let pi = 3.14;
//     let s = 2*pi*r*(h+r);
//     return console.log(s);
// }
// ploshaCilindr(10,5);
// - створити функцію яка приймає масив та виводить кожен його елемент
// function forarr (arrs){
//     for(arr of arrs){
//         console.log(arr);
//     }
// }
// let mixs = [1,2,3,'hello','okten',true,false];
// forarr(mixs);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент;
// function textToParagraf (header,text){
//     document.write(`<h3>${header}</h3>`);
//     document.write(`<p>${text}</p>`);
// }
// textToParagraf('headertext', 'testtext' )
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function spisok (text,size){
//     document.write(`<ul>`);
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// spisok('d',5)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function spisok (text,size=3){
//     document.write(`<ul>`);
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// spisok('test',10);

// // // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mixs = [1,2,3,'hello','okten',true,false];
// function spisok(arr){
//         document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// spisok(mixs);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let simpsons = [
// 				{
// 					name: 'Bart',
// 					surname: 'Simpson',
// 					age: 10,
// 					info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
// 					photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
// 				},
// 				{
// 					name: 'Homer',
// 					surname: 'Simpson',
// 					age: 40,
// 					info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
// 					photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
// 				},
// 				{
// 					name: 'Marge',
// 					surname: 'Simpson',
// 					age: 38,
// 					info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
// 					photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
// 				},
// 				{
// 					name: 'Lisa',
// 					surname: 'Simpson',
// 					age: 9,
// 					info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
// 					photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
// 				},
// 				{
// 					name: 'Maggie',
// 					surname: 'Simpson',
// 					age: 1,
// 					info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
// 					photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
// 				},
// 			];
// function arrObjects(arrs){
//     for (arr of arrs){
//            document.write (`<div>
//            NAME- ${arr.name} SURNAME-${arr.surname} AGE-${arr.age} INFO-${arr.info}
//            <img src="${arr.photo}" alt="">
//            </div> `)
//         }
// }
// arrObjects(simpsons);