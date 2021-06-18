//book class: this represents a book and instantiate anytime we add a book
class Book{
    constructor( title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


//UI Class: handles UI tasks
class UI{
    static displayBooks(){
        const StoreBooks = [
            {
                title: 'Book One',
                author: 'Jon Dexter',
                isbn: '3434434',
            },
            {
                title: 'Book Two',
                author: 'Jane Mensah',
                isbn: '4568923'
            }
        ];

        const books = StoreBooks;

        books.forEach( function(book){
            UI.addBookToList(book);
        });

        
    }
    static  addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);

    }
}

//Storage Class:  store in the browser

//Events: display book
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Event:  add a book
document.querySelector("#book-form").addEventListener("submit", function(e){
    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);
    console.log(book);
})

//Event: remove a book