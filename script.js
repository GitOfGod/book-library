const myLibrary = [];

class Book {
    constructor(title, author, pages, haveRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;
    }

    toggleReadStatus() {
        this.haveRead = this.haveRead === "Read" ? "Not read yet" : "Read";
 
    }
}

class Library {
    constructor() {
        this.myLibrary =[];
    }

    addBookToLibrary(title, author, pages, haveRead) {
        const aBook = new Book(title, author, pages, haveRead);
        myLibrary.push(aBook);
        displayAllBooks();
    }
    displayBook(book, index) {
        const bookSection = document.querySelector('.book-section');
            const div = document.createElement('div');
            div.className = "book";
    
            const title = document.createElement('h2');
            const author = document.createElement('p');
            const pages = document.createElement('p');
            const haveRead = document.createElement('p');
            const remove = document.createElement('button');
            const toggleRead = document.createElement('button');
    
            remove.className = 'remove';
            remove.setAttribute('data-index', index);
    
            title.textContent = `Title: ${book.title}`;
            author.textContent = `Author: ${book.author}`;
            pages.textContent =`Pages: ${book.pages}`;
            haveRead.textContent = `Status: ${book.haveRead}`;
            toggleRead.textContent = "Toggle Read Status";
            remove.textContent = 'Remove';
    
    
    
            div.appendChild(title);
            div.appendChild(author);
            div.appendChild(pages);
            div.appendChild(haveRead);
            div.appendChild(remove);
            div.appendChild(toggleRead);
            
            bookSection.appendChild(div);
    
            toggleRead.addEventListener('click', () => {
                book.toggleReadStatus();
                haveRead.textContent = `Status: ${book.haveRead}`;
            })
    
            remove.addEventListener('click', (event) => {
                const bookIndex = event.target.getAttribute('data-index');
                myLibrary.splice(bookIndex,1);
                displayAllBooks();
            });
        }
    
        displayAllBooks() {
            const bookSection = document.querySelector('.book-section');
            bookSection.innerHTML = '';
        
            myLibrary.forEach((book, index) => {
                displayBook(book, index);        
            })
        }


}

document.addEventListener('DOMContentLoaded', () => {
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
    addBookToLibrary("One Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
    addBookToLibrary("Two Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
    addBookToLibrary("Three Hobbit", "J.R.R. Tolkien", 295, "Not read yet");

    const showButton = document.querySelector('#showDialog');
    const formDialog = document.querySelector('#formDialog');
    const closeForm = document.querySelector('#closeForm');
    const confirmBtn = document.querySelector('#confirmBtn');
    const bookForm = document.querySelector('#bookForm');


    showButton.addEventListener('click', () => {
        formDialog.showModal();
    } )

    closeForm.addEventListener('click', () => {
        e.preventDefault();
        formDialog.close();
        bookForm.reset();
    })

    confirmBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const radios = document.querySelectorAll('input[name="read"]');

        let haveRead;
        radios.forEach(radio => {
            if(radio.checked) {
                haveRead = radio.value;
            }
        });

        addBookToLibrary(title, author, pages, haveRead);
        formDialog.close();
        bookForm.reset();
    });

});

