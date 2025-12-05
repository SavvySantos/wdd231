const weeklyLocations = [
    "Downtown Cedar City",
    "Cedar City Farmers Market",
    "City Park",
    "University Parking Lot"
]

document.addEventListener('DOMContentLoaded', () => {
    loadWeeklyLocations();
});

    async function loadWeeklyLocations() {
        try {
            const locationArea = document.querySelector('#location-cards');

                const card = document.createElement('div');
                card.classList.add('event-card');

                const ul = document.createElement('ul');
                weeklyLocations.forEach(location => {
                    const li = document.createElement('li');
                    li.textContent = location;
                    ul.appendChild(li);
                });

                card.appendChild(ul);
                locationArea.appendChild(card);
        } catch (error) {
            console.error("Error loading weekly locations: ", error);
        }  
    }
