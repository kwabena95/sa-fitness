const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navBar = document.querySelector('#nav');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const slides = document.querySelectorAll('.slide');


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

// video slider
const nextSlide = () => {
    // get current slide element
    const current = document.querySelector('.current');
    // remove current class from slide
    current.classList.remove('current');
    if (current.nextElementSibling) {
        // add to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // add current to first slide
        slides[0].classList.add('current');
    }
}

const prevSlide = () => {
    // get current slide element
    const current = document.querySelector('.current');
    // remove current class from slide
    current.classList.remove('current');
    if (current.previousElementSibling) {
        // add to next sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // add current to first slide
        slides[slides.length - 1].classList.add('current');
    }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
navToggle.addEventListener('click', showNavbar);
