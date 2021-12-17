//
  // Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
  // Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
  // Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
  // // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

  function wakeUp(todo){
      return new Promise((resolve,rejekt) =>{
          setTimeout(()=>{
            if(todo){
                console.log('wakeUp and go to work!');
                resolve(true);
            }
            else{
                console.log('all ended before it began');
                rejekt(false);
            }
          },1500);
      });
  }

  function breakfast(todo){
      return new Promise((resolve,rejekt) =>{
          setTimeout(()=>{
              if(todo){
                  console.log('need to hurry');
                  resolve(true);
              }
              else{
                  console.log('R.I.P');
                  rejekt(false);
              }
          },1000);
      });
  }

  function shower(todo){
      return new Promise((resolve,rejekt)=>{
          setTimeout(()=>{
              if(todo){
                  console.log('take a shower');
                  resolve(true);
              }
              else{
                  console.log('R.I.P');
                  rejekt(false);
              }
          },900);
      });
  }

  function work(todo){
      return new Promise((resolve,rejekt)=>{
          setTimeout(()=>{
              if(todo){
                  console.log('go to work');
                  resolve(true);
              }
              else{
                console.log('R.I.P');
                rejekt(false);
              }
          },800);
      });
  }

  function dinner(todo){
      return new Promise((resolve,rejekt)=>{
          setTimeout(()=>{
              if(todo){
                  console.log('dinner and relax');
                  resolve(true)
              }
              else{
                console.log('R.I.P');
                rejekt(false);
              }
          },1200);
      });
  }

  function home (todo){
      return new Promise((resolve,rejekt)=>{
          setTimeout(()=>{
              if(todo){
                  console.log('go to home');
                  resolve(true);
              }
              else{
                console.log('R.I.P');
                rejekt(false);
              }
          },850);
      });
  }

  function supper(todo){
      return new Promise((resolve,rejekt)=>{
        setTimeout(()=>{
            if(todo){
                console.log('eat some food');
                resolve(true);
            }
            else{
                console.log('R.I.P');
                rejekt(false);  
            }
        },550)
      });
  }

  function study (todo){
      return new Promise((resolve,rejekt)=>{
          setTimeout(()=>{
            if(todo){
                console.log('watch lectures from OKTEN');
                resolve(true)
            }
            else{
                console.log('R.I.P');
                rejekt(false); 
            }
          })
      },770)
  }

  function homework(todo){
      return new Promise((resolve,rejekt)=>{
          setTimeout(()=>{
              if(todo){
                  console.log('do some homework and classwork');
                  resolve(true);
              }
              else{
                console.log('R.I.P');
                rejekt(false);
              }
          },1800)
      })
  }

  function sleep(todo){
      return new Promise((resolve,rejekt)=>{
          setTimeout(()=>{
              if(todo){
                  console.log('go to bed relax and sleep');
                  resolve(true)
              }
              else{
                console.log('R.I.P');
                rejekt(false);
              }
          },2000)
      })
  }


  ////  .Then promises
// wakeUp(true)
//     .then(res=>breakfast(res)
//         .then(res=>shower(res)
//             .then(res=>work(res)
//                 .then(res=>dinner(res)
//                     .then(res=>work(res)
//                         .then(res=>home(res)
//                             .then(res=>supper(res)
//                                 .then(res=>study(res)
//                                     .then(res=>homework(res)
//                                         .then(res=>sleep(res)))))))))))
  // // wakeUp(true)
  // .then(res =>{
  //     breakfast(res)
  //     .then(res =>{
  //       shower(res)
  //       .then(res=>{
  //           work(res)
  //           .then(res =>{
  //               dinner(res)
  //               .then(res =>{
  //                   work(res)
  //                   .then(res=>{
  //                       home(res)
  //                       .then(res=>{
  //                           supper(res)
  //                           .then(res=>{
  //                               study(res)
  //                               .then(res=>{
  //                                   homework(res)
  //                                   .then(res=>{
  //                                       sleep(res)
  //                                   })
  //                               })
  //                           })
  //                       })
  //                   })
  //               })
  //           })
  //       })
  //   })
  // })
  
  ////Async/await
// async function workDay(){
//     try {
//         let result = await wakeUp(true);
//         await breakfast(result);
//         await shower(result);
//         await work(result);
//         await dinner(result);
//         await work(result);
//         await home(result);
//         await supper(result);
//         await study(result);
//         await homework(result);
//         await sleep(result);
//     } catch (e){
//         console.log(e)
//     }
// }
// workDay();

//CALLBACK
  function wakeUp(todo,callback){
        setTimeout(()=>{
          if(todo){
              console.log('wakeUp and go to work!');
              callback(null,todo);
          }
          else{
              console.log('all ended before it began');
              callback('oops')
          }
        },1500);
}

function breakfast(todo,callback){
        setTimeout(()=>{
            if(todo === true){
                console.log('need to hurry');
                callback(null,todo);
            }
            else{
                console.log('RIP');
                callback(false,null)
            }

        },1000);
}

function shower(todo,callback){
        setTimeout(()=>{
            if(todo === true) {
                console.log('take a shower');
                callback(null,todo);
            }
            else {
                console.log('RIP');
                callback('false', null);
            }
        },900);
}

function work(todo,callback){
        setTimeout(()=> {
            if (todo === true) {
            console.log('go to work');
            callback(null, todo);
        }
            else {
                console.log('RIP');
                callback('false');
            }
        },800);
}

function dinner(todo,callback){
        setTimeout(()=> {
            if (todo === true) {
            console.log('dinner and relax');
            callback(null,todo);
        }
            else{
                console.log('RIP');
                c
            }
        },1200);
}

function home (todo,callback){
        setTimeout(()=> {
            if (todo === false) {
            console.log('go to home');
            callback(null,todo);
        }
                else {
                console.log('RIP');
                callback('false');
            }
        },850);
}

function supper(todo,callback){
      setTimeout(()=>{
          if(todo === true) {
              console.log('eat some food');
              callback(null,todo);
          }
          else {
                console.log('RIP');
                callback('false');
            }
      },550)

}

function study (todo,callback){
        setTimeout(()=> {
            if (todo === true) {
            console.log('watch lectures from OKTEN');
            callback(null, todo);
        }
              else {
                console.log('RIP');
                callback('false');
            }
    },770)
}

function homework(todo,callback){
        setTimeout(()=> {
            if(todo === true){
            console.log('do some homework and classwork');
            callback(null,todo);
        }
                else {
                console.log('RIP');
                callback('false');
            }
        },1800)
}

function sleep(){
        setTimeout(()=>{
                console.log('go to bed relax and sleep');
        },2000)
}

wakeUp(true,(err,data)=>{
    if(err){
        console.log('RIP')
        return
    }
    breakfast(data,(err,data)=>{
        shower(data,(err,data)=>{
            work(data,(err,data)=>{
                dinner(data,(err,data)=>{
                    home(data,(err,data)=>{
                        supper(data,(err,data)=>{
                            study(data,(err,data)=>{
                                homework(data,(err,data)=>{
                                    if(err){
                                        console.log('Rip');
                                        return
                                    }
                                    sleep();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


