/*--- MOSTRAR MENU EM DISPOSITIVO MOBILE ---*/
const navMenu = document.getElementById('navMenuHeader'),
    navToggle = document.getElementById('nav-Toggle'),
    navClose = document.getElementById('navCloseOff')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('navShow')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('navShow')
    })
}

const navLink = document.querySelectorAll('.navLink')
const linkAction = () => {
    const navMenu = document.getElementById('headerNavMenu')
    navMenu.classList.remove('navShow')
}

/*--- SCROLL UP ---*/
window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("showScroll");
    else scrollUp.classList.remove("showScroll");
})

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scrollHeader");
    else header.classList.remove("scrollHeader");
})