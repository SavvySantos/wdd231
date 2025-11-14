async function loadEvents() {
    const response = await fetch('./data/events.json');
    const data = await response.json();
    displayEvents(data.events);
}

function displayEvents(events) {
    const eventsContainer = document.querySelector('.current-events');
    eventsContainer.innerHTML = `<h2>Current Events</h2>
    <article class="events-card">
        <ul class="events-list"></ul>
    </article>`;

    const list = eventsContainer.querySelector('.events-list');

    events.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${event.name}</strong> - ${event.date}<br>${event.description}`;
        list.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', loadEvents);