const btnElement = document.querySelector('#hamburgerBtn');
const navElement = document.querySelector('#primaryNav');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});