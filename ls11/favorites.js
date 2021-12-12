let favoritesArr = JSON.parse(localStorage.getItem('favorites'));
for (let favorit of favoritesArr){
    let div = document.createElement('div')
    div.innerText = `${favorit.name} ${favorit.age}  ${favorit.status}`
    document.body.appendChild(div)
}