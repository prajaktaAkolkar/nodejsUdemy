//const fs = require('fs');
//fs.writeFileSync('notes.txt','Node js File System Modules');

// //Append text to existing file
// fs.appendFileSync('notes.txt',' Appending to existing file');
// const add = require('./util.js');
// const sum = add(4,2);
// console.log(sum);

const  getNotes = require('./notes');
const msg = getNotes();
console.log(msg);

const validator = require('validator');
console.log(validator.isEmail('prajakta@gmail.com'));

const chalk = require('chalk');
const chalkGreen = chalk.green.bold('Success!!');
console.log(chalkGreen);

console.log(process.argv[2]);

const command = process.argv[2];

if(command === 'add')
{
    console.log('Adding Note');
}
else if(command==='remove')

{
    console.log('Removing ');
}


const yargs = require('yargs');
console.log(yargs.argv);

//create add,remove,read,list command using yargs
//create add command
yargs.command({
    command :'add',
    describe : 'Add a new command',
    handler: function(){
        console.log('Add a new command console')
    }
})

yargs.command({
    command : 'remove',
    describe : 'remove command',
    handler: function(){
        console.log('Remove command!!')
    }
})

yargs.command({
    command : 'list',
    describe : 'List command',
    handler : function(){
        console.log('handler Command!!')
    }
})

yargs.command({
    command : 'Read',
    describe : 'Read Command',
    builder : {
       title : {
           describe : 'Note Title',
           demandOption : true,
           type :'string'
       },
       body : {
           describe : 'Note Body',
           demandOption : true,
           type :'string'
       }
    },
    handler : function(argv){
        console.log('Title:', + argv.title);
        console.log('Body' , + argv.body);
    }
})
console.log(yargs.argv);
