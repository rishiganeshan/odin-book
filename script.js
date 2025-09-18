let myLibrary = [];

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("button");
const form = document.querySelector("form");
const body = document.querySelector("body")
const library = document.querySelector(".library-container")


class Book {
    constructor(title, author, pages, haveRead) {
        console.log("yo")
        this.id = crypto.randomUUID()
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;
    }

    toggleReadStatus() {
        if (this.haveRead === "yes") {
            this.haveRead = "no"
        } else {
            this.haveRead = "yes"
        }
    }

}

// let book = new Book(title, author, pages, haveRead);
// console.log(book)



function addBookToLibrary(title, author, pages, haveRead) {
    let book = new Book(title, author, pages, haveRead);
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "JRR Toll", 1234, 'yes')

addBookToLibrary("Harry Potter", "JK Rowling", 2834, 'yes')

addBookToLibrary("Moneyball", "Michael Lewis", 1234, 'yes')

function removeBookFromLibrary(id) {

    myLibrary = myLibrary.filter(b => b.id !== id)


}

function toggleReadStatusFromBookId(id) {
    let book = myLibrary.find(book => book.id === id)
    // console.log(book)
    book.toggleReadStatus()
    
}

function removeBookFromPage(id) {
    const divToRemove = document.querySelector(
        'div[data-book-id=\"' + id +'\"]')
    // console.log(divToRemove)
    library.removeChild(divToRemove)
}




function showBookAtIndex(idx) {
    let book = myLibrary.at(idx)
    // console.log(book)
    const div = document.createElement("div");
    div.setAttribute("data-book-id", book.id)

    const title = document.createElement("div");
    title.textContent = "Title: " + book["title"]
    const author = document.createElement("div");
    author.textContent = "Author: " + book["author"]
    const pages = document.createElement("div");
    pages.textContent = "Number of Pages: " + book["pages"]
    const read = document.createElement("div");
    read.textContent = "Has Been Read: " + book["haveRead"]
    


    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Book"

    removeButton.addEventListener("click", (e) => {

        removeBookFromLibrary(e.target.parentNode.dataset.bookId)
        removeBookFromPage(e.target.parentNode.dataset.bookId)


    });

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Read Status"

    toggleButton.addEventListener("click", (e) => {

        toggleReadStatusFromBookId(e.target.parentNode.dataset.bookId)
        showUpdatedLibrary()

    });

    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(pages)
    div.appendChild(read)



    div.appendChild(removeButton)
    div.appendChild(toggleButton)
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



