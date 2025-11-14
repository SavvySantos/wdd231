async function loadSpotlights() {
    const response = await fetch('./data/company.json');
    const companies = await response.json();

    const container = document.querySelector('.company-spotlights, .spotlights-container');
    container.innerHTML = '';

    const shuffled = companies.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(company => {
        const article = document.createElement('article');
        article.classList.add('spotlight');
        article.innerHTML = `
        <img src="${company.image}" alt="${company.alt}" loading="lazy">
        <h3>${company.company}</h3>
        <p>${company.description}</p>
        <p><strong>Specialty: </strong>${company.specialty}</p>`;
        container.appendChild(article);
    });

    const heading = document.createElement('h2');
    heading.textContent = 'Company Spotlights';
    container.before(heading);
}
document.addEventListener('DOMContentLoaded', loadSpotlights);

document.addEventListener('DOMContentLoaded', loadSpotlights);