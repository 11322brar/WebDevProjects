







//STRENGTH INDICATOR
//change strength indicator colour to red,yellow or green based on password complexity
const strengthIndicator = document.querySelector("#strength-indicator");
function changeIndicatorColour(generatedPassword) {

}
console.log(strengthIndicator.innerHTML);





const uppercase = document.getElementById("#uppercase")
const lowercase = document.getElementById("#lowercase")
const number = document.getElementById("#numbers")
const symbol = document.getElementById("#symbols")

let includesUppercase = false
let includesLowercase = false
let includesNumber = false
let includesSymbol = false

if (uppercase.checked) includesUppercase = true
if (lowercase.checked) includesLowercase = true
if (number.checked) includesNumber = true
if (symbol.checked) includesSymbol = true

//WRITE RULES FOR COLOUR OF INDICATOR 













// PASSWORD
//Requirements to start generating
//atleast one checkbox checked
//no. of checkbox count is the minimum length of password
let allCheckboxes = document.querySelectorAll(".checkboxes")

allCheckboxes.forEach("change", (checkbox))

const generatePasswordButton = document.getElementById("#generate-button")
generatePasswordButton.addEventListener("click", passwordGenerator)


function passwordGenerator() {
    let generatedPassword = "";

    //see what checkboxes are needed 
    // checked are mandatory to add 
    //create array of the checked checkboxes and randomly select any of them to generate each letter
    //shuffle password fisher yates method
}



// //clicking on copy copies the password to user's clipboard
const copyButton = document.querySelector("#copy-button")

copyButton.addEventListener("click", copyToClipboard)
//use if to stop copying if password null in starting pass.length>0

async function copyToClipboard(generatedPassword) {
    try {
        await navigator.clipboard.writeText(generatedPassword)
        //if resolved show copied need to put a timeout here to hide copied text after sometime by adding an active class or removing it
        
    } catch (error) {
        //if failed say error
    }
    
}



// let includesUppercase = false
// let includesLowercase = false
// let includesNumber = false
// let includesSymbol = false

// if (uppercase.checked) includesUppercase = true
// if (lowercase.checked) includesLowercase = true
// if (number.checked) includesNumber = true
// if (symbol.checked) includesSymbol = true
// let arrOfCheckboxes = document.querySelectorAll(".checkboxes")
// let arrOfCheckedboxes = arrOfCheckboxes.filter((checked) => checkbox[checked])

// if (requiredPasswordLength < countCheckedBoxes) {
//     requiredPasswordLength = countCheckedBoxes
// }
