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
wakeUp(true)
    .then(res=>breakfast(res)
        .then(res=>shower(res)
            .then(res=>work(res)
                .then(res=>dinner(res)
                    .then(res=>work(res)
                        .then(res=>home(res)
                            .then(res=>supper(res)
                                .then(res=>study(res)
                                    .then(res=>homework(res)
                                        .then(res=>sleep(res)))))))))))
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
              callback(todo);
          }
          else{
              console.log('all ended before it began');
          }
        },1500);
}

function breakfast(callback){
        setTimeout(()=>{
                console.log('need to hurry');
                callback();
        },1000);
}

function shower(callback){
        setTimeout(()=>{
                console.log('take a shower');
                callback();
        },900);
}

function work(callback){
        setTimeout(()=>{
                console.log('go to work');
                callback();
        },800);
}

function dinner(callback){
        setTimeout(()=>{
                console.log('dinner and relax');
                callback();
        },1200);
}

function home (callback){
        setTimeout(()=>{
                console.log('go to home');
                callback();
        },850);
}

function supper(callback){
      setTimeout(()=>{
              console.log('eat some food');
              callback();
      },550)

}

function study (callback){
        setTimeout(()=>{
              console.log('watch lectures from OKTEN');
              callback();
    },770)
}

function homework(callback){
        setTimeout(()=>{
                console.log('do some homework and classwork');
                callback();
        },1800)
}

function sleep(){
        setTimeout(()=>{
                console.log('go to bed relax and sleep');
        },2000)
}

wakeUp(true,()=>{
    breakfast(()=>{
        shower(()=>{
            work(()=>{
                dinner(()=>{
                    home(()=>{
                        supper(()=>{
                            study(()=>{
                                homework(()=>{
                                    sleep();
                                });
                            });
                        });
                    });
                });
            });
        });
    })});
