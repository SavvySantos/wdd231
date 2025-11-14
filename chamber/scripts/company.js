async function loadSpotlights() {
    try {
        const response = await fetch('./data/company.json');
        const data = await response.json();

        const members = data.members;

        const eligibleMembers = members.filter(member => member.level === "Gold" || member.level === "Silver");

        const container = document.querySelector('.spotlights-container');
        container.innerHTML = '';

        const shuffled = companies.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        selected.forEach(member => {
            const article = document.createElement('article');
            article.classList.add('spotlight');
            article.innerHTML = `
            <img src="${member.image}" alt="${member.alt}" loading="lazy">
            <h3>${member.name}</h3>
            <p><strong>Address: </strong>${member.address}</p>
            <p><strong>Phone: </strong>${member["phone-number"]}</p>;
            <p><a href="${member.website}" target="_blank"><strong>URL</strong></a></p>`;
            container.appendChild(article);
        });

        const heading = document.createElement('h2');
        heading.textContent = 'Company Spotlights';
        container.before(heading);
    }
}
document.addEventListener('DOMContentLoaded', loadSpotlights);

document.addEventListener('DOMContentLoaded', loadSpotlights);