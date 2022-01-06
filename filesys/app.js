// const fs = require('fs');
// fs.writeFileSync('notes.txt','Node js File System Modules');

// //Append text to existing file
// fs.appendFileSync('notes.txt',' Appending to existing file');
// const add = require('./util.js');
// const sum = add(4,2);
// console.log(sum);

const  getNotes = require('./notes');
const msg = getNotes();
console.log(msg);
