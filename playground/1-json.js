const fs = require('fs');
// const book = {
//     title : "Ego is the Enemy",
//     author :'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// fs.writeFileSync('1-json.json',bookJSON);
// const parseData = JSON.parse(bookJSON);
// console.log(parseData.title);

const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer.toString());

const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.title);
console.log(data.author);