publicLibrary.view.createBook =
{
    SetupUserInterface: function()
    {
        let saveButton = document.forms['book'].commit;

        Book.LoadAll();

        saveButton.addEventListener("click", publicLibrary.view.createBook.HandleSaveButtonClickEvent);
    },

    HandleSaveButtonClickEvent: function()
    {
        let formElement = document.forms['book'];
        let slots = { isbn: formElement.isbn.value, title: formElement.title.value, year: formElement.year.value };
        Book.Add(slots);
        ShowModal(false);
    }
};