import Book from './book.js';
import StoreBook from './store.js';
import UI from './ui.js';
import { DateTime } from './luxon.js';
// event for adding new books(using form Id)
document.getElementById('book-submit').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const bookId = document.getElementById('bookId').value;
  e.preventDefault();

  // validate
  if (title === '' || author === '' || bookId === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    const newBook = new Book(title, author, bookId);
    // add book to UI
    UI.addNewBook(newBook);

    // add book to store
    StoreBook.addBook(newBook);

    // clear all input field after the submit
    UI.clearField();

    // show alert
    UI.showAlert('Book added', 'success');
  }
});

// event: remove the book form the list
document.getElementById('new-book-list').addEventListener('click', (e) => {
  UI.removeBook(e.target);
  StoreBook.removeBook(e.target);
  UI.showAlert('Book Deleted', 'success');
});

// event for display books
document.addEventListener('DOMContentLoaded', UI.displayBook);

// live date and time
const localDate = document.getElementById('date-time');
const liveDateAndTime = () => {
  const now = DateTime.local();
  const formatted = now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  localDate.innerHTML = formatted;
};
liveDateAndTime();
setInterval(liveDateAndTime, 1000);
