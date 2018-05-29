// All book instances
Book.instances = {};

// The class constructor
function Book(slots)
{
    this.isbn = slots.isbn;
    this.title = slots.title;
    this.year = slots.year;
};

// Loads all books from local storage.
Book.LoadAll = function()
{
    let bookTableJSONString = "";
    try
    {
        // Is the local storage "bookTable" defined?
        if(localStorage["bookTable"])
        {
            // Get the value stored in the local storage "bookTable".
            bookTableJSONString = localStorage["bookTable"];
        }
    }
    catch(exception)
    {
        // Throw an error to the user if there's an exception.
        alert("[Error] Failed to read from Local Storage\n" + exception);
    }
    
    if(bookTableJSONString)
    {
        let bookTable = {};
        let keys = [];

        // Parses JSON string to a map
        bookTable = JSON.parse(bookTableJSONString);

        // Temporarily store the keys for all books
        keys = Object.keys(bookTable);
        console.log(keys.length + " books loaded.");
        
        let key = "";
        for (let index = 0; index < keys.length; index++) {
            key = keys[index];
            Book.instances[key] = new Book(bookTable[key]);
        }
    }
};

/**
 * Saves all books to local storage.
 */
Book.SaveAll = function()
{
    let bookTableJSONString = "";
    
    try
    {
        // Convert all book instances into a JSON formatted string.
        bookTableJSONString = JSON.stringify(Book.instances);

        // Save the JSON string to the local storage.
        localStorage["bookTable"] = bookTableJSONString;

        console.log(Object.keys(Book.instances).length + " books saved.");
    }
    catch(exception)
    {
        // If there's an exception, alert the error message.
        alert("[Error] Failed to write to Local Storage\n" + exception);
    }
};

// Adds a new book.
Book.Add = function(slots)
{
    let book = new Book(slots);
    Book.instances[book.isbn] = book;
    console.log("Book " + slots.isbn + " created!");
};

// Updates a book.
Book.Update = function(slots)
{
    let oldBook = Book.instances[slots.isbn];
    let newBookYear = parseInt(slots.year);

    // Leave the function if the oldBook is null.
    if(!oldBook)
    {
        return;
    }
        
    if(oldBook.title !== slots.title)
    {
        oldBook.title = slots.title;
    }

    if(parseInt(oldBook.year) !== newBookYear)
    {
        oldBook.year = slots.year;
    }

    console.log("Book " + slots.isbn + " modified!");
};

// Removes a book with specified ISBN.
Book.Destroy = function(isbn)
{
    if(Book.instances[isbn])
    {
        delete Book.instances[isbn];
        console.log("Book " + isbn + " has been deleted.");
    }
    else
    {
        console.log("There is no book with ISBN " + isbn + " in the database!");
    }
};

/* Database */
/**
 *  Creates some books for testing.
 */
Book.CreateTestData = function()
{
    Book.LoadAll();
    
    let book1Record = {isbn: "006251587X", title: "The Queen of Pluto", year: 1940};
    let book2Record = {isbn: "0465026567", title: "The King of Pluto", year: 1942};
    let book3Record = {isbn: "0465030793", title: "The End of Pluto", year: 1970};

    Book.instances[book1Record.isbn] = new Book(book1Record);
    Book.instances[book2Record.isbn] = new Book(book2Record);
    Book.instances[book3Record.isbn] = new Book(book3Record);

    Book.SaveAll();
};

// Wipes the local storage for books.
// A confirm box will pop up.
Book.ClearData = function()
{
    if(confirm("Do you really want to delete all book data?"))
    {
        localStorage["bookTable"] = "{}";
    }
};