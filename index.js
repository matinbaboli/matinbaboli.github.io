const openMenuButton = document.getElementById("open-menu-btn")
const closeMenuButton = document.getElementById("close-menu-btn")
const navbarLinks = document.getElementById('navbar-links-id')
const projectsLinkExplanation = document.querySelector('.projects-link-explanation')
const projectsPageLinkNodes = document.querySelectorAll('#projects-link')
const projectsPageLinkArray = Array.from(projectsPageLinkNodes)

console.log(projectsPageLinkArray)


projectsPageLinkArray.forEach((link) => {
    let explanationText;

    if (link.parentElement.firstElementChild === link){
        explanationText = 'Through this link you can see the work that i have done for other companies.'
    } else {
        explanationText = 'Through this link you can see the projects that i have done in my spare time. Eather for practice or just for fun :).'
    }

    link.addEventListener("mouseover", () => {
        projectsLinkExplanation.textContent = explanationText
        projectsLinkExplanation.style.visibility = 'visible'
    })
    link.addEventListener('mouseleave', () => {
        projectsLinkExplanation.style.visibility = 'hidden'
    })
})


openMenuButton.addEventListener("click", () => {
    navbarLinks.classList.add('menu-open')
    openMenuButton.style.visibility = 'hidden'
})
closeMenuButton.addEventListener("click", () => {
    navbarLinks.classList.remove('menu-open')
    openMenuButton.style.visibility = 'visible'
})
