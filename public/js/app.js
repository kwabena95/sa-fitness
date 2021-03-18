const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navBar = document.querySelector('#nav');
const scrollLinks = document.querySelectorAll('.scroll-link');
const footerDate = document.querySelector('footer span');



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

// move active class to the next link
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const active = document.querySelector('.active');

        if (!e.currentTarget.classList.contains('active')) {
            link.classList.add('active')
        }
        if (e.currentTarget !== active) {
            active.classList.remove('active');
        }

    });

});

// smooth scroll
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // prevent default
        e.preventDefault();

        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixednav = navBar.classList.contains('fixed-nav');
        let positon = element.offsetTop - navHeight;


        if (!fixednav) {
            positon = positon - navHeight;
        }
        if (navHeight > 50) {
            positon = positon + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: positon
        });

    })
})
navToggle.addEventListener('click', showNavbar);

// current footer date
footerDate.textContent = new Date().getFullYear();