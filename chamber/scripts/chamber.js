async function getMembers() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    const memberDirectory = document.querySelector('main');
    const membersContainer = document.createElement('div');
    membersContainer.classList.add('members', 'grid');

members.forEach(member => {
    const card = document.createElement('section');

    const image = document.createElement('img');
    image.src = member.image;
    image.alt = member.name;
    image.loading = 'lazy';

    const name = document.createElement('h2');
    name.textContent = member.name;

    const address = document.createElement('p');
    address.textContent = member.address;

    const website = document.createElement('a');
    website.href = member.website;
    website.textContent = 'Visit Website';

    card.append(image, name, address, website);
    membersContainer.appendChild(card);

});
    memberDirectory.appendChild(membersContainer);
}

    getMembers();
