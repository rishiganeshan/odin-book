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
const confirmBtn = favDialog.querySelector("button");
const form = document.querySelector("form");

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
const body = document.querySelector("body")



addBookToLibrary("The Hobbit", "JRR Toll", 1234, 'yes')
showLatestBook()

addBookToLibrary("Harry Potter", "JK Rowling", 2834, 'yes')
showLatestBook()

addBookToLibrary("Moneyball", "Michael Lewis", 1234, 'yes')
showLatestBook()


function showLatestBook() {
    let book = myLibrary.at(-1)
    console.log(book)
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
