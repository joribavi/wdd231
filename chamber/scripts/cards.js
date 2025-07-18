//Index Directory cards Function 
const directory = 'data/business.json';
const directoryCards = document.querySelector('.businesses');

async function getCardData() {
    const response = await fetch(directory)
    const data = await response.json();

    displayCards(data.businesses);

}

getCardData()

const displayCards = (businesses) => {
    businesses.forEach((business) => {

        let card = document.createElement('section');
        card.classList.add('directory-card');
        let name = document.createElement('h2');
        let addresses = document.createElement('p');
        let webSiteUrl = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = `${business.name} `;
        addresses.textContent = `Addresses: ${business.addresses}`;
        webSiteUrl.textContent = `Website: ${business.website_url}`;

        image.setAttribute('src', `images/${business.image}`);
        image.setAttribute('alt', `Image of ${business.image}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(addresses);
        card.appendChild(webSiteUrl);
        card.appendChild(image);


        directoryCards.appendChild(card);




    });

}
