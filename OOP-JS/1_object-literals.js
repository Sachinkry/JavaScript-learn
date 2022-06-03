// const s = 'Hello';

// console.log(s.toUpperCase()); // HELLO

// const s2 = new String("Hello");
// console.log(typeof s2);       // object

// console.log(window);
// console.log(navigator.appVersion); 
//  it's deprecated

// object literals

const book = {
    title: 'Book One',
    author: 'John Doe',
    year: 1987,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book.getSummary());
console.log(Object.values(book));

