publicLibrary.view.listBooks =
{
    SetupUserInterface: function()
    {
        let tableBodyElement = document.querySelector("table#books>tbody");
        let keys = [];

        // Load all book objects
        if(Object.keys(Book.instances).length == 0)
        {
            Book.LoadAll();
        }
        
        keys = Object.keys(Book.instances);

        // For each book, create a table row with a cell for each attribute
        let row = {};
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            const bookInstance = Book.instances[key];

            row = tableBodyElement.insertRow();
            row.insertCell(-1).textContent = bookInstance.isbn;
            row.insertCell(-1).textContent = bookInstance.title;
            row.insertCell(-1).textContent = bookInstance.year;
        }
    }
};