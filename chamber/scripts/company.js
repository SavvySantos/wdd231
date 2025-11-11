async function loadSpotlights() {
    const response = await fetch('./data/company.json');
    const companies = await response.json();

    const container = document.querySelector('.company-spotlights');
    container.innerHTML = '<h2>Company Spotlights</h2>';

    companies.forEach(company => {
        const article = document.createElement('article');
        article.classList.add('spotlight');
        article.innerHTML = `
            <img src ="${company.image}" alt="${company.alt}" loading="lazy">
            <h3>${company.company}</h3>
            <p>${company.description}</p>
            <p><strong>Specialty:</strong> ${company.specialty}</p>`;
        container.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', loadSpotlights);