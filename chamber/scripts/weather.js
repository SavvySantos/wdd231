const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.68&lon=-113.06&units=imperial&appid=f4c1915698f7a44832469253ffc6027a';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log (error);
        weatherIcon.src = 'images/placeholder.png';
        weatherIcon.alt = 'Weather data unavailable';
        captionDesc.textContent = 'Weather data unavailable';
    }
}

function displayResults(weatherData) {
    currentTemp.textContent = `${weatherData.main.temp.toFixed(0)} °F`;

    const desc = weatherData.weather[0].description;
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);

    const icon = weatherData.weather[0].icon;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);
    weatherIcon.setAttribute('alt', desc);
}

apiFetch();