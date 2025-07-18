// Footer Current Year and Last Modified
const currentyear = document.querySelector("#currentyear");

// use the date object
const today = new Date();
currentyear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span> `;


let lastmodified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastmodified.toLocaleString();

//navigation menu

const navbutton = document.querySelector("#ham-btn");

const navBar = document.querySelector('#nav-bar');

//toggle the show class off and on

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');

});





// function to display Weather Information 

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#description');
const lowTemp = document.querySelector('#high');
const highTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunRise = document.querySelector('#sunrise');
const sunSet = document.querySelector('#sunset');




//URL VARIABLES

const myLat = "-32.88"
const myLong = "-68.84"
const myKey = "e1aa7442dca0c76cdefe79f9363d8e32"

const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;




async function apiFetch() {

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // only for testing purposes
            displayResults(data);

        } else {
            throw Error(await response.text());
        }


    } catch (error) {
        console.log(error);
    }

}

apiFetch();







// Function to display results of the API response

function displayResults(data) {

    // Converting TimeStamp Unix variables (Sunset and Sunrise) given from WeatherMap to  Javascript format 
    const sunRiseTimeStamp = new Date(data.sys.sunrise * 1000);
    const sunSetTimeStamp = new Date(data.sys.sunset * 1000);

    currentTemp.innerHTML = `<strong> ${data.main.temp}&deg;F </strong>`
    const iconURL = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('SRC', iconURL)
    weatherIcon.setAttribute('ALT', "Weather Icon")
    description.innerHTML = `<strong> ${data.weather[0].description} <strong>`
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;F`
    highTemp.innerHTML = `High: ${data.main.temp_max}&deg;F`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    sunRise.innerHTML = `Sunrise: ${sunRiseTimeStamp.toLocaleTimeString('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true })}`
    sunSet.innerHTML = `Sunset: ${sunSetTimeStamp.toLocaleTimeString('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true })}`




}




// GETTING FORECAST DATA FROM API 

const forcastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiForecastFetch() {

    try {
        const response = await fetch(forcastURL);
        if (response.ok) {
            const forecastData = await response.json();
            // console.log(forecastData); 
            displayForecastResults(forecastData);

        } else {
            throw Error(await response.text());
        }


    } catch (error) {
        console.log(error);
    }

}



apiForecastFetch();

const todayForecast = document.querySelector('#today')
const tomorrowForecast = document.querySelector('#tomorrow')
const afterTomorrowForecast = document.querySelector('#after-tomorrow')


// Function to display results of the API response

function displayForecastResults(forecastData) {

    //getting day Format for displaying result on html 
    const tomorrow = new Date(forecastData.list[8].dt_txt) //javascript needs the txt string converted into Date Format
    const tomorrowWeekday = tomorrow.toLocaleString('en-UK', { weekday: 'long' }) //getting date 

    // getting day Format for displaying result on html  for the day after tomorrow
    const afterTomorrow = new Date(forecastData.list[16].dt_txt) //same than tomorrow date
    const afterTomorrowWeekday = afterTomorrow.toLocaleString('en-UK', { weekday: 'long' }) //getting date 


    todayForecast.innerHTML = ` Today: <strong> ${forecastData.list[0].main.temp_max}&deg;F </strong> `
    tomorrowForecast.innerHTML = ` ${tomorrowWeekday} : <strong> ${forecastData.list[8].main.temp_max}&deg;F </strong>`
    afterTomorrowForecast.innerHTML = `${afterTomorrowWeekday} : <strong> ${forecastData.list[16].main.temp_max}&deg;F </strong>`


}

