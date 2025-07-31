//Activity cards Function 
const economicActivities = 'data/activities.json';
const activityCards = document.querySelector('.activity-cards-wrapper');







async function getActivityData() {
    const response = await fetch(economicActivities)
    const data = await response.json();

    displayActivityCards(data.activities);

}

getActivityData()

const displayActivityCards = (activities) => {

    activities.forEach(activity => {

        //creating elements for each card
        const activityCardsHTML = document.createElement('div')
        activityCardsHTML.classList.add('activity-card')
        const activityCardTitle = document.createElement('h2')
        const cardFigure = document.createElement('figure')
        const cardImg = document.createElement('img')
        const cardParagraph = document.createElement('p')
        const cardButton = document.createElement('button')

        //adding content to cards

        activityCardTitle.textContent = `${activity.name}`
        cardImg.setAttribute('src', `images/${activity.image}`)
        cardParagraph.textContent = `${activity.description}`
        cardButton.textContent = `Learn More`

        //loading lazy attribute for images
        cardImg.setAttribute('loading', 'lazy');

        //appending elements to its parent elements

        activityCardsHTML.appendChild(activityCardTitle)
        activityCardsHTML.appendChild(cardFigure)
        cardFigure.appendChild(cardImg) //appending img to figure , not directly to card
        activityCardsHTML.appendChild(cardParagraph)
        activityCardsHTML.appendChild(cardButton)



        //appending cards to the html element before creation of the function

        activityCards.appendChild(activityCardsHTML)




    });





}

