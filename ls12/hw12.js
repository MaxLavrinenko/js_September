// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
// //
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response =>{
//         return response.json();
//     })
//     .then(posts => {
//         let container = document.createElement('div');
//         container.style.display = 'flex';
//         container.style.flexWrap = 'wrap';
//         container.style.width = '1400px'
//         document.body.appendChild(container);
//         for (let post of posts){
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('post');
//             let idTitle = document.createElement('h3');
//             idTitle.innerText = `ID: ${post.id} Title: ${post.title}`
//             let p = document.createElement('p');
//             p.innerText = `Body: ${post.body}`;
//             postDiv.append(idTitle,p);
//             container.appendChild(postDiv);
//         }
//     })
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response =>{
//         return response.json();
//     })
//     .then(comments =>{
//         let container = document.createElement('div');
//         container.style.display = 'flex';
//         container.style.flexWrap = 'wrap';
//         container.style.width = '1400px'
//         for(let comment of comments){
//             let commentDiv = document.createElement('div');
//             commentDiv.innerHTML = `
//                 <h4> ID: ${comment.id}</h4> <h3> Name: ${comment.name}</h3>
//                 <h4> Email: ${comment.email}<h4>
//                 <p>Body: ${comment.body}</p>
//             `;
//             commentDiv.classList.add('comment');
//               container.appendChild(commentDiv);  
//         }
//         document.body.appendChild(container)
//     })
