publicLibrary.view.home =
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
            row.insertCell(-1).innerHTML = bookInstance.year;
            row.insertCell(-1).innerHTML = '<button type="button" onclick="ShowEditModal(true, \'' + bookInstance.isbn + '\')" class="btn btn-blue">Edit</button>' + '<button type="button" onclick="Book.Destroy(\'' + bookInstance.isbn + '\'); HandleDeleteButton(\'' + bookInstance.isbn + '\')" class="btn btn-red">Delete</button>';
        }
    },

    HandleDeleteButton: function(isbn)
    {
        // Remove table row
    }
};