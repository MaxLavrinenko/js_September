// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"
let cont = document.getElementById('content');

//     -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.innerText);
//     -- замініть текст параграфа з id 'content' на будь-який інший
cont.innerText = 'Hello okten'
console.log(cont.innerText);
//     -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'на будь-який інший'
//     -- змініть кожному елементу колір фону на червоний
let html = document.body.children;
for(element of html){
    element.style.background = 'red';
}
//     -- змініть кожному елементу колір тексту на синій
let text = document.body.children;
for(element of text){
    element.style.color = 'blue'
}
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classRules = document.getElementById('rules');
console.log(classRules.classList);

//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let colorRules = document.getElementsByClassName('fc_rules');
for(rul of colorRules){
    rul.style.color = 'red';
}
