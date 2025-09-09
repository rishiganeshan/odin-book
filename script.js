const myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;

}

function addBookToLibrary(title, author, numberOfPages, haveRead) {
    let book = new Book(title, author, numberOfPages, haveRead);
    myLibrary.push(book);
}


const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("button");
const form = document.querySelector("form");

showButton.addEventListener("click", () => {
    favDialog.showModal();
});

favDialog.addEventListener("close", (e) => {
    outputBox.value =
        favDialog.returnValue === "default"
            ? "No return value."
            : `ReturnValue: ${favDialog.returnValue}.`; 
});

// confirmBtn.addEventListener("click", (event) => {
//     event.preventDefault(); 
//     favDialog.close(selectEl.value);
// });





form.addEventListener("submit", (e) => {
    // ...or iterate through the name-value pairs
    e.preventDefault();

    var formData = new FormData(form);

    console.log(formData.get("title"))
    for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }

    addBookToLibrary(formData.get("title"), 
        formData.get("author"),
        formData.get("numberOfPages"),
        formData.get("haveRead")
    )
    let book = myLibrary.at(-1)
    const div = document.createElement("div");

    for (let prop in book) {
        const property = document.createElement("div");
        property.textContent = prop;
        div.appendChild(property)

        const propval = document.createElement("div");
        console.log(book[prop])
        propval.textContent = book[prop];
        div.appendChild(propval);


        div.appendChild(document.createElement("br"))



    }
    div.appendChild(document.createElement("br"))
    div.appendChild(document.createElement("br"))

    // console.log(book)
    body.appendChild(div)



});

















addBookToLibrary("The Hobbit", "JRR Toll", 1234, true)
addBookToLibrary("Harry Potter", "JK Rowling", 2834, true)
addBookToLibrary("Moneyball", "Michael Lewis", 1234, true)

console.log(myLibrary)

const body = document.querySelector("body")

console.log(myLibrary[1].title)


for (let i=0; i < myLibrary.length; i++) {
    let book = myLibrary[i]
    const div = document.createElement("div");

    for (let prop in book) {
        const property = document.createElement("div");
        property.textContent = prop;
        div.appendChild(property)

        const propval = document.createElement("div");
        console.log(book[prop])
        propval.textContent = book[prop];
        div.appendChild(propval);


        div.appendChild(document.createElement("br"))



    }
    div.appendChild(document.createElement("br"))
    div.appendChild(document.createElement("br"))

    // console.log(book)
    body.appendChild(div)
}