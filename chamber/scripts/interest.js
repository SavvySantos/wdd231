import { places } from "../data/discover.mjs";

document.addEventListener("DOMContentLoaded", () => {
    loadPlaces();
});

async function loadPlaces() {
    try {
        const cardArea = document.querySelector('#interest-cards');

        places.forEach(place => {
            const card = document.createElement('section');
            card.classList.add('interest-card');

            const name = document.createElement('h2');
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const address = document.createElement('address');
            const description = document.createElement('p');
            const button = document.createElement('a');

            name.textContent = place.title;

            img.src = place.img;
            img.alt = place.title;
            img.loading = "lazy";
            figure.appendChild(img);

            const parts = place.address.split(",");
            address.innerHTML = `${parts[0]}<br>${parts[1]},${parts[2]}`;

            description.textContent = place.description;

            button.textContent = "Learn More";
            button.href = place.link;
            button.classList.add("learn-btn");

            card.appendChild(name);
            card.appendChild(figure);
            card.appendChild(address);
            card.appendChild(description);
            card.appendChild(button);

            cardArea.appendChild(card);
        });
    }
    catch (error) {
        console.error("Error loading places:", error);
    }
}