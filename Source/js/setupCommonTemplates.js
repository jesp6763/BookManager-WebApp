// let htmlTemplateScript = document.createElement('script');
// htmlTemplateScript.src = "js/htmlTemplate.js";
// document.head.children[document.head.children.length - 1].insertAdjacentHTML('beforebegin', htmlTemplateScript.outerHTML);

// let templates = {
//     navigation: CreateTemplate("templates/navigation.html", ["Model/Book.js"] )
// };

let xHttpRequest = new XMLHttpRequest();

// Load templates
xHttpRequest.open('GET', "templates/navigation.html");
    xHttpRequest.onload = function(){
        let bodyContainer = document.getElementsByTagName('body')[0];
        bodyContainer.insertAdjacentHTML('afterbegin', xHttpRequest.responseText);
        
        // Load required scripts.
        let headContainer = document.getElementsByTagName('head')[0];
        let scripts = headContainer.getElementsByTagName('script');

        if(scripts.length > 0)
        {
            scripts[0].insertAdjacentHTML('beforebegin', "<script src=\"Model/Book.js\"></script>");
        }
        else
        {
            headContainer.children[headContainer.children.length - 1].insertAdjacentHTML('afterend', "<script src=\"Model/Book.js\"></script>");
        }
    }

    xHttpRequest.send();