document.addEventListener("DOMContentLoaded", () => {

    loadPlaces();
});

async function loadPlaces() {
    try {
        const response = await fetch('data/discover.json');
        const places = await response.json();

        const cardArea = document.querySelector('#interest-cards');

        places.forEach(place => {
            const card = document.createElement('section');
            card.classList.add('interest-card');

            const name = document.createElement('h2');
            const img = document.createElement('img');
            const address = document.createElement('p');
            const description = document.createElement('p');

            name.textContent = place.title;

            img.src = place.img;
            img.alt = place.title;
            img.loading = "lazy";

            const parts = place.address.split(",");
            address.innerHTML = `${parts[0]}<br>${parts[1]},${parts[2]}`;

            description.textContent = place.description;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(description);

            cardArea.appendChild(card);
        });
    }
    catch (error) {
        console.error("Error loading places:", error);
    }
}