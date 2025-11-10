async function getMembers() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    const membersContainer = document.querySelector('#cards');
    membersContainer.innerHTML = '';

members.forEach((member) => {
    const card = document.createElement('section');

    const image = document.createElement('img');
    image.src = member.image;
    image.alt = member.name;
    image.loading = 'lazy';
    image.width = 150;
    image.height = 150;

    const name = document.createElement('h2');
    name.textContent = member.name;

    const parts = member.address.split(',');
    const firstPart = parts.shift();
    const rest = parts.join(',');

    const address = document.createElement('p');
    address.textContent = firstPart;
    address.appendChild(document.createElement('br'));
    address.appendChild(document.createTextNode(rest.trim()));

    const number = document.createElement('p');
    number.textContent = member["phone-number"];

    const website = document.createElement('a');
    website.href = member.website;
    website.textContent = 'Visit Website';

    card.append(image, name, address, number, website);
    membersContainer.appendChild(card);

});
}

    document.addEventListener('DOMContentLoaded', () => {
        const grid = document.querySelector('#grid-view');
        const list = document.querySelector('#list-view');

        grid.addEventListener('click', () => {
            const cards = document.querySelector('#cards');
            if (cards) {
                cards.classList.add('grid');
                cards.classList.remove('list');
            }
    });

    list.addEventListener('click', () => {
        const cards = document.querySelector('#cards');
        cards.classList.add('list');
        cards.classList.remove('grid');
    });
});


    getMembers();


