async function getMembers() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    const memberDirectory = document.querySelector('main');

    const existingCards = document.querySelector('#cards');
    if (existingCards) {
        existingCards.remove();
    }

    const membersContainer = document.createElement('div');
    membersContainer.id = 'cards';
    membersContainer.classList.add('members', 'grid');

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

    const address = document.createElement('p');
    address.innerHTML = member.address.replace(/, (.*)/, '<br>$1');

    const number = document.createElement('p');
    number.textContent = member["phone-number"];

    const website = document.createElement('a');
    website.href = member.website;
    website.textContent = 'Visit Website';

    card.append(image, name, address, number, website);
    membersContainer.appendChild(card);

});
    memberDirectory.appendChild(membersContainer);
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


