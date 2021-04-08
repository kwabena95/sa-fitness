// FOOTER DATE
const footerdate = () => {
    const date = document.querySelector('.date');
    date.textContent = new Date().getFullYear();
}




// INVOKE
function init() {
    footerdate();
}


// RUN
init();