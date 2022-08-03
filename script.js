function book(title, author, pages, read) {
            
    this.title = `Your book: ${title}`
    this.author = `By: ${author}`
    this.pages = `Pages: ${pages}`
    this.read = ` Reading status: ${read}`
    this.info = function() {
        
    }
}
const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', '295', 'Not read yet');
let library = [];
let i = 0;

let leftbtn = document.querySelector('#left');
let output = document.querySelector('#output');
let rightbtn = document.querySelector('#right');
let newbtn = document.querySelector('#new');

let title = document.querySelector('#name');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');

let addbtn = document.querySelector('#add');
let del = document.querySelector('#del');
let number = document.querySelector('#number');
let edit = document.querySelector('#edit');
let update = document.querySelector('#update')

newbtn.addEventListener('click', () => {
    const form = document.getElementById('form');
  
    if (form.style.display === 'none') {
     
      form.style.display = 'block';
    } else {
      
      form.style.display = 'none';
    }
  }); 
const formt = document.getElementById('form2');
edit.addEventListener('click', () => {
    
  
    if (formt.style.display === 'none') {
     
      formt.style.display = 'block';
    } else {
      
      formt.style.display = 'none';
    }
  }); 


library.push(theHobbit);
output.innerHTML = `${library[0].title} <br> 
${library[0].author}  <br>
${library[0].pages}  <br>
${library[0].read}`; 

addbtn.addEventListener('click', addbook);
function addbook() {
let read = document.querySelector('input[name=read]:checked');
const boek = new book(title.value, author.value, pages.value, read.value);
if (library.length < 1) {
    --i;
}

library.push(boek);
document.bkform.reset();
form.style.display = 'none';
rightbtn.disabled = false;
number.innerHTML = `${+i + 1}/${library.length}`

}

update.addEventListener('click', newval)
function newval() {
    let red = document.querySelector('input[name=readnew]:checked');
    library[i].read = red.value
    output.innerHTML = `${library[0].title} <br> 
    ${library[0].author}  <br>
    ${library[0].pages}  <br>
    ${library[0].read}`;
    formt.style.display = 'none';
}
if (i < 1) {
    leftbtn.disabled = true;
}
if (library.length < 2) {
    rightbtn.disabled = true;
}


rightbtn.addEventListener('click', next);
function next() {
    document.querySelector('#output').innerHTML = `${library[i + 1].title} <br> 
    ${library[i + 1].author}  <br>
    ${library[i + 1].pages}  <br>
    ${library[i + 1].read}`
    i++;
    if (i == library.length - 1) {
        rightbtn.disabled = true;
    }
    leftbtn.disabled = false;
    if (library.length < 2) {
        leftbtn.disabled = true;
    }
    number.innerHTML = `${+i + 1}/${library.length}`;
    
}
leftbtn.addEventListener('click', prev);
function prev() {
    document.querySelector('#output').innerHTML = `${library[i - 1].title} <br> 
    ${library[i - 1].author}  <br>
    ${library[i - 1].pages}  <br>
    ${library[i - 1].read}`;
    i--;
    if (i < 1) {
        leftbtn.disabled = true;
    }
    rightbtn.disabled = false;
    number.innerHTML = `${+i + 1}/${library.length}`;

}
del.addEventListener('click', dele);

function dele() {
    if (i === 0 && library.length === 1) {
    output.innerHTML = 'There aren\'t any books in your collection! <br> Click + to add a new book'
rightbtn.disabled = true;
}
    library.splice(i, 1);
    if (i > 0) {
        prev();
    }
    if (i === 0 && library.length > 1) {
        output.innerHTML = `${library[0].title} <br> 
        ${library[0].author}  <br>
        ${library[0].pages}  <br>
        ${library[0].read}`;
        
    }
    number.innerHTML = `${+i + 1}/${library.length}`;
    if (library.length < 2) {
    rightbtn.disabled = true;
}
}

