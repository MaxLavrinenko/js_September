
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model,manufacturer,year,maxSpeed,value){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.value = value;

//     this.drive = function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function() {
//         console.log(`
//         model: ${this.model}
//         manufacture: ${this.manufacturer}
//         year: ${this.year}
//         maxSpeed: ${this.maxSpeed}
//         value:${this.value}
//         driver:${this.driver}
//         `);
//     }
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function(newValue){
//         this.year = newValue;
//     }
//     this.addDriver =  function(driver){
//         this.driver = driver
//     }

// }
// let renaultLogan = new Car('logan','renault',2010,90,1.4)
// renaultLogan.addDriver('Vasya');
// renaultLogan.info();
// renaultLogan.increaseMaxSpeed(160)
// renaultLogan.drive()


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model,manufacturer,year,maxSpeed,value){
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.value = value;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
    
//     info () {
//         console.log(`
//         model: ${this.model}
//         manufacture: ${this.manufacturer}
//         year: ${this.year}
//         maxSpeed: ${this.maxSpeed}
//         value:${this.value}
//         driver:${this.driver}
//         `);
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     changeYear (newValue){
//         this.year = newValue;
//     }
//     addDriver (driver){
//         this.driver = driver;
//     }
// }
// let renaultLogan = new Car('logan','renault',2010,90,1.4)
// renaultLogan.addDriver('Vasya');
// renaultLogan.info();
// renaultLogan.increaseMaxSpeed(160)
// renaultLogan.drive()


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// function Cinderala (name,age,footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// function Prince (name,age,shoeSize) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize
// }
// let cinderelas=[
//     new Cinderala('Olya',28,38),
//     new Cinderala('Natasha',30,39),
//     new Cinderala('Katya',20,30),
//     new Cinderala('Tanya',22,31),
//     new Cinderala('Ira',23,32),
//     new Cinderala('Masha',24,33),
//     new Cinderala('Alina',25,34),
//     new Cinderala('Marina',26,35),
//     new Cinderala('Polina',27,36),
//     new Cinderala('Dasha',28,37),
// ]
// let prince = new Prince('Tolik',32,30);

// // for(cinderela of cinderelas){
// //     if(cinderela.footSize === prince.shoeSize){
// //         console.log(`${cinderela.name} your destiny`)
// //     }
// // }

// let res = cinderelas.find(item => item.footSize === prince.shoeSize);
// console.log(res);
