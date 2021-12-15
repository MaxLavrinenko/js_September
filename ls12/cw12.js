// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        return response.json();
    })
    .then(posts => {
        let container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.width = '1400px'
        document.body.appendChild(container);
        for (let post of posts){
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let idTitle = document.createElement('h3');
            idTitle.innerText = `ID: ${post.id} Title: ${post.title}`
            let p = document.createElement('p');
            p.innerText = `Body: ${post.body}`;
            
            
            let btn = document.createElement('button');
            btn.innerText = 'See Comments'
            container.append(postDiv);
            postDiv.append(idTitle,p,btn);
            btn.onclick = function(){
                fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response =>response.json())
                .then(comments =>{
                    for(let comment of comments){
                        if(post.id === comment.postId){
                            let commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment');
                            commentDiv.innerHTML = `
                                <h4> ID: ${comment.id}</h4> <h3> Name: ${comment.name}</h3>
                                <h4> Email: ${comment.email}<h4>
                                <p>Body: ${comment.body}</p>
                            `;
                            postDiv.appendChild(commentDiv);
                            btn.disabled = true;
                        }
                    }
                })
            }
        }
    })
