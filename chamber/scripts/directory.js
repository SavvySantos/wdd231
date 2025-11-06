const hamButton = document.querySelector('#ham-button');
const navBar = document.querySelector('#nav-bar');

hamButton.addEventListener('click', () => {
    navBar.classList.toggle('open');
    hamButton.classList.toggle('open');
});