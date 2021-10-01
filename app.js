const fs=require("fs");
const yargs = require('yargs');
const notes= require("./notes.js");
yargs.version("1.1.0");

// Create add Command
yargs.command({
command:"add",
describe:"add a new note",
builder:{
    title:{
        describe:"note title",
        demandOption:true,
        type:"string"
    },
    body:{
        describe:"note body",
        demandOption:true,
        type:"string"
    }
},
handler:function(argv){
    notes.addNote(argv.title,argv.body)
}
});

// Create remove Command
yargs.command({
    command:"remove",
    describe:"remove a note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title);
    }
    });

// Create list Command
yargs.command({
    command:"list",
    describe:"list all notes",
    handler:()=>{
        notes.listNotes();
    }
    });

// Create read Command
yargs.command({
    command:"read",
    describe:"read a note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        notes.readNotes(argv.title)
    }
    });

    


yargs.parse();