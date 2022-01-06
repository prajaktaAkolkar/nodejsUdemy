// const doWorkPromises = new Promise((resolve,reject)=>{
//  setTimeout(() => {
//      resolve([4,5,6])
//      reject('Things get wrong')
//  }, 2000);
// })

// doWorkPromises.then((result)=>{
//     console.log('success',result);
// }).catch((error)=>{
// console.log('Error!!!',error)
// })

const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        resolve (a+b)
    })
}

// add(1,2).then((sum)=>{
//     console.log(sum)
//     add(sum,5).then((sum2)=>{
// console.log(sum2)
//     }).catch((e)=>{
//   console.log(e)
//     })
// }).catch((e)=>{
// console.log(e)
// })

//Promise chaining
add(1,1).then((sum)=>{
    console.log(sum);
   return add(sum,6)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(e)
})