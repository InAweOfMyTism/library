const newBookBtn = document.getElementById('new_book_btn');
const newBookForm = document.querySelector('.new_book_form');
const submitBtn = document.getElementById('submit_btn');
const bookShelf= document.querySelector('.bookshelf')

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        console.log(`${this.title}, by ${this.author}, ${this.pages} pages long`);
        if(this.hasRead){
            console.log(`I have read this book`);
        } else {
            console.log(`I have NOT read this book`)
        }
    }
}

function Library(){
    this.bookList = [];
    this.addBookToLibrary = function(newBook) {
        this.bookList.push(newBook)
    };
    this.displayBookList = function() {
        console.log(this.bookList);
    };
}

const myLibrary = new Library();

newBookBtn.addEventListener('click', ()=>{
    const newTitle = document.getElementById('new_title');
    const newAuthor = document.getElementById('new_author');
    const newPages = document.getElementById('new_pages');
    const newHasRead = document.getElementById('new_has_read');

    newTitle.value = '';
    newAuthor.value = '';
    newPages.value = '';
    newHasRead.checked = false;

    newBookForm.style.visibility = 'visible';
});

submitBtn.addEventListener('click', ()=>{

    const newTitle = document.getElementById('new_title');
    const newAuthor = document.getElementById('new_author');
    const newPages = document.getElementById('new_pages');
    const newHasRead = document.getElementById('new_has_read');

    console.log(`Has read value: ${newHasRead.value}`)

    const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newHasRead.checked);

    myLibrary.addBookToLibrary(newBook);
    myLibrary.displayBookList();

    const newBookDisplay = document.createElement('div');
    newBookDisplay.classList.add('book');
    const newDisplayTitle = document.createElement('h2');
    const newDisplayAuthor = document.createElement('h3');
    const newDisplayPages = document.createElement('h3');
    const newDisplayHasRead = document.createElement('h3');
    newDisplayTitle.innerText = `${newBook.title}`;
    newDisplayAuthor.innerText = `Written by ${newBook.author}`;
    newDisplayPages.innerText = `${newBook.pages} pages`;
    if (newBook.hasRead) {
        newDisplayHasRead.innerText = `I have read this book`;
    } else {
        newDisplayHasRead.innerText = `I have NOT read this book (yet)`;
    }
    newBookDisplay.appendChild(newDisplayTitle);
    newBookDisplay.appendChild(newDisplayAuthor);
    newBookDisplay.appendChild(newDisplayPages);
    newBookDisplay.appendChild(newDisplayHasRead);
    bookShelf.appendChild(newBookDisplay);

    newBookForm.style.visibility = 'hidden';
});