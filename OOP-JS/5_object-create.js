// Object of Protos

const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;

        return `${this.title} was written ${years} years ago`;
    }
}

// create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2018';

console.log(book1);