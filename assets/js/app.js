// FOOTER DATE
const footerdate = () => {
    const date = document.querySelector('.date');
    date.textContent = new Date().getFullYear();
}

// MENU
const menu = () => {
    const toggleBtn = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.nav-items');

    toggleBtn.addEventListener('click', () => {
        navItems.classList.toggle('show-menu');
    });

}

const closeMenu = () => {
    const navItems = document.querySelector('.nav-items');
    const navLinks = document.querySelectorAll('.nav-links');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navItems.classList.remove('show-menu');
        })
    })
}

const scrollLinks = () => {
    const navLinks = document.querySelectorAll('.scroll-link');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.getBoundingClientRect().height;
    const navItems = document.querySelector('.nav-items');
    const navItemsContainer = navItems.getBoundingClientRect().height;
    const toggle = navItems.classList.contains('show-menu');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = e.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);
            let position = element.offsetTop + navbarHeight;

            if (!toggle) {
                position -= navbarHeight;
            }
            if (navbarHeight > 80) {
                position += navItemsContainer
            }

            window.scrollTo({
                left: 0,
                top: position
            })
        })
    })
}

// INVOKE
function init() {
    footerdate();
    menu();
    closeMenu();
    scrollLinks();
}


// RUN
init();