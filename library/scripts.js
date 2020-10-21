let myLibrary = [];

const newBookButton = document.querySelector('#new-book');
newBookButton.addEventListener('click', toggleFormVisibility);

const submitBookButton = document.querySelector('#submit-book');
submitBookButton.addEventListener('click', handleSubmit);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () =>
    console.log(
      `${this.title} by ${this.author}, ${this.pages}, ${
        this.read ? 'have read' : 'have not read'
      }.`
    );
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function clearForm(form) {
  form.title.value = '';
  form.author.value = '';
  form.pages.value = '';
  form.read.checked = false;
}

function handleSubmit(e) {
  e.preventDefault();
  const form = document.querySelector('form');
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const read = form.read.checked;
  addBookToLibrary(title, author, pages, read);
  toggleFormVisibility();
  clearForm(form);
  render();
}

function toggleFormVisibility() {
  const form = document.querySelector('form');
  form.classList.toggle('visible');
}

function render() {
  const ul = document.querySelector('ul');
  ul.textContent = ''; // QUICK AND UGLY WAY TO CLEAR FORM

  myLibrary.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${
      book.read ? 'have read' : 'have not read'
    }.`;
    ul.appendChild(li);
  });
}

addBookToLibrary('The Hobbit', 'JRR Tolkien', 654, true);
addBookToLibrary('Dune', 'Frank Herbert', 435, true);
addBookToLibrary('Foundation', 'Issac Asimov', 345, true);

render();
