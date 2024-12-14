console.log('I am connected');

const btnElement = document.querySelector('#hamburgerBtn button'); // Ensure this targets the button inside #hamburgerBtn
const navElement = document.querySelector('#primaryNav > ul');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');  // Toggles 'open' class on button
    navElement.classList.toggle('open');  // Toggles 'open' class on menu
});