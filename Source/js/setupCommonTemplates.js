/**
 * Imports a script tag in the head tag, above all scripts.
 * @param {string} linkToJSScript 
 * @param {boolean} importAtTop 
 */
function ImportScript(linkToJSScript, importAtTop)
{
    let headContainer = document.getElementsByTagName('head')[0];

    if(headContainer)
    {
        let existingScripts = headContainer.getElementsByTagName('script');
        let script = document.createElement('script');
        script.src = linkToJSScript;

        // If there is more than 0 scripts already existing, then.
        if (existingScripts.length > 0)
        {
            // Insert the new script before the first script.
            existingScripts[0].insertAdjacentHTML('beforebegin', "<script src=\"".concat(linkToJSScript, "\"></script>"))
        }
        else
        {
            document.head.appendChild(script);
        }
    }
}

/**
 * Creates a HTML template.
 * @param {string} placement The placement of the template, ex. afterbegin, afterend, beforebegin, beforeend.
 * @param {string} linkToTemplate The link to the file template.
 * @param {Array} requiredJSScripts The JavaScript files that is required for the template to run. The format is ex. [0] = "Model/Book.js". Make sure the scripts is in order.
 */
function CreateTemplate(placement, linkToTemplate, requiredJSScripts)
{
    let xHttpRequest = new XMLHttpRequest();
    xHttpRequest.open('GET', linkToTemplate);
    xHttpRequest.onload = function()
    {
        let bodyContainer = document.getElementsByTagName('body')[0];
        bodyContainer.insertAdjacentHTML(placement, xHttpRequest.responseText);
    }
    
    xHttpRequest.send();

    for (let j = 0; j < requiredJSScripts.length; j++) {
        const jElement = requiredJSScripts[j];
        
        ImportScript(jElement, true);
    }
}

// Create templates
CreateTemplate('afterbegin', "templates/navigation.html", [] );