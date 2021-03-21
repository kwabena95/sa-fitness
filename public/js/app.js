// const navToggle = document.querySelector('.nav-toggle');
// const linksContainer = document.querySelector('.links-container');
// const links = document.querySelector('.links');
// const navBar = document.querySelector('#nav');
// const scrollLinks = document.querySelectorAll('.scroll-link');
// const footerDate = document.querySelector('footer span');
// const imageContainer = document.querySelectorAll('.img');
// const prevBtn = document.querySelector('#left-btn');
// const nextBtn = document.querySelector('#right-btn');


// const showNavbar = () => {
//     linksContainer.classList.toggle('show');
// };

// // change navbar on scroll
// window.addEventListener('scroll', () => {
//     const scrollHeight = window.pageYOffset;
//     const navBarHeight = navBar.getBoundingClientRect().height;
//     if (scrollHeight > navBarHeight) {
//         navBar.classList.add('nav-fixed');
//     } else {
//         navBar.classList.remove('nav-fixed');
//     }

// });

// // move active class to the next link
// scrollLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         const active = document.querySelector('.active');

//         if (!e.currentTarget.classList.contains('active')) {
//             link.classList.add('active')
//         }
//         if (e.currentTarget !== active) {
//             active.classList.remove('active');
//         }

//     });

// });

// // smooth scroll
// scrollLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         // prevent default
//         e.preventDefault();

//         // navigate to specific spot
//         const id = e.currentTarget.getAttribute('href').slice(1);
//         const element = document.getElementById(id);

//         const navHeight = navBar.getBoundingClientRect().height;
//         const containerHeight = linksContainer.getBoundingClientRect().height;
//         const fixednav = navBar.classList.contains('fixed-nav');
//         let positon = element.offsetTop - navHeight;


//         if (!fixednav) {
//             positon = positon - navHeight;
//         }
//         if (navHeight > 50) {
//             positon = positon + containerHeight;
//         }

//         window.scrollTo({
//             left: 0,
//             top: positon
//         });

//     })
// })
// navToggle.addEventListener('click', showNavbar);

// // image slider
// const nextSlide = () => {

//     const current = document.querySelector('.current')
//     // remove current class from image container
//     current.classList.remove('current');
//     if (current.nextElementSibling.classList.contains('img')) {
//         current.nextElementSibling.classList.add('current');
//     } else {
//         imageContainer[0].classList.add('current');
//     }
// };


// const prevSlide = () => {

//     const current = document.querySelector('.current')
//     // remove current class from image container
//     current.classList.remove('current');
//     if (current.previousElementSibling) {
//         current.previousElementSibling.classList.add('current');
//     }
//     else {
//         imageContainer[imageContainer.length - 1].classList.add('current');
//     }

// };

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// // current footer date
// footerDate.textContent = new Date().getFullYear();

// hamburger menu
const navSlide = () => {

    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelector('.nav-items');

    hamburger.addEventListener('click', () => {
        navItems.classList.toggle('active');
    });

};

// change navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;


    if (scrollHeight > navbarHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }

});

// footer
const footerDate = () => {
    const date = document.querySelector('footer span');
    date.textContent = new Date().getFullYear();
};

// smooth scrolling
const navScrolling = () => {
    const navLinks = document.querySelectorAll('.nav-link a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // get href of links
            const id = e.currentTarget.getAttribute('href').slice(1)
            const element = document.getElementById(id);

            // get navbar height
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar.getBoundingClientRect().height;
            const fixedNav = navbar.classList.contains('fixed');
            let position = element.offsetTop - navbarHeight;

            if (!fixedNav) position -= navbarHeight;

            window.scroll({
                top: position,
                left: 0
            });

        });
    });
};




const app = () => {
    navSlide();
    footerDate();
    navScrolling();
    // showWorkoutVideos();
    // closeWorkoutVideos();
};

app();



// // show workout videos
// const showWorkoutVideos = () => {
//     const btn = document.querySelector('.btn-show');
//     const videoContainer = document.querySelector('.videos');

//     btn.addEventListener('click', () => {
//         videoContainer.classList.add('display');
//     });

// }

// // close workout videos
// const closeWorkoutVideos = () => {
//     const closeBtn = document.querySelector('.fa-times-circle');
//     const videoContainer = document.querySelector('.videos');
//     closeBtn.addEventListener('click', () => {
//         videoContainer.classList.remove('display');
//     });
// };