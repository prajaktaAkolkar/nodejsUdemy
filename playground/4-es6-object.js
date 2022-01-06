//object Property shorthand
const name = 'Prajakta'
const userAge = 28

const user = {
    name ,
    age : userAge,
    location : 'Boston'
}

console.log(user);

//object destructuring

const product = {
    label :'Notebook',
    price : 200,
    stock : 101,
    salesPrice :undefined,
    rating : 4.2,
}

const {label : productLabel,price,salesPrice,rating=5} = product;
console.log(productLabel);
console.log(price);
console.log(rating);

// const transaction = (type,myproduct)=>{
//  console.log(type,myproduct);
// }
const transaction = (type, {label,stock})=>{
     console.log(type, label,stock)
}
 
transaction('order', product);