const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const apiKey = 'f4c1915698f7a44832469253ffc6027a';
const lat = 37.68;
const lon = -113.06;
const forecastDiv = document.getElementById('forecast-container');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.68&lon=-113.06&units=imperial&appid=f4c1915698f7a44832469253ffc6027a';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.68&lon=-113.06&units=imperial&appid=f4c1915698f7a44832469253ffc6027a'

async function getForecast() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&cnt=24&appid=${apiKey}`);
        const data = await response.json();

        forecastDiv.innerHTML = '';

        for (let i = 0; i < 3; i++) {
            const dayData = data.list[i * 8];

            const date = new Date(dayData.dt * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
            const temp = Math.round(dayData.main.temp);
            const icon = `https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`;
            const description = dayData.weather [0].description;

            const forecastHTML = `
            <div class="forecast-day">
                <h3>${date}</h3>
                <img src="${icon}" alt="${description}" width="80" height="80"
                <p>${description}</p>
                <p>Temp: ${temp}°F</p>
            </div>`;
            forecastDiv.innerHTML += forecastHTML;
        }
    }
    catch (error) {
        forecastDiv.innerHTML = '<p>Unable to fetch forecast data.</p>'
        console.error(error);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log("Forecast", data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
        document.querySelector('#forecast').textContent = "Forcast data unavailable.";
    }
}

function displayForecast(forecastData) {
    const forecastContainer = document.querySelector('#forecast');
    forecastContainer.innerHTML = "";

    const noonForecasts = forecastData.list.filter(item => item.dt_txt.includes("12:00:00")
);

    const fiveDays = noonForecasts.slice(0, 5);

    fiveDays.forEach(day => {
        const date = new Date(day.dt_txt);
        const temp = day.main.temp.toFixed(0);

        const card = document.createElement('div');
        card.classList.add('forecast-day-card');

        card.innerHTML = `
        <h3>${date.toLocaleDateString(undefined, { weekday: 'long'})}</h3>
        <p>${temp} °F</p>
        `;
        forecastContainer.appendChild(card);
    });

}

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
        weatherIcon.alt = 'Weather data unavailable';
        captionDesc.textContent = 'Weather data unavailable';
    }
}

function displayResults(weatherData) {
    const temp = weatherData.main.temp.toFixed(0);
    document.querySelector('.current-temp').innerHTML = `<strong>${temp}°F</strong>`;

    const desc = weatherData.weather[0].description;
    const weatherDesc = document.getElementById('weather-desc');
    document.querySelector('#weather-desc').innerHTML = `<strong>${weatherDesc}</strong>`;
    if (weatherDesc) {
        weatherDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    }

    document.getElementById('high-temp').textContent = `${Math.round(weatherData.main.temp_max)}°F`;
    document.getElementById('low-temp').textContent = `${Math.round(weatherData.main.temp_min)}°F`;
    document.getElementById('humidity').textContent = `${weatherData.main.humidity}%`;

    const sunrise = new Date(weatherData.sys.sunrise * 1000);
    const sunset = new Date(weatherData.sys.sunset * 1000);
    document.getElementById('sunrise').textContent = sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('sunset').textContent = sunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const icon = weatherData.weather[0].icon;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);
    weatherIcon.setAttribute('alt', desc);
}

apiFetch();
fetchForecast();