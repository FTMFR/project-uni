const bookForm = document.getElementById("bookForm");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const bookList = document.querySelector("#bookList tbody");

let books = []; // Array to store books

bookForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
  };

  books.push(newBook); // Add new book to the array

  // Update the book list (implementation depends on your Footer component)
  updateBookList(books); // Replace with your function to update the book list

  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";
});

function updateBookList(bookData) {
  // Clear existing table rows (optional)
  bookList.innerHTML = ""; // This removes existing rows before adding new ones

  for (const book of bookData) {
    const tableRow = document.createElement("tr");
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const yearCell = document.createElement("td");

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    yearCell.textContent = book.year;

    tableRow.appendChild(titleCell);
    tableRow.appendChild(authorCell);
    tableRow.appendChild(yearCell);

    bookList.appendChild(tableRow);
  }
}
