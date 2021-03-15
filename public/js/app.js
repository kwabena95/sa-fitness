const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navBar = document.querySelector('#nav');

const showNavbar = () => {
    linksContainer.classList.toggle('show');
};

// change navbar on scroll
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navBarHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > navBarHeight) {
        navBar.classList.add('nav-fixed');
    } else {
        navBar.classList.remove('nav-fixed');
    }
});

navToggle.addEventListener('click', showNavbar);
