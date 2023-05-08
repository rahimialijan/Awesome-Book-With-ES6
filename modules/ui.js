import StoreBook from './store.js';

// UI Class:
class UI {
  static displayBook() {
    const books = StoreBook.getBook();
    books.forEach((book) => UI.addNewBook(book));
  }

  static addNewBook(book) {
    const list = document.getElementById('new-book-list');
    const tableRow = document.createElement('tr');

    tableRow.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.bookId}</td>
          <td> <a class="btn btn-danger btn-sm delete">X</a></td>
          `;
    list.appendChild(tableRow);
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `w-50 alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const addBook = document.querySelector('#book-submit');
    addBook.insertBefore(div, addBook.firstChild);
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }

  // clear field method
  static clearField() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('bookId').value = '';
  }

  // remove book from list
  static removeBook(targetElement) {
    if (targetElement.classList.contains('delete')) {
      targetElement.parentElement.parentElement.remove();
    }
  }
}

// Navigation page
const list = document.querySelector('.list-page');
const addNew = document.querySelector('.add-page');
const contactPage = document.querySelector('.contact-page');
const listSection = document.getElementById('book-list');
const addSection = document.getElementById('add-book');
const contactSection = document.getElementById('contact');

addSection.style.display = 'none';
contactSection.style.display = 'none';
listSection.style.display = 'block';

list.addEventListener('click', () => {
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
  listSection.style.display = 'block';
});

addNew.addEventListener('click', () => {
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
  listSection.style.display = 'none';
});

contactPage.addEventListener('click', () => {
  addSection.style.display = 'none';
  contactSection.style.display = 'block';
  listSection.style.display = 'none';
});
export default UI;