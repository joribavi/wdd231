// Modal Dialog for NP Card

const npModal = document.getElementById('np-membership-modal')
const openNpBtn = document.querySelector('#np')
const closeNpBtn = document.querySelector('#np-closebtn')

openNpBtn.addEventListener("click", () => {
    npModal.showModal();
});

closeNpBtn.addEventListener("click", () => {
    npModal.close();
});


// Modal Dialog for Bronze Card

const bronzeModal = document.getElementById('bronze-membership-modal')
const openBronzeBtn = document.querySelector('#bronze')
const closeBronzeBtn = document.querySelector('#bronze-closebtn')

openBronzeBtn.addEventListener("click", () => {
    bronzeModal.showModal();
});

closeBronzeBtn.addEventListener("click", () => {
    bronzeModal.close();
});


// Modal Dialog for Silver Card

const silverModal = document.getElementById('silver-membership-modal')
const openSilverBtn = document.querySelector('#silver')
const closeSilverBtn = document.querySelector('#silver-closebtn')

openSilverBtn.addEventListener("click", () => {
    silverModal.showModal();
});

closeSilverBtn.addEventListener("click", () => {
    silverModal.close();
});


// Modal Dialog for Gold Card

const goldModal = document.getElementById('gold-membership-modal')
const openGoldBtn = document.querySelector('#gold')
const closeGoldBtn = document.querySelector('#gold-closebtn')

openGoldBtn.addEventListener("click", () => {
    goldModal.showModal();
});

closeGoldBtn.addEventListener("click", () => {
    goldModal.close();
});





