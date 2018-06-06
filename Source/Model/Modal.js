class Modal
{
    static get ModalElement()
    {
        return document.getElementsByClassName('modal')[0];
    }
    
    get Title(){
        return this.title;
    }

    set Title(value){
        this.title = value;
    }

    get Content(){
        return this.content;
    }

    set Content(value){
        this.content = value;
    }

    get Buttons(){
        return this.buttons;
    }

    set Buttons(value){
        this.buttons = value;
    }

    /**
     * Initializes a new instance of the Modal class.
     * @param {string} title The title of the modal
     * @param {number} buttonType The type of buttons. Available types: 1 = OK, 2 = OKCancel.
     * @param {function} okBtnCallback The function to call when pressing the OK button. Argument is optional. Just set to undefined if cancel button callback is needed, but not the OK button callback.
     * @param {function} cancelBtnCallback The function to call when pressing the Cancel button. Argument is optional.
     */
    constructor(title, buttonType, okBtnCallback, cancelBtnCallback) {
        if (!Modal.ModalElement) {
            return;
        }

        // Initialize
        this.title = Modal.ModalElement.getElementsByClassName('modal-header')[0].getElementsByTagName('h1')[0];
        this.content = Modal.ModalElement.getElementsByTagName('form')[0];
        this.buttons = Modal.ModalElement.getElementsByTagName('button');

        // Show modal
        Modal.ModalElement.style.display = "block";

        // Set title
        this.title.innerHTML = title;

        // Replace content with new content.
        this.DrawModalContent();

        // Hide buttons
        this.buttons.ok.style.display = "none";
        this.buttons.cancel.style.display = "none";

        // Show buttons
        switch (buttonType) {
            case 1: // OK
            this.buttons.ok.style.display = "block";
                break;
            case 2: // OK and Cancel
            this.buttons.ok.style.display = "block";
            this.buttons.cancel.style.display = "block";
                break;
            default:
            console.log("Invalid button type.");
                break;
        }


        if (okBtnCallback) {
            // Add event listener to onclick
            this.buttons[1].addEventListener('click', okBtnCallback);
        }

        if (cancelBtnCallback)
        {
            // Add event listener to onclick
            this.buttons[0].addEventListener('click', cancelBtnCallback);
        }
        else
        {
            this.buttons[0].addEventListener('click', this.Close);
        }
    }

    /**
     * Draws the modal's content.
     */
    DrawModalContent()
    {
        let newContent = "<h2>Default</h2>";
        this.content.innerHTML = newContent;
    }

    Close()
    {
        Modal.ModalElement.style.display = "none";
    }
}