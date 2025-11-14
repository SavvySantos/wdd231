async function loadSpotlights() {
    try {
        const response = await fetch('./data/members.json');
        const data = await response.json();

        const members = data.members;

        const eligibleMembers = members.filter(member => member.level === "Gold" || member.level === "Silver");

        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        const container = document.querySelector('.spotlight-container');
        container.innerHTML = '';

        selected.forEach(member => {
            const article = document.createElement('article');
            article.classList.add('spotlight');
            article.innerHTML = `
            <div class="spotlight-header">
                <h3>${member.name}</h3>
                <p class="tagline">${member.level} Member</p>
            </div>
            <div class="spotlight-body">
                <img src="${member.image}" alt="${member.alt}" loading="lazy">
                <div class="spotlight-info">
                    <p><strong>Address: </strong>${member.address}</p>
                    <p><strong>Phone: </strong>${member["phone-number"]}</p>
                    <p><strong>URL: </strong><a href="${member.website}" target="_blank">${member.website}</a></p>
                </div>
            </div>`;
            container.appendChild(article);
        });
    }
    catch (error) {
        console.error('Error loading company spotlights:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadSpotlights);