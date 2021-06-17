console.log('welcome to dexter page');


/*
const book1 = {
    title: 'Going Home',
    author: 'John Kwame',
    date: '2017-01-01',
    tel: '0543460633',
    getSummary : function(){
        return `${this.title} was written by ${this.author} on ${this.date}. Feel free 
        to contact him on ${this.tel}`;
    }
};

*/


//oop approach

function Book (title, author, year){
    this.title = title,
    this.author = author;
    this.year = year;
};

//function prototype
Book.prototype.getSummary = function(){
    return `${this.title} was written in the year ${this.year} by ${this.author}`
};

//lets get the age of the book
Book.prototype.getAge = function(){
    const age = new Date().getFullYear - this.year;
    return age;
}


//object instantiation
const book1 = new Book("No Sweetness here", "Jon Kwame", '2015');


console.log(book1.getSummary());
console.log(book1.getAge());