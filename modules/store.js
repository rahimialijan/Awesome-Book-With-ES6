// localStorage class

class StoreBook {
  static getBook() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = StoreBook.getBook();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(book) {
    const books = StoreBook.getBook();
    books.splice(books.indexOf(book), 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default StoreBook;