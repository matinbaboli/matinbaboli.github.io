const openMenuButton = document.getElementById("open-menu-btn")
const closeMenuButton = document.getElementById("close-menu-btn")
const navbarLinks = document.getElementById('navbar-links-id')
// console.log(menuButton.firstElementChild)


openMenuButton.addEventListener("click", () => {
    navbarLinks.classList.add('menu-open')
    openMenuButton.style.visibility = 'hidden'
})
closeMenuButton.addEventListener("click", () => {
    navbarLinks.classList.remove('menu-open')
    openMenuButton.style.visibility = 'visible'
})
// console.log(menuOpen)