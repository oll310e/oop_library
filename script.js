class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  static addBookToList(book) {
    let list = document.querySelector(".bookshelf");
    let row = document.createElement("tr");
    row.classList.add("row");
    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><button class="delete">X</button></td>
          `;

    list.appendChild(row);
  }

  static createBook(form) {
    let title = form.querySelector("#title").value;
    let author = form.querySelector("#author").value;
    let isbn = form.querySelector("#isbn").value;

    if (title === "" || author === "" || isbn === "") {
      alert("Please fill in all parameters");
    } else {
      UI.clearForm(form);
      let newBook = new Book(title, author, isbn);
      UI.addBookToList(newBook);
    }
  }

  static displayBooks() {
    let bookList = [
      { title: "Book One", author: "John Doe", isbn: "13241345" },
      { title: "Book Two", author: "Jane Doe", isbn: "14513454" },
    ];

    bookList.forEach((book) => UI.addBookToList(book));
  }

  static clearForm(form) {
    form.querySelector("#title").value = "";
    form.querySelector("#author").value = "";
    form.querySelector("#isbn").value = "";
  }
}
//display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//add book
document.querySelector(".book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  UI.createBook(e.target);
});

//delete book
document.querySelector(".bookshelf").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
