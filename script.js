

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

class Library {
    constructor() {
        this.bookList = []
    }
    
    addBookToLibrary(title, author, pages, haveRead) {
        let book = new Book(title, author, pages, haveRead);
        this.bookList.push(book);
    }

    removeBookFromLibrary(id) {

        this.bookList = this.bookList.filter(b => b.id !== id)
   
    }

    getList() {
        return this.bookList
    }

    getLength() {
        return this.bookList.length
    }

    getBookAtIdx(i) {
        return this.bookList.at(i)
    }

    addBook(title, author, pages, haveRead) {
        let book = new Book(title, author, pages, haveRead);
        this.bookList.push(book)
    }
    toggleReadStatusFromBookId(id) {
        let book = this.bookList.find(book => book.id === id)
        // console.log(book)
        book.toggleReadStatus()

    }
}

// let book = new Book(title, author, pages, haveRead);
// console.log(book)

myLibrary = new Library()





myLibrary.addBook("The Hobbit", "JRR Toll", 1234, 'yes')

myLibrary.addBook("Harry Potter", "JK Rowling", 2834, 'yes')

myLibrary.addBook("Moneyball", "Michael Lewis", 1234, 'yes')





function removeBookFromPage(id) {
    const divToRemove = document.querySelector(
        'div[data-book-id=\"' + id +'\"]')
    // console.log(divToRemove)
    library.removeChild(divToRemove)
}




function showBookAtIndex(idx) {
    let book = myLibrary.getBookAtIdx(idx)
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

        myLibrary.removeBookFromLibrary(e.target.parentNode.dataset.bookId)
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
    for (let i = 0; i < myLibrary.getLength(); i++) {
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

    myLibrary.addBookToLibrary(formData.get("title"), 
        formData.get("author"),
        formData.get("pages"),
        formData.get("read")
    )

    showLatestBook();
    
    favDialog.close()




});





showUpdatedLibrary()



