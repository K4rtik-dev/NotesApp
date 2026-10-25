const notebox = document.querySelector(".note-box");
const createbtn = document.querySelector(".createbtn");
const deletebtn = document.querySelector(".delete");
const notescontainer = document.querySelector(".notes-container");
const notelist = document.querySelector(".note-list");

function updateStorage(){
    localStorage.setItem("notes",notelist.innerHTML);
}
function shownote(){
    let savednote=localStorage.getItem("notes");
    if(savednote){
        notelist.innerHTML=savednote;
    }
}
shownote()

function createp() {
    let p = document.createElement("p");
    p.setAttribute("contenteditable","true");
    p.classList.add("note-box");
    notelist.appendChild(p);
    let delimg = document.createElement("img");
    delimg.src="/Images/trash.png";
    delimg.classList.add('delete');
    p.appendChild(delimg);
    updateStorage()
}

createbtn.addEventListener('click',()=>{
    createp();
})
notescontainer.addEventListener('click',(e)=>{
    if (e.target.classList.contains("delete")){
        e.target.parentElement.remove()
        updateStorage()
    }
})
notelist.addEventListener("input", () => {
    updateStorage();
});
localStorage.clear()