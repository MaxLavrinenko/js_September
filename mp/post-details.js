// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let post = JSON.parse(localStorage.getItem('post'));

let postDiv = document.createElement('div');
postDiv.innerHTML = `<h3>Title of post: ${post.title}</h3>
                       <h4>id of post: ${post.id};  User ID who write this post: ${post.userId}</h4> 
                       <p> Post: ${post.body} </p> `;

let commenButton = document.createElement('button');
commenButton.innerText = 'comments'
commenButton.onclick = function (){
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(response=>response.json())
        .then(comments =>{
            for(let comment of comments){
                let commentDiv = document.createElement('div');
                commentDiv.innerHTML=`
                <h4>ID of comment: ${comment.id}  Email: ${comment.email} </h4>
                <h5>Name: ${comment.name}</h5> 
                <p>Text: ${comment.body}</p>   `
                postDiv.appendChild(commentDiv)
            }
        })
}
document.body.append(postDiv,commenButton);
