// UI rendering by State

defaultState();
function defaultState() {
    document.querySelector("#left-data-container").style.display = "none";
    document.querySelector("#loading-animation").style.display = "none";
    document.querySelector("#error-container").style.display = "none";
    document.querySelector("#cards-grid-container").style.display = "none";
    document.querySelector("#search-bar-container").style.border = "";
    document.querySelector("#location-button-image-left").style.display = "none";

}


function loadingState() {
    document.querySelector("#location-input-container-right").style.display = "none";
    document.querySelector("#loading-animation").style.display = "block";
    document.querySelector("#location-button-image-left").style.display = "block";
}

function errorState() {
    document.querySelector("#location-input-container-right").style.display = "none";
    document.querySelector("#loading-animation").style.display = "none";
    document.querySelector("#error-container").style.display = "flex";
    document.querySelector("#location-button-image-left").style.display = "block";
}


function afterLoadingData() {
    document.querySelector("#left-data-container").style.display = "flex";
    document.querySelector("#error-container").style.display = "none";
    document.querySelector("#loading-animation").style.display = "none";
    document.querySelector("#cards-grid-container").style.display = "grid";

}

// ------------------------------------------------------------------------
//Getting city name from SEARCH BAR and making API call

//using SEARCH ICON
const searchButton = document.querySelector("#search-icon")
searchButton.addEventListener("click", getCityNameFromSearch)

//using ENTER KEY
const searchAndEnter = document.getElementById('search-input');
searchAndEnter.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getCityNameFromSearch()
    }
});

//passing city name in API URL
function getCityNameFromSearch() {
    const searchBar = document.querySelector("#search-input")
    const cityName = searchBar.value
    fetchWeatherInfo(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d7a2f3f757b65666d58043b96c4e6209&units=metric`)
}

// ------------------------------------------------------------------------

//Getting location from browser and calling function to get city name. 
const locationAccessButtonLeft = document.getElementById("location-button-image-left");
locationAccessButtonLeft.addEventListener("click", getLocation)
const locationAccessButtonRight = document.getElementById("location-button-image-right");
locationAccessButtonRight.addEventListener("click", getLocation)

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getCityNameFromCoordinates(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=d7a2f3f757b65666d58043b96c4e6209
            `)
        });
    } else {
        alert("Geolocation is not supported by this browser.")
    }
}

//uses coordinates to get city name using API Call
async function getCityNameFromCoordinates(cityNameApiUrl) {
    try {

        let cityData = await fetch(cityNameApiUrl)
        cityDataObject = await cityData.json()

        fetchWeatherInfo(`https://api.openweathermap.org/data/2.5/weather?q=${cityDataObject[0].name}&appid=d7a2f3f757b65666d58043b96c4e6209&units=metric`)


    } catch (error) {
        alert("Error in getting city name from coordinates", error);
    }
}

// ------------------------------------------------------------------------

//API CALL
async function fetchWeatherInfo(apiUrl) {
    try {
        defaultState()
        loadingState()

        const response = await fetch(apiUrl)
        const weatherInfo = await response.json();

        renderToUI(weatherInfo);

    }
    catch (error) {
        console.log("Error while calling fetchweatherinfo by cityname", error);
        errorState()
        if (error instanceof TypeError) {
            setTimeout(() => {
                document.querySelector("#search-bar-container").style.border = "1.5px solid red"
            }, 2000);
            document.querySelector("#error-message").textContent = "Please enter valid city name."
        }

    }
}
// ------------------------------------------------------------------------

//Showing data to UI
function renderToUI(weatherInfo) {

    // Getting required data from API response.
    //Left container data
    const weatherIcon = weatherInfo?.weather[0].icon
    const mainTemperature = weatherInfo?.main.temp;
    const weatherDescription = weatherInfo?.weather[0].main;
    const country = weatherInfo?.sys?.country;
    const city = weatherInfo?.name
    const unixTime = weatherInfo?.dt;

    //Right container data
    const minTemperature = weatherInfo?.main?.temp_min;
    const maxTemperature = weatherInfo?.main?.temp_max;
    const humidity = weatherInfo?.main?.humidity;
    const realFeel = weatherInfo?.main?.feels_like;
    const pressure = weatherInfo?.main?.pressure;
    const sunRise = weatherInfo?.sys?.sunrise;
    const sunSet = weatherInfo?.sys?.sunset;
    const latitude = weatherInfo?.coord?.lat;
    const longitude = weatherInfo?.coord?.lon;
    const windSpeed = weatherInfo?.wind?.speed;
    const windDegree = weatherInfo?.wind?.deg;

    // Getting the current date and time
    const today = new Date();
    const currentTime = getTime(today)
    const currentDay = getDay(today)
    const currentDate = getDate(today)



    //rendering Data to UI
    //Left container Data
    document.querySelector("#weather-description-image").outerHTML = `<img id="weather-description-image" src="media/icons/${weatherIcon}.png">`
    document.querySelector("#main-temperature").textContent = `${mainTemperature}°C`;
    document.querySelector("#weather-description").textContent = weatherDescription;

    document.querySelector("#date").textContent = currentDate;
    document.querySelector("#day").textContent = currentDay;
    document.querySelector("#time").textContent = currentTime;

    document.querySelector("#city-country").textContent = `${city}, ${country}`;

    //Right container Data
    document.querySelector("#humidity").textContent = `${humidity}%`;
    document.querySelector("#real-feel").textContent = `${realFeel}°C`;
    document.querySelector("#pressure").textContent = `${realFeel} mb`;
    document.querySelector("#sun-rise").textContent = unixToTime(sunRise);
    document.querySelector("#sun-set").textContent = unixToTime(sunSet);
    document.querySelector("#wind-speed").textContent = `${windSpeed} km/h`;
    document.querySelector("#wind-degree").textContent = `${windDegree}°`;
    document.querySelector("#max-temperature").textContent = `${maxTemperature}°C`;
    document.querySelector("#min-temperature").textContent = `${minTemperature}°C`;

    //Data load Finished. Showing data on UI.
    afterLoadingData()
}

// ------------------------------------------------------------------------
//TIME AND DATE FUNCTIONS

//API result time to normal IST time
function unixToTime(unixTimestamp) {
    // Convert the Unix timestamp to milliseconds
    const milliseconds = unixTimestamp * 1000;

    // Create a new Date object from the milliseconds
    const date = new Date(milliseconds);
    return (getTime(date))
}

//Returns day of week
function getDay(today) {
    // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    const dayNumber = today.getDay();

    // Array of day names
    const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (daylist[dayNumber])
}

//Returns today's date
function getDate(today) {
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return (`${day}-${month}-${year}`)
}

//Returns IST time
function getTime(today) {

    // Get the current hour, minute, and second
    let hour = today.getHours();
    let minute = today.getMinutes().toString().padStart(2, '0');
    let second = today.getSeconds();

    // Determine if it's AM or PM
    let prepand = (hour >= 12) ? " PM " : " AM ";

    // Convert 24-hour format to 12-hour format
    hour = (hour >= 12) ? hour - 12 : hour;

    // Check for special cases when hour is 0
    if (hour === 0 && prepand === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Noon';
        } else {
            hour = 12;
            prepand = ' PM';
        }
    }

    // Check for special cases when hour is 0
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Midnight';
        } else {
            hour = 12;
            prepand = ' AM';
        }
    }

    // Return the current time
    return (hour + ":" + minute + prepand)
}



