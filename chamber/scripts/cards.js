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

    // filtering information according to membership level
    const goldSilverMembers = businesses.filter(business => business.membership_levels.name === 'gold' || business.membership_levels.name === 'silver');
    //Asking for random data from goldSilverMembers
    goldSilverMembers.sort(function () {
        return Math.random() - 0.5;
    });
    const twoCards = goldSilverMembers.slice(0, Math.random() > 0.5 ? 3 : 2); // inside this Math.random: Math.random() > 0.5 returns true or false randomly( if true returns 3, if false returns 2)


    twoCards.forEach((business) => {

        let card = document.createElement('section');
        card.classList.add('directory-card');
        let name = document.createElement('h2');
        let addresses = document.createElement('p');
        let webSiteUrl = document.createElement('p');
        let image = document.createElement('img');
        let membershipLevel = document.createElement('p');
        membershipLevel.classList.add('membership-level'); //adding class to style membership level Tag

        name.textContent = `${business.name} `;
        addresses.textContent = `Addresses: ${business.addresses}`;
        webSiteUrl.textContent = `Website: ${business.website_url}`;
        membershipLevel.textContent = `${business.membership_levels.name}`;

        image.setAttribute('src', `images/${business.image}`);
        image.setAttribute('alt', `Image of ${business.image}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(addresses);
        card.appendChild(webSiteUrl);
        card.appendChild(membershipLevel);
        card.appendChild(image);



        directoryCards.appendChild(card);




    });

}
