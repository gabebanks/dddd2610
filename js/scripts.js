console.log('I am connected')

const btnElement = document.querySelector('#primaryNav > button');
const navElement = document.querySelector('#primaryNav > ul');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});