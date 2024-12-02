const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

import { hotels } from "../data/hotels.js"; // Adjust the path if necessary
console.log(hotels);

const cards = document.querySelector('#hotelCard');

hotels.forEach(hotel => {
    const mySelection = document.createElement('section');

    // Create image element
    const theImage = document.createElement("img");
    theImage.src = `images/${hotel.image}`;
    theImage.alt = `Hotel Name: ${hotel.name}`;

    const theName = document.createElement("h2");
    theName.textContent = hotel.name;

    const theAddress = document.createElement("p");
    theAddress.className = "address";
    theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

    // Create the phone number element with a clickable link
    const theNumber = document.createElement("p");
    theNumber.className = "phone";

    const phoneLink = document.createElement("a"); // Create an anchor element
    phoneLink.href = `tel:${hotel.phone}`; // Use the tel: protocol to make the number clickable
    phoneLink.textContent = hotel.phone; // Display the phone number as text

    // Append the anchor link to the phone paragraph
    theNumber.appendChild(phoneLink);

    // Append elements to the section
    mySelection.appendChild(theImage);
    mySelection.appendChild(theName);
    mySelection.appendChild(theAddress);
    mySelection.appendChild(theNumber);

    // Add the section to the parent container
    cards.appendChild(mySelection);
});