const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteBtn = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');

//local storage
//JSON
let notes =[];
localStorage.setItem('notes',JSON.stringify(notes));

function addNotes(){
    let notes = localStorage.getItem('notes');

    if(addText.value ==''){
        alert('Please Add your note');
        return;
    }
    if(notes ===null){
        notes = [];
    }else{
        notes = JSON.parse(notes);
    }
    const noteObj ={
        title: addTitle.value,
        text: addText.value,
    }
    addTitle.value ='';
    addText.value = '';
    notes.push(noteObj);
    localStorage.setItem('notes',JSON.stringify(notes));
    showNotes();
}

function showNotes(){
    let notes = localStorage.getItem('notes');
    let notesHTML = '';
    if(notes ===null){
        return ;
    }else{
        notes = JSON.parse(notes);
    }
    for(let i=0;i<notes.length;i++){
        notesHTML += 
        `<div class="note">
            <button class ="deleteNote" id =${i} onclick="deleteNote(${i})">Delete</button>
            <div class="title"> ${notes[i].title === "" ? 'Note': notes[i].title} </div>
            <div class="text">${notes[i].text} </div>
        </div>`
    }
    // console.log(notes);
    notesDiv.innerHTML = notesHTML;
}

function deleteNote(ind){
    let notes =localStorage.getItem('notes');
    if(notes ===null){
        return;
    }else{
        notes = JSON.parse(notes);
    }

    notes.splice(ind,1);
    localStorage.setItem('notes',JSON.stringify(notes));
    showNotes();

}

addNoteBtn.addEventListener('click',addNotes);








