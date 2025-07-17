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


//Index Directory cards Function 
const directory = 'data/business.json';
const directoryCards = document.querySelector('.businesses');

async function getCardData() {
    const response = await fetch(directory)
    const data = await response.json();

    displayCards(data.businesses);

}

getCardData()

const displayCards = (businesses) => {
    businesses.forEach((business) => {

        let card = document.createElement('section');
        card.classList.add('directory-card');
        let name = document.createElement('h2');
        let addresses = document.createElement('p');
        let webSiteUrl = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = `${business.name} `;
        addresses.textContent = `Addresses: ${business.addresses}`;
        webSiteUrl.textContent = `Website: ${business.website_url}`;

        image.setAttribute('src', `images/${business.image}`);
        image.setAttribute('alt', `Image of ${business.image}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(addresses);
        card.appendChild(webSiteUrl);
        card.appendChild(image);


        directoryCards.appendChild(card);




    });

}



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
            console.log(data); // only for testing purposes
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

    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const iconURL = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('SRC', iconURL)
    weatherIcon.setAttribute('ALT', "Weather Icon")
    description.innerHTML = data.weather[0].description
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;F`
    highTemp.innerHTML = `High: ${data.main.temp_max}&deg;F`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    sunRise.innerHTML = `Sunrise: ${sunRiseTimeStamp.toLocaleTimeString('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true })}`
    sunSet.innerHTML = `Sunset: ${sunSetTimeStamp.toLocaleTimeString('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true })}`




}




