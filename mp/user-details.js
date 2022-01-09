// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


let user = JSON.parse(localStorage.getItem('user'));

let userContainer = document.createElement('div');
userContainer.classList.add('userContainer');

let userDiv = document.createElement('div');
userDiv.classList.add('userDiv');
userContainer.appendChild(userDiv);
userDiv.innerHTML=`
    <h1> User Name: ${user.name}</h1>
    <h2> User Nick Name: ${user.username} Id User:${user.id}</h2>
    <h3>Email : ${user.email}</br>
    Phone: ${user.phone} </br>
    Website: ${user.website}
    </h3>
    <p>adress: </br>
    city: ${user.address.city}</br>
    street: ${user.address.street}</br>
    suite: ${user.address.suite}</br>
    zipcode: ${user.address.zipcode}</br>
    location: lat: ${user.address.geo.lat} , lng: ${user.address.geo.lng}
    </br></br>
    Information of company: </br> 
    Company name: ${user.company.name} </br>
    Company catch phrase: ${user.company.catchPhrase}</br>
    business directions: ${user.company.bs}    
     </p>`;

let postButton = document.createElement("button");
postButton.classList.add('button');
postButton.innerText = 'post of current user';
postButton.onclick = function (){
    let postContainer = document.createElement('div');
    postContainer.classList.add('postContainer');
    document.body.appendChild(postContainer);
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response=> response.json())
        .then(posts =>{
            for (let post of posts) {
                let titleDiv = document.createElement('div');
                postContainer.appendChild(titleDiv);
                titleDiv.innerText = `Post title: ${post.title} `
                titleDiv.classList.add('titleDiv');

                let detailButton = document.createElement("button");
                detailButton.innerText = 'post details';
                titleDiv.appendChild(detailButton);

                detailButton.onclick = function (){
                    localStorage.setItem('post',JSON.stringify(post));
                    window.location.href='post-details.html';
                }
                    postButton.disabled =true;

                }
        })
    }

document.body.append(userContainer,postButton);