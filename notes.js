const fs=require("fs");
const chalk=require("chalk");

const addNote=(title,body)=>{
const notes=loadNotes();
const duplicateNotes=notes.filter((note)=>{
return note.title===title
});
if(duplicateNotes.length===0){
    notes.push({
        title,body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New Note Created!"));
}else{
    console.log(chalk.red.inverse("Title Already Taken!"));
}
}
const removeNote=(title)=>{
 const notes= loadNotes();
 const notesToKeep=notes.filter(note=>{
return note.title!==title;
 });
 if(notes.length > notesToKeep.length){
console.log(chalk.green.inverse("Note Removed!"));
saveNotes(notesToKeep);
 }else{
    console.log(chalk.red.inverse("Note not Found!"));
 }
}

const saveNotes=(notes)=>{
const dataJSON=JSON.stringify(notes);
fs.writeFileSync("./notes.json",dataJSON);
}

const loadNotes=()=>{
    try {
        const dataBuffer=fs.readFileSync("./notes.json");
const dataJSON=dataBuffer.toString();
return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const listNotes=()=>{
    const notes= loadNotes();
console.log(chalk.blue.inverse("Your Notes:"));
notes.forEach(note=>{
    console.log(note.title);
})
}

const readNotes=(title)=>{
    const notes= loadNotes();
    const readNote=notes.find(note=>{
        return note.title===title;
    });
    console.log(chalk.yellow.inverse("List"));
    console.log(readNote.body);
}

module.exports={
    addNote,
    removeNote,
    listNotes,
    readNotes
}