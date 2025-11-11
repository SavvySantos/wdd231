async function loadEvents() {
    const response = await fetch('./data/events.json');
    const data = await response.json();
    displayEvents(data.events);
}

function displayEvents(events) {
    const eventsContainer = document.querySelector('.current-events');
    eventsContainer.innerHTML = '<h2>Current Events</h2>';

    events.forEach(event => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>${event.date}</strong></p>
            <p>${event.description}</p>`;
        eventsContainer.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', loadEvents);