setTimeout(()=>{
    console.log("Two seconds Up")
},2000);

const names = ['Andrew','Jet','Jess']
const shortNames =names.filter((name)=>{
   return name.length <= 4;
})

console.log(shortNames);


const add =(a,b, callback)=>{
   setTimeout(()=>{
       callback(a + b)
   }, 2000)
}

add(1,4,(sum)=>{
    console.log(sum)
})