const books = [
  {
    isbn: '48568915',
    title: 'Bilbo Baggins book',
    author: 'Lebron James',
  },

  {
    isbn: '47474747',
    title: 'Bilbo Baggins book',
    author: 'Lebron James',
  },

  {
    isbn: '47567567',
    title: 'Harry Potter',
    author: 'JJ Tolkien',
  },
];

console.log('Array  of Books:', books);
console.log('Type of Books Array:', typeof books);

const booksJSON = JSON.stringify(books);

console.log('booksJSON:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

const studentJSON = { id: 1, name: 'Jeff Jefferson' };
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

const student = JSON.parse(studentJSON);

console.log('student:', student);
console.log('typeof student:', typeof student);
