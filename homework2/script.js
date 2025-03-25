
const elCard = document.querySelectorAll('.accordion');

elCard.forEach((card) => {
    const desc =card.querySelector('.desc');
    card.addEventListener('click', () => {
        desc.classList.toggle('card-desc-active');
    });
});
