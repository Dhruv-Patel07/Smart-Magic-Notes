showNotes();

let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
     let addTxt=document.getElementById("addTxt");
     let addTitle=document.getElementById("addTitle");
     let notes =localStorage.getItem('notes');
     if (notes==null){
         notesObj=[];
     }
     else {
         notesObj=JSON.parse(notes);
     }

     let myObj={
         title:addTitle.value,
         text:addTxt.value
     }
     notesObj.push(myObj);
     localStorage.setItem("notes",JSON.stringify(notesObj));
     addTxt.value="";
     addTitle.value="";
     //console.log(notesObj);
     showNotes();
});

function showNotes(){
    let notes =localStorage.getItem('notes');
    if (notes==null){
        notesObj=[];
    }
    else {
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html+=
        `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">
            ${element.text}
            </p>
            <button id="${index}"
            onclick="deleteNote(this.id)" class="btn btn-primary" id="a4" style="color:white;" onMouseOver="this.style.backgroundColor='rgb(45, 203, 198)'"
            onMouseOut="this.style.backgroundColor='blue'">Delete Note</button>
        </div>

    </div>
        `;    
    });
    let notesElm=document.getElementById("notes");
    if (notesObj.length != 0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to Show Here ! Use "Add a Note" section above to  add notes `
    }
}

function deleteNote(index){
    //console.log("I am Deleting a Note",index);
    let notes =localStorage.getItem('notes');
    if (notes==null){
        notesObj=[];
    }
    else {
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

function Owner(){
    document.getElementById("Owner").innerHTML=`<h2>Made By Dhruv </h2>`
}

let search=document.getElementById('searchTxt');

search.addEventListener("input",function(){

    let inputval=search.value.toLowerCase();
    //console.log("Search a Note You Want Input Event Fired !",inputval);
    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(e){
        let cardTxt=e.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval)){
            e.style.display="block";
        }
        else{
            e.style.display="none";
        }
        //console.log(cardTxt);

    });

})