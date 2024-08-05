import {en} from "./languages/eng.js"
import {fa} from "./languages/fa.js"

const openMenuButton = document.getElementById("open-menu-btn")
const closeMenuButton = document.getElementById("close-menu-btn")
const navbarLinks = document.getElementById('navbar-links-id')
const closeModalBtn = document.getElementById('close-modal-btn')
const languageSelectorBigScreen = document.getElementById('language-selector-big-screen')
const languageSelectorSmallScreen = document.getElementById('language-selector-small-screen')

const projectsLinkExplanation = document.querySelector('.projects-link-explanation')
const ProjectDetailsModal = document.querySelector('.project-info-modal')
const allTexts = document.querySelectorAll('#text')
const bigScreenNavbarLinks = document.querySelectorAll('.navbar-links-big-screen .hover-effect')
const projectCard = document.querySelectorAll('.project-card')
const projectsPageLinkNodes = document.querySelectorAll('#projects-link')
const projectsPageLinkArray = Array.from(projectsPageLinkNodes)

// console.log(en)

languageSelectorBigScreen.value = sessionStorage.localeValue || "en"
languageSelectorSmallScreen.value = sessionStorage.localeValue || "en"
let translationId
allTexts.forEach(text => {
    translationId = text.dataset.translationId
    
    if (sessionStorage.localeValue === "fa") {
        text.innerHTML += fa[translationId]
        document.body.style.direction = "rtl"
        allTexts.forEach(text => {
            text.style.letterSpacing = '1px'
            text.style.fontFamily = 'Noto Sans Arabic'

        })
    } else {
        text.innerHTML += en[translationId]
        document.body.style.direction = "ltr"
    }
})

languageSelectorBigScreen.addEventListener("change", (e) => { 
sessionStorage.localeValue = e.target.value 
location.reload()
})
languageSelectorSmallScreen.addEventListener("change", (e) => { 
sessionStorage.localeValue = e.target.value 
location.reload()
})



projectsPageLinkArray.forEach((link) => {
    let dynamicTextId;

    if (link.parentElement.firstElementChild === link){
        dynamicTextId = "official_link_explanation"
    } else {
        dynamicTextId = "personal_link_explanation"
    }

    link.addEventListener("mouseover", () => {
        if (languageSelector.value === "fa") {
        projectsLinkExplanation.textContent = fa[dynamicTextId]
        } else {
        projectsLinkExplanation.textContent = en[dynamicTextId]
        }

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

bigScreenNavbarLinks.forEach(hoveredlink => {
    hoveredlink.addEventListener('mouseover', (e) => {
        bigScreenNavbarLinks.forEach(link => {
            if (e.target === link) {
                link.style.color = 'white'
                console.log('not')
            } 
            link.classList.add('not-hovered-navbar-link')
        })
    })
    hoveredlink.addEventListener('mouseleave', (e) => {
        bigScreenNavbarLinks.forEach(link => {
            if (e.target === link) {
                link.style.color = ''
                console.log('not')
            } 
            
            link.classList.remove('not-hovered-navbar-link')
        })
    })
})

const checkpoint = 300
let opacity
window.addEventListener('scroll', () => {
    const scrolledAmount = window.pageYOffset
    if (scrolledAmount <= checkpoint) {
        opacity = 1 - scrolledAmount / checkpoint
    }
    else {
        opacity = 0
    }
        document.querySelector('.hero-background-image-wraper').style.opacity = opacity
    document.querySelector('.hero-shapes-container').style.opacity = opacity
})

projectCard.forEach(card => {
    card.addEventListener('click', () => {
        ProjectDetailsModal.showModal()
        ProjectDetailsModal.style.animation = 'modal-open 500ms'
    })
})
closeModalBtn.addEventListener('click', () => {
    ProjectDetailsModal.close()
    ProjectDetailsModal.style.animation = 'modal-close 500ms'
})



