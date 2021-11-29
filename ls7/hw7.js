// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // // створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id,name,surname, email,phone){
//     this.name = name;
//     this.id = id;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// // let users = [
// //     new User(1,'Tolya','Gerasimov','gera@gmail.com',+380992223344),
// //     new User(2,'Olya','Daus','olay@gmail.com',+380992223355),
// //     new User(3,'Kolya','Ivanov','kolya@gmail.com',+380992223366),
// //     new User(4,'Vitalij','Serduk','Vitalij@gmail.com',+380992223377),
// //     new User(5,'Max','Lavr','max@gmail.com',+380992223399),
// //     new User(6,'Iliya','Alexeenko','Iliya@gmail.com',+380992223310),
// //     new User(7,'Oleg','Petrovich','Oleg@gmail.com',+380992223311),
// //     new User(8,'Andrej','Potapenko','Andrej@gmail.com',+380992223333),
// //     new User(9,'Ura','Gonajlo','Ura@gmail.com',+3809922233422),
// //     new User(10,'Lena','Golovach','Lena@gmail.com',+380992223311)
// // ]
// // // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// // console.log(users.filter(item => item.id % 2 === 0));

// // // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// // console.log(users.sort((a,b) => a.id-b.id));

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client extends User{
//     constructor(id,name,surname,email,phone,order=[]){
//         super (id,name,surname,email,phone);
//         this.order = order;
//     }
// }

// // створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [new Client(1,'Tolya','Gerasimov','gera@gmail.com',+380992223344,['hleb','sosiski','mayonez']),
//     new Client (2,'Olya','Daus','olay@gmail.com',+380992223355,['kartoha','morkva','cibula']),
//     new Client (3,'Kolya','Ivanov','kolya@gmail.com',+380992223366,['mandarin','apelsin','limon']),
//     new Client (4,'Vitalij','Serduk','Vitalij@gmail.com',+380992223377,['riba','moloko','bumaga']),
//     new Client (5,'Max','Lavr','max@gmail.com',+380992223399,['pepsi','rom']),
//     new Client (6,'Iliya','Alexeenko','Iliya@gmail.com',+380992223310,['chips','pivo']),
//     new Client (7,'Oleg','Petrovich','Oleg@gmail.com',+380992223311,['ogurec','pomidor']),
//     new Client (8,'Andrej','Potapenko','Andrej@gmail.com',+380992223333,['djin','tonik']),
//     new Client (9,'Ura','Gonajlo','Ura@gmail.com',+3809922233422,['salo','hleb','chesnok','gorilka']),
//     new Client (10,'Lena','Golovach','Lena@gmail.com',+380992223311,['shokolad'])]


// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((a,b) => a.order.length - b.order.length));
