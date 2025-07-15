const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figCaption = document.querySelector('figcaption');

//URL VARIABLES

const myLat = "49.6"
const myLong = "6.6"
const myKey = "e1aa7442dca0c76cdefe79f9363d8e32"

const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // only for testing purposes
            //displayResults(data); 

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

    currentTemp.innerHTML = data.weather[0].description

}