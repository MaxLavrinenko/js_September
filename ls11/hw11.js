// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

// let form1 = document.createElement('form');
//
// let inputName = document.createElement('input');
// inputName.setAttribute('id','name');
//
// let inputAge = document.createElement('input');
// inputAge.setAttribute('id','age');
//
// let btn = document.createElement('button');
// btn.innerText = 'to storage'
//
// form1.append(inputName,inputAge);
// document.body.append(form1,btn);
//
// let id = 1;
// btn.onclick = function () {
//     let user = {
//         name: inputName.value,
//         age: inputAge.value,
//         userId: id
//     }
//
//     localStorage.setItem(id,JSON.stringify(user));
//     return id++
// }

//
// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// let form = document.createElement('form')
// let inputModel = document.createElement('input');
// let inputType = document.createElement('input');
// let inputVolume = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'arr to storage';
// document.body.append(form,btn);
// form.append(inputModel,inputType,inputVolume);
//
//
// let key = 'key';
// btn.onclick = function (){
//     let model = {
//         model:inputModel.value,
//         type: inputType.value,
//         volume: inputVolume.value,
//     }
//     let carArr =JSON.parse(localStorage.getItem(key)) || [];
//     carArr.push(model);
//     localStorage.setItem(key,JSON.stringify(carArr));
// }
