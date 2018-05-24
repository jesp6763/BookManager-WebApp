publicLibrary.view.updateBook =
{
    SetupUserInterface: function()
    {
        let formElement = document.forms['book'], saveButton = formElement.commit, selectBookElement = formElement.selectBook;
        let keys = [], book = null, optionElement = null;

        Book.LoadAll();

        keys = Object.keys(Book.instances);
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            book = Book.instances[key];
            optionElement = document.createElement("option");
            optionElement.text = book.title;
            optionElement.value = book.isbn;
            selectBookElement.add(optionElement, null);
        }

        selectBookElement.addEventListener("change", function()
        {
            let book = null, key = selectBookElement.value;
            if(key)
            {
                book = Book.instances[key];
            }

            if(book)
            {
                formElement.isbn.value = book.isbn;
                formElement.title.value = book.title;
                formElement.year.value = book.year;
            }
            else
            {
                formElement.isbn.value = "";
                formElement.title.value = "";
                formElement.year.value = "";
            }
        });

        saveButton.addEventListener("click", publicLibrary.view.updateBook.HandleUpdateButtonClickEvent);
    },

    HandleUpdateButtonClickEvent: function()
    {
        let formElement = document.forms['book'];
        let slots = { isbn: formElement.isbn.value, title: formElement.title.value, year: formElement.year.value };
        Book.Update(slots);
        formElement.reset();
    }
};