const myBooks = [
  { id: 1, title: "HTML", price: 100 },
  { id: 2, title: "CSS", price: 100 },
  { id: 3, title: "JS", price: 100 },
  { id: 4, title: "React", price: 100 },
];

function storeBooks() {
  console.log("my local ", myBooks);
  localStorage.setItem("myBooks", JSON.stringify(myBooks));
}
storeBooks();

// ////////////////////////////////////////////////
const tableBody = document.getElementById("tableBody");
let filteredBooks = JSON.parse(localStorage.getItem("myBooks"));
function renderBooksTable() {
  console.log("my filtered", filteredBooks);
  filteredBooks.forEach((eachBook) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
          <td>${eachBook.id}</td>
          <td>${eachBook.title}</td>
          <td>${eachBook.price}</td>
  `;
    tableBody.appendChild(tableRow);
  });
}
renderBooksTable();
// /////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////
function filterBooks() {
  const myInputValue = document.getElementById("search").value;
  filteredBooks = myBooks.filter((eachBook) =>
    eachBook.title.toLowerCase().includes(myInputValue.toLowerCase())
  );
  tableBody.innerHTML = "";
  renderBooksTable();
}

// ///////////////////////////////////////////////////
const myButton = document.getElementById("searchButton");
myButton.addEventListener("click", filterBooks);

const myCheck = document.getElementById("checkBox");
function mytempFunction() {
  if (myCheck.checked) {
    addBookForm.setAttribute("class", "add-form");
  } else {
    addBookForm.setAttribute("class", "hide");
  }
}
// ////////////////////////////////////////////////////////

const addBookForm = document.getElementById("addBookForm");

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  myBooks.push({
    id: myBooks.length + 1,
    title,
    price,
  });

  tableBody.innerHTML = "";
  storeBooks();
  filteredBooks = JSON.parse(localStorage.getItem("myBooks"));
  renderBooksTable();
});
