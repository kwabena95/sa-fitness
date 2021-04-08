// FOOTER DATE
const footerdate = () => {
    const date = document.querySelector('.date');
    date.textContent = new Date().getFullYear();
}

// MODAL
const modal = () => {
    const openBtn = document.querySelector('.left-panel-cta');
    const closeBtn = document.querySelector('.modal .submit-cta');
    const modalContainer = document.querySelector('.modal');

    openBtn.addEventListener('click', () => {
        modalContainer.classList.add('show-modal');
    });
    closeBtn.addEventListener('click', () => {
        modalContainer.classList.remove('show-modal');
    });
}


// INVOKE
function init() {
    footerdate();
    modal();
}


// RUN
init();