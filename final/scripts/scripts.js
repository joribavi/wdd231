// Footer Current Year and Last Modified
const currentyear = document.querySelector("#currentyear");

// use the date object
const today = new Date();
currentyear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span> `;


let lastmodified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastmodified.toLocaleString();

//navigation 

const navbutton = document.querySelector("#ham-btn");

const navBar = document.querySelector('#nav-bar');

//toggle the show class off and on

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');

});

//slideshow


import { plusSlides, currentSlide, showSlides } from './slide.mjs';



document.querySelector('.next').addEventListener('click', () => plusSlides(1));
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));

// Para los dots (puntos indicadores)
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
});


