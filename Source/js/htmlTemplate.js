/**
 * Creates a HTML template.
 * @param {string} linkToTemplate The link to the file template.
 * @param {Array} requiredJSScripts The JavaScript files that is required for the template to run. The format is ex. [0] = "Model/Book.js". Make sure the scripts is in order.
 */
function CreateTemplate(linkToTemplate, requiredJSScripts)
{
    return { linkToTemplate: linkToTemplate, requiredScripts: requiredJSScripts };
}