publicLibrary.view.deleteBook =
{
    SetupUserInterface: function()
    {
        let deleteButton = document.forms['book'].commit;
        let selectElement = document.forms['book'].selectBook;
        let keys = [], book = null, optionEl = null;

        Book.LoadAll();

        keys = Object.keys(Book.instances);
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            book = Book.instances[key];
            optionElement = document.createElement("option");
            optionElement.text = book.title;
            optionElement.value = book.isbn;
            selectElement.add(optionElement, null);
        }

        deleteButton.addEventListener("click", publicLibrary.view.deleteBook.HandleDeleteButtonClickEvent);
    },

    HandleDeleteButtonClickEvent: function()
    {
        let selectElement = document.forms['book'].selectBook;
        let isbn = selectElement.value;

        if(isbn)
        {
            Book.Destroy(isbn);
            selectElement.remove(selectElement.selectedIndex);
            console.log("Successfully deleted.");
        }
    }
};