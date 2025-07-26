// Modal Dialog for NP Card

const npModal = document.getElementById('#np-membership-modal')
const openNpBtn = document.querySelector('#np')
const closeNpBtn = document.querySelector('#np-closebtn')

openNpBtn.addEventListener("click", () => {
    npModal.showModal();
});

closeNpBtn.addEventListener("click", () => {
    npModal.close();
});