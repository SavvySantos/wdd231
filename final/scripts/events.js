import { events } from "./data/modal.mjs";

const weeklyLocations = [
    "Downtown Cedar City",
    "Cedar City Farmers Market",
    "City Park",
    "University Parking Lot"
]

async function getEvents() {

    document.addEventListener('DOMContentLoaded', () => {
        loadEvents();
        loadWeeklyLocations();
    })

    async function loadEvents() {
        try{
            const cardArea = document.querySelector('#event-cards');

            events.forEach(event => {
                const card = document.createElement('div');
                card.classList.add('event-card');

                const name = document.createElement('h2');
                const date = document.createElement('p');
                const location = document.createElement('address');
                const description = document.createElement('p');

                name.textContent = event.name;
                const parts = event.location.split(",");
                if (parts.length >= 3) {
                    location.innerHTML = `${parts[0]}<br>${parts[1]},${parts[2]}`;
                }
                else {
                    location.textContent = event.location;
                }

                description.textContent = event.description;

                date.textContent = event.date;

                card.appendChild(name);
                card.appendChild(date);
                card.appendChild(location);
                card.appendChild(description);

                cardArea.appendChild(card);
            });
        }
        catch (error) {
            console.error("Error loading Events: ", error);
        }
    }
}