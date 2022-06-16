
class book {
    constructor (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    }
}


let books = new book (title, author, pages);

const error = document.getElementById('error');

// add book button function to store, loop and display
function addBookToLibrary(e){
    e.preventDefault();
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.pages = document.getElementById('pages').value;
    let myLibrary = [];
    myLibrary.push(books);

    if(this.title === ''){
        document.getElementById('error').innerHTML = 'add title'
    }
       
    
//loop
for(let i=0;  i<myLibrary.length; i++){
    let para = document.createElement("li");
    let element = document.getElementById("demo");
    element.appendChild(para);
    para.setAttribute("class", "card");
    para.innerHTML = "Title: " + title + "<br />" + "Author: " + author + "<br />" + "Pages: " + pages;
    
//remove button
    let btn = document.createElement("button");
    btn.setAttribute("class", "butt")
    btn.innerHTML = "Remove";
    para.appendChild(btn);
    btn.onclick = function(){
    para.parentNode.removeChild(para);
    }
    
//read/not read button
    let read = document.createElement("button");
    read.setAttribute("class", "but")
    read.innerHTML = "Read";
    para.appendChild(read);
    read.onclick = function(){
    if(read.innerHTML == "Read"){
    read.innerHTML = "Not Read"
    }else if(read.innerHTML == "Not Read"){
    read.innerHTML = "Read";
    }
    }

//close function to empty inputs
    closeForm();
    myLibrary.pop(); 
    }
    };

//clear input values when add button is pressed
    let btnClear = document.querySelector('.btn');
    let inputs = document.querySelectorAll('input');
    btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
    });

    //pop-up open and close
function openForm() {
    document.getElementById("myForm").style.display = "block";
    }

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    }
