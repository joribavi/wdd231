//Activity cards Function 
const economicActivities = 'data/activities.json';







async function getActivityData() {
    const response = await fetch(economicActivities)
    const data = await response.json();

    displayActivityCards(data.activities);

}

getActivityData()

const displayActivityCards = (activity) => {

    const activityCards = document.querySelector('.activity-cards-wrapper');
    //const activityCardContainer = document.createElement('div')
    //activityCardContainer.classList.add('activity-card')
    //  activityCards.appendChild(activityCardContainer)

    const activityCardsHTML = ` 
      
     <div class="activity-card">
         <h2> ${activity.name}</h2>
         <figure>
             <img src="${activity.image}">
         </figure>
         <p>${activity.description}</p>
         <button>Learn More</button>


     </div>
    
    
    `



    activityCards.appendChild(activityCardsHTML);


}

activity.forEach(displayActivityCards)

