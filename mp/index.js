// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули.
//index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        return response.json();
    })
    .then(users=>{
        let container = document.createElement('div');
        container.classList.add('container')
        document.body.appendChild(container);

        for(let user of users){
            let userDiv = document.createElement('div')
            userDiv.classList.add('userDiv');
            userDiv.innerHTML = `<h3> ID = ${user.id} </h3><h2> Name: ${user.name}</h2>`
            container.appendChild(userDiv);

            let userButton = document.createElement('button');
            userButton.innerText = 'datails';
            userDiv.appendChild(userButton);

            userButton.onclick = function (){
                localStorage.setItem('user',JSON.stringify(user))
                window.location.href='user-details.html'
                }

        }

})