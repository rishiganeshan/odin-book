let myLibrary = [];
addBookToLibrary("The Hobbit", "JRR Toll", 1234, 'yes')

addBookToLibrary("Harry Potter", "JK Rowling", 2834, 'yes')

addBookToLibrary("Moneyball", "Michael Lewis", 1234, 'yes')
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("button");
const form = document.querySelector("form");
const body = document.querySelector("body")
const library = document.querySelector(".library-container")

function Book(title, author, pages, haveRead) {
    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

}

function addBookToLibrary(title, author, pages, haveRead) {
    let book = new Book(title, author, pages, haveRead);
    myLibrary.push(book);
}

function removeBookFromLibrary(id) {

    myLibrary = myLibrary.filter(b => b.id !== id)


}

function removeBookFromPage(id) {
    const divToRemove = document.querySelector(
        'div[data-book-id=\"' + id +'\"]')
    console.log(divToRemove)
    library.removeChild(divToRemove)
}




function showBookAtIndex(idx) {
    let book = myLibrary.at(idx)
    console.log(book)
    const div = document.createElement("div");
    div.setAttribute("data-book-id", book.id)


    for (let prop in book) {
        if (prop === "id") {
            continue;

        }
        const property = document.createElement("div");
        property.textContent = prop;
        div.appendChild(property)

        const propval = document.createElement("div");
        console.log(book[prop])
        propval.textContent = book[prop];
        div.appendChild(propval);


        div.appendChild(document.createElement("br"))



    }

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Book"
    // removeButton.setAttribute("data-book-id", book.id)

    removeButton.addEventListener("click", (e) => {
        // let idOfBookToRemove = book.id;
        // console.log(myLibrary)
        // let newLibrary = myLibrary.filter(b => b.id !== idOfBookToRemove)
        // let myLibrary = newLibrary
        removeBookFromLibrary(e.target.parentNode.dataset.bookId)
        removeBookFromPage(e.target.parentNode.dataset.bookId)

        // redrawBooks();
        // favDialog.showModal();
    });


    div.appendChild(removeButton)
    div.appendChild(document.createElement("br"))
    div.appendChild(document.createElement("br"))

    // console.log(book)
    library.appendChild(div)
}

function showLatestBook() {
    showBookAtIndex(-1)


}

function showUpdatedLibrary() {
    library.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        showBookAtIndex(i)
    }


}



showButton.addEventListener("click", () => {
    favDialog.showModal();
});


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
        formData.get("pages"),
        formData.get("read")
    )

    showLatestBook();
    
    favDialog.close()




});





showUpdatedLibrary()



