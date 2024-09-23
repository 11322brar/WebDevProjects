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





