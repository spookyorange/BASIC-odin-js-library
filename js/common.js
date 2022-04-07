let library = []; 

function Book(name, pageCount, author) {
  this.name = name;
  this.pageCount = pageCount;
  this.author = author;
}

function addBookToLibrary(book) {
  library.push(book);
}


const book1 = new Book('Brave New World', 300, 'Aldous Huxley');
const book2 = new Book('Thus Said Zarathustra', 270, 'Friedrich Nietzsche');
const book3 = new Book('Us', 200, 'Yevgeni Zamyatin');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


const booksTable = document.querySelector('#books-table')

library.forEach(book => {
  let tableRow = document.createElement('tr');
  tableRow = booksTable.insertRow(-1);
  bookName = tableRow.insertCell([0]);
  pageCount = tableRow.insertCell([1]);
  author = tableRow.insertCell([2]);

  bookName.textContent = book.name
  pageCount.innerHTML = book.pageCount
  author.textContent = book.author
});