function Promise(fn){
  let status = 'pending'
  function successNotify(){
      status = 'resolved'
      toDoThen.apply(undefined, arguments)
  }
  function failNotify(){
      status = 'rejected'
      toDoThen.apply(undefined, arguments)
  }
  function toDoThen(){
      setTimeout(()=>{ // 保證回調函數是異步
          if(status === 'resolved'){
              for(let i =0; i< successArray.length;i ++)    {
                  successArray[i].apply(undefined, arguments)
              }
          }else if(status === 'rejected'){
              for(let i =0; i< failArray.length;i ++)    {
                  failArray[i].apply(undefined, arguments)
              }
          }
      })

  }
  let successArray = []
  let failArray = []
  fn.call(undefined, successNotify, failNotify)
  return {
      then: function(successFn, failFn){
          successArray.push(successFn)
          failArray.push(failFn)
          return undefined // 簡化只做一層 then
      }
  }
}

let random_boolean = Math.random() >= 0.5
let promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(random_boolean){
      resolve(101)
    }else{
      reject('x')
    }
  }, 3000)
})
promise.then((data)=>{
  console.log(data)  // 如果成功三秒後打印 101
},(err)=>{
  console.log(err)  // 如果失敗三打印 x
})
