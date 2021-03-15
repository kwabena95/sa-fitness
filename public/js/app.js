const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');


const showNavbar = () => {
    linksContainer.classList.toggle('show');
};
navToggle.addEventListener('click', showNavbar);