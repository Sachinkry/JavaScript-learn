
function Book(title, author, year) {
    // console.log('Book Initialized..');

    this.title = title;
    this.author = author;
    this.year = year;

};

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} was written ${years} years ago`;
}

// change year /revised
Book.prototype.revisedYear = function (newYear) {
    this.year = newYear;
    this.revised = true;
    return `Revised Year: ${this.year}`
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'John Doe', '2016');

console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book1.revisedYear(2021));
console.log(book1);

