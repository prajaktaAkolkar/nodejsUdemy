const add =(a,b)=>{
    return new Promise((resolve,reject) =>{
     resolve(a+b)
    })
}

const doWork = async()=>{
    const sum = await add(1,99);
    const sum1 = await add(sum,50);
    const sum2 = await add(sum1,60);
   return sum,sum1,sum2;
   
}
doWork().then((result)=>{
    console.log('result', result)
}).catch((e)=>{
    console.log('e',e)
});