const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
})

import { reviews } from '../data/reviews.js';
console.log(reviews);
const myTarget = document.querySelector("#cars");

function createStarImage() {
    const imgStar = document.createElement('img');
    imgStar.setAttribute("src", "./images/star.svg"); 
    imgStar.setAttribute("alt", "Star rating");
    imgStar.setAttribute("width", "16"); 
    imgStar.setAttribute("height", "16"); 
    return imgStar;
}

for (let x = 0; x < reviews.length; x++) {
    const mySection = document.createElement('section');
    
    const myName = document.createElement('h3');
    myName.textContent = reviews[x].name;
    mySection.appendChild(myName);

    const starContainer = document.createElement('div'); 
    for (let i = 0; i < reviews[x].stars; i++) {
        const starImage = createStarImage(); 
        starContainer.appendChild(starImage);
    }
    mySection.appendChild(starContainer); 

    const myReview = document.createElement('p');
    
    myReview.textContent = reviews[x].review;
    mySection.appendChild(myReview);
    myTarget.appendChild(mySection);
}