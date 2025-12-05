document.addEventListener("DOMContentLoaded", () => {
    const eventList = document.querySelector("#event-details");
    const buttonContainer = document.querySelector("event-buttons");

    const events = [
    {
        name: "Downtown Cedar City Christmas Lighting Ceremony",
        date: "November 29, 2025",
        location: "Center Street, Cedar City, UT",
        description: "Come join us as we light up the streets of Cedar City, UT to bring in the holiday season!"
    },
    {
        name: "Holiday Hoopla",
        date: "December 27, 2025",
        location: "11 S Cross Hollow Dr, Cedar City, UT, 84720",
        description: "Join us at the Dimond Z Arena for a celebration the week after Christmas! Purchase your tickets early for great stocking stuffers!"
    },
    {
        name: "American Prep Academy's Holiday Market",
        date: "December 06, 2025",
        location: "782 N Main Street, Cedar City, UT, 84721",
        description: "A festive holiday-market event hosted by American Prep Academy — featuring a range of local and student vendors offering crafts, gifts, and Holiday gifts."
    }
];

function displayButtons() {
        events.forEach(event => {
            const card = document.createElement('div');
            card.classList.add('event-card');

            card.innerHTML = `
            <h3>${event.name}</h3>
            <p class="date">${event.location}</p>
            <button class="event-ifo">❌</button>
            `;

            const eventBtn = card.querySelector('.event-info');
            eventBtn.addEventListener('click', () => displayEventInfo(event));

            buttonContainer.appendChild(card);
        });
    }

    function displayEventInfo(event) {
        location.innerHTML = `${parts[0]}<br>${parts[1]},${parts[2]}`;
        
        eventList.innerHTML = `
            <button id="closeModal">❌</button>
            <h2>${event.name}</h2>
            <p class="event-date"><strong>Date(s): </strong></p><p class="date">${event.date}</p>
            <p class="event-location"><strong>Location: </strong></p><p class="location">${event.location}</p>
            <p class="event-description"><strong>Description: </strong></p><p class="description">${event.description}</p>
            `
        eventList.showModal();

        const closeModal = document.querySelector("#closeModal");

        closeModal.addEventListener('click', () => {
            eventList.close();
        });
    }
    
    displayEventInfo();
});