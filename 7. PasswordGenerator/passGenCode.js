// showing password length using slider on UI, getting the slider value and outputting  passwords on movement. 
const slider = document.querySelector("#length-slider");
const sliderLabel = document.querySelector("#slider-label")



slider.addEventListener("input", sliderMovement)
function sliderMovement() {
    sliderLabel.textContent = slider.value;
    requiredPasswordLength = slider.value
    password = outputPassword();

    const min = slider.min;
    const max = slider.max;
    slider.style.backgroundSize = ((password.length - min) * 100 / (max - min)) + "% 100%"
}


// ---------------------------------------------------------

//default case on page reload
const uppercase = document.querySelector("#uppercase")
const lowercase = document.querySelector("#lowercase")
const number = document.querySelector("#numbers")
const symbol = document.querySelector("#symbols")

const displayPassword = document.querySelector("#generated-password")

let requiredPasswordLength = 10;
slider.value = 10;

uppercase.checked = true
lowercase.checked = true
number.checked = true
symbol.checked = false

//calling output password once on default values on page reload
outputPassword();

// ---------------------------------------------------------
//regenerating password when regenerate button is clicked
let regeneratePassword = document.querySelector("#regenerate-button")
regeneratePassword.addEventListener("click", outputPassword)


// ---------------------------------------------------------
function strengthIndicator(password) {
    passwordLength = password.length;
    let indicator = document.querySelector("#strenght-indicator")
    if (passwordLength < 4) {
        indicator.classList.remove(...indicator.classList)
        indicator.classList.add("red-indicator")
    }
    else if (passwordLength < 8) {
        indicator.classList.remove(...indicator.classList)
        indicator.classList.add("yellow-indicator")
    }
    else if (passwordLength < 11) {
        indicator.classList.remove(...indicator.classList)
        indicator.classList.add("green-indicator")
    }
    else {
        indicator.classList.remove(...indicator.classList)
        indicator.classList.add("dark-green-indicator")
    }

}

// ---------------------------------------------------------

//Generating password and showing output in text-field
function outputPassword() {
    let password = ''

    //Adding mandatory characters first
    password = addingRequiredCharacters(password)

    //If no character was added it means no check box is selected. Exiting.
    if (password.length < 1) {
        return;
    }

    //Adds more of the selected characters until password length is greater than required.
    while (password.length < requiredPasswordLength) {
        password = addingRequiredCharacters(password)
    }

    //Trims down password to required length
    if (password.length > requiredPasswordLength) {
        lengthVariance = password.length - requiredPasswordLength
        for (let i = 0; i < lengthVariance; i++) {
            password = password.slice(0, -1)
        }
    }

    //shuffle password to improve randomness and printing on screen
    password = shufflePassword(password)
    strengthIndicator(password);
    displayPassword.value = password;
    return password

}

// ---------------------------------------------------------



//Adds all required characters based on if checkboxes are checked
function addingRequiredCharacters(password) {
    if (uppercase.checked) password += randomUppercaseGenerator()
    if (lowercase.checked) password += randomLowercaseGenerator()
    if (number.checked) password += randomNumberGenerator()
    if (symbol.checked) password += randomSymbolGenerator()
    return password
}

// ---------------------------------------------------------


//RANDOM DATA GENERATOR FUNCTIONS

//returns a random integer between min and max. Excluding max.
function randomIntegerGenerator(min, max) {
    let randomInt = Math.floor(Math.random() * (max - min) + min)
    return randomInt
}

//generates one uppercase alphabet
function randomUppercaseGenerator() {
    return String.fromCharCode(randomIntegerGenerator(65, 91));
}

//generates one lowercase alphabet
function randomLowercaseGenerator() {
    return String.fromCharCode(randomIntegerGenerator(97, 123));
}

//generates one random number
function randomNumberGenerator() {
    return randomIntegerGenerator(0, 9)
}

//generates one random symbol
function randomSymbolGenerator(params) {
    let keyboardSymbols = "~!@#$]%^&*(_+)`;:'\"<>,}.?/{[|"
    return keyboardSymbols.charAt(randomIntegerGenerator(0, keyboardSymbols.length))
}

// ---------------------------------------------------------

//PASSWORD SHUFFLER
function shufflePassword(password) {
    let arr = password.split(""),
        lengthofArray = arr.length;

    for (let i = 0; i < lengthofArray; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr.join("");
}

// ---------------------------------------------------------

// //clicking on copy copies the password to user's clipboard
//DOESN'T WORK
// const copyButton = document.querySelector("#copy-button")

// copyButton.addEventListener("click", copyToClipboard)

// async function copyToClipboard(password) {
//         try {
//             await navigator.clipboard.writeText(password);
//             console.log('Content copied to clipboard');
//         } catch (err) {
//             console.error('Failed to copy: ', err);
//         }
//     }

// ---------------------------------------------------------
