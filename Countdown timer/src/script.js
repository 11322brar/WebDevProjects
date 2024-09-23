const festivals = [
    { festivalName: "New Year", date: "01 January 2025" },
    { festivalName: "Lohri", date: "13 January 2025" },
    { festivalName: "Makar Sankranti", date: "14 January 2025" },
    { festivalName: "Republic Day", date: "26 January 2025" },
    { festivalName: "Maha Shivaratri", date: "26 February 2025" },
    { festivalName: "Holi", date: "14 March 2025" },
    { festivalName: "Eid al-Fitr", date: "02 April 2025" },
    { festivalName: "Good Friday", date: "18 April 2025" },
    { festivalName: "Raksha Bandhan", date: "09 August 2025" },
    { festivalName: "Ganesh Chaturthi", date: "28 August 2025" },
    { festivalName: "Dussehra", date: "02 October 2025" },
    { festivalName: "Diwali", date: "29 October 2025" },
    { festivalName: "Christmas", date: "25 December 2025" }
];
let intervalControl;

function expandDropdown() {
    document.getElementById("festival-selector").size = 10;
}

function collapseDropdown() {
    document.getElementById("festival-selector").size = 1;
}

festivalSelector = document.getElementById('festival-selector');
festivalSelector.addEventListener('click', getSelectedFestivalName)

//gets festival name from user and it's date from festivals object then calls start timer function
function getSelectedFestivalName() {
    clearInterval(intervalControl); //stop any previous running timer
    let selectedFestivalName = festivalSelector.value;
    let searchResult = festivals.find((key) => key.festivalName.toLowerCase() == selectedFestivalName.toLowerCase())
    let selectedFestivalDate = new Date(searchResult.date).getTime()
    startTimer(selectedFestivalDate);
}


let customDateSelector = document.getElementById("custom-end-date")
console.log('customDateSelector:', customDateSelector.outerHTML)
let tomorrowDate = getTomorrowDate();
// console.log('todayDate:', todayDate)
customDateSelector.setAttribute("min", tomorrowDate)
customDateSelector.defaultValue = tomorrowDate;
console.log('customDateSelector.outerHTML:', customDateSelector.outerHTML)

function getTomorrowDate() {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Add 1 day to the current date
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}






customDateButton = document.getElementById('button-custom-end-date');
customDateButton.addEventListener('click', getCustomDate)
function getCustomDate() {
    clearInterval(intervalControl);
    let customEndDate = new Date(customDateSelector.value);
    console.log('customEndDate:', customEndDate)
    if (customEndDate == 'Invalid Date') alert("Choose Date")
    else startTimer(customEndDate.getTime());
}

//runs timer function every second
function startTimer(customEndDate) {
    intervalControl = setInterval(() => {
        timer(customEndDate)
    }, 1000);
}

//Hardcoded value
// let endDate = new Date('24 december 2024').getTime()

// function will be run every second


function timer(endDate) {
    let startDate = new Date().getTime()

    // 30*24*60*60*1000 converting into milliseconds
    const oneMonth = 2592000000;
    const oneDay = 86400000;
    const oneHour = 3600000;
    const oneMin = 60000;
    const oneSecond = 1000;

    // calculate time left
    let remainingTime = endDate - startDate;
    let remainingMonths = Math.floor(remainingTime / oneMonth);
    let remainingDays = Math.floor((remainingTime % oneMonth) / oneDay);
    let remainingHours = Math.floor((remainingTime % oneDay) / oneHour);
    let remainingMinutes = Math.floor((remainingTime % oneHour) / oneMin);
    let remainingSeconds = Math.floor((remainingTime % oneMin) / oneSecond);

    // print to screen
    document.getElementById('months').textContent = remainingMonths;
    document.getElementById('days').textContent = remainingDays;
    document.getElementById('hours').textContent = remainingHours;
    document.getElementById('minutes').textContent = remainingMinutes;
    document.getElementById('seconds').textContent = remainingSeconds;

}



// Use const and let Consistently:

// Ensure you use const for variables that don’t change (like festivals, oneMonth, oneDay, etc.) and let for those that do (like intervalControl, remainingTime, etc.). This enhances readability and helps avoid accidental reassignments.
// Check for searchResult Existence:

// Before using searchResult in getSelectedFestivalName, check if it's null or undefined. If the festival isn't found, attempting to access properties of searchResult can lead to runtime errors. This will improve robustness and error handling.
// Simplify Date Validation:

// Instead of comparing customEndDate to the string 'Invalid Date', use isNaN(customEndDate.getTime()). This is a more standard way to check for valid dates and will simplify your validation logic.
// Extract Common Logic for Timer Calculation:

// Consider extracting the logic for calculating remainingMonths, remainingDays, etc., into a separate function. This can enhance code reusability and keep the timer function cleaner and easier to understand.
// Add Comments for Clarity:

// While some parts of the code have comments, adding more detailed explanations for complex logic (like the time conversion calculations) will help other developers (and future you) understand the intent and flow of the code better.
// Optimize setInterval Management:

// When stopping the timer with clearInterval, ensure that intervalControl is properly set to null afterward. This can prevent accidental multiple intervals from being created if the timer is started multiple times.
// Consider Using Template Literals:

// When setting the text content for the timer display, consider using template literals for better readability. For example, instead of concatenating strings, you can format it directly within backticks, which improves code clarity.
// Refactor the getTomorrowDate Function:

// The getTomorrowDate function can be simplified by directly returning the formatted date string instead of using intermediate variables. This makes the function more concise and focused.
// Use Event Delegation for Future Scalability:

// Instead of directly attaching event listeners to individual elements, consider using event delegation on a parent container. This can simplify your code if you plan to add more interactive elements in the future.
// Modularize Your Code:

// If this JavaScript grows, consider separating different functionalities into modules or files. For example, you could have one file for handling the countdown logic and another for event listeners. This will enhance maintainability and readability as your project expands.

