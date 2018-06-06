class AddBookModal extends Modal{
    /**
     * Initializes a new AddBookModal.
     */
    constructor(){
        super("Add new book", 2);
        this.Buttons[1].addEventListener('click', this.AddButtonHandler);
        //Book.LoadAll();
    }
    
    DrawModalContent(){
        let newContent = `<div class="flex flex-vertical">
        <div class="flex flex-horizontal">
            <label>ISBN:</label>
            <input name="isbn" />
        </div>
        <div class="flex flex-horizontal">
            <label>Title:</label>
            <input name="title" />
        </div>
        <div class="flex flex-horizontal">
            <label>Year:</label>
            <input name="year" type="number" />
        </div>
    </div>`;
        this.content.innerHTML = newContent;
    }

    AddButtonHandler(){
        let formElement = this.Content;
        console.log(this.Content);
        let slots = { isbn: formElement.isbn.value, title: formElement.title.value, year: formElement.year.value };
        Book.Add(slots);
        this.Close();
    }
}