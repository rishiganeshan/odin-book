const myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
    // the constructor...

}

function addBookToLibrary(title, author, numberOfPages, haveRead) {
    // take params, create a book then store it in the array
    let book = new Book(title, author, numberOfPages, haveRead);
    myLibrary.push(book);
}



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