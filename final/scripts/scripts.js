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



//Modal Dialog Index 

//FIRST BUTTON

const box1Modal = document.getElementById('company-info-modal-1')
const openBox1Btn = document.querySelector('#box-1')
const closeBox1Btn = document.querySelector('#close-btn-1')

openBox1Btn.addEventListener("click", () => {
    box1Modal.showModal();
});

closeBox1Btn.addEventListener("click", () => {
    box1Modal.close();
});

//SECOND BUTTON
const box2Modal = document.getElementById('company-info-modal-2')
const openBox2Btn = document.querySelector('#box-2')
const closeBox2Btn = document.querySelector('#close-btn-2')

openBox2Btn.addEventListener("click", () => {
    box2Modal.showModal();
});

closeBox2Btn.addEventListener("click", () => {
    box2Modal.close();
});




//THIRD BUTTON

const box3Modal = document.getElementById('company-info-modal-3')
const openBox3Btn = document.querySelector('#box-3')
const closeBox3Btn = document.querySelector('#close-btn-3')

openBox3Btn.addEventListener("click", () => {
    box3Modal.showModal();
});

closeBox3Btn.addEventListener("click", () => {
    box3Modal.close();
});


//PRODUCT CARDS 

import { shopProducts } from './products.mjs';

const productCards = document.querySelector('.cards-wrapper');

try {
    async function getProductData() {
        const response = await fetch(shopProducts)
        const data = await response.json();
        displayProductCards(data.products)

    }

    getProductData()


    const displayProductCards = (products) => {

        products.forEach(product => {
            //creating card elements 
            const productCardsHTML = document.createElement('div')
            productCardsHTML.classList.add('product-card')
            const productCardTitle = document.createElement('h3')
            const productImg = document.createElement('img')
            const productCardButton = document.createElement('button')
            const productInfo = document.createElement('span')
            const productCategory = document.createElement('h4')

            //adding content to the cards 


            productCardTitle.textContent = `${product.name}`
            productCategory.textContent = `${product.category}`
            productInfo.textContent = `Sizes: ${product.sizes}`
            productImg.setAttribute('src', `images/${product.image}`)
            productImg.setAttribute('loading', 'lazy')
            productImg.setAttribute('alt', `${product.type}`)
            productCardButton.textContent = `Buy`


            //appending elements to its parent elements

            productCards.appendChild(productCardsHTML)
            productCardsHTML.appendChild(productCardTitle)
            productCardsHTML.appendChild(productCategory)
            productCardsHTML.appendChild(productInfo)
            productCardsHTML.appendChild(productImg)
            productCardsHTML.appendChild(productCardButton)



        });

    }

} catch (error) {
    console.error("Sorry, something went wrong:", error.message);
}