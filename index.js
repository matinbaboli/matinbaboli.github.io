import {en} from "./languages/eng.js"
import {fa} from "./languages/fa.js"

const openMenuButton = document.getElementById("open-menu-btn")
const closeMenuButton = document.getElementById("close-menu-btn")
const navigationMenu = document.getElementById('navbar-links-id')
const languageSelectorBigScreen = document.getElementById('language-selector-big-screen')
const languageSelectorSmallScreen = document.getElementById('language-selector-small-screen')

const projectsLinkExplanation = document.querySelector('.projects-link-explanation')
const bigScreenNavbarLinksContainer = document.querySelector('.navbar-links-big-screen')
const bigScreenNavbarLinks = document.querySelectorAll('.navbar-links-big-screen .hover-effect')
const allTexts = document.querySelectorAll('#text')
const projectsPageLinkNodes = document.querySelectorAll('#projects-link')
const projectsPageLinkArray = Array.from(projectsPageLinkNodes)

if(!sessionStorage.language) {
    sessionStorage.language = false
    languageSelectorBigScreen.checked = false
    languageSelectorSmallScreen.checked = false
} else {
    languageSelectorBigScreen.checked = sessionStorage.language === "true" || false
    languageSelectorSmallScreen.checked = sessionStorage.language === "true" || false
    
}

console.log(languageSelectorBigScreen.checked)

// languageSelectorBigScreen.checked = sessionStorage.language || false

// languageSelectorBigScreen.checked = true

function loadLanguageContent() {
    let translationId;
        allTexts.forEach(text => {
            translationId = text.dataset.translationId
            
            if (sessionStorage.language === "true") {
                text.innerHTML = fa[translationId]
                document.body.style.direction = "rtl"
                bigScreenNavbarLinksContainer.style.direction= "rtl"
                document.body.classList.add("persian-mode")
                // allTexts.forEach(text => {
                    //     text.style.letterSpacing = '1px'
                    //     text.style.fontFamily = 'Noto Sans Arabic'
                    
                    // })
                } else {
                    bigScreenNavbarLinksContainer.style.direction= "ltr"
                    text.innerHTML = en[translationId]
                    document.body.style.direction = "ltr"
                    document.body.classList.remove("persian-mode")
                // allTexts.forEach(text => {
                    // text.style.letterSpacing = '1px'
                    // text.style.fontFamily = 'Akshar'
                    
                // })
            }
    })
}

loadLanguageContent()


languageSelectorBigScreen.addEventListener("change", (e) => { 
    sessionStorage.language = e.target.checked  
    languageSelectorSmallScreen.checked = e.target.checked
    // location.reload()
    loadLanguageContent()
})
languageSelectorSmallScreen.addEventListener("change", (e) => { 
    sessionStorage.language = e.target.checked
    languageSelectorBigScreen.checked = e.target.checked
    loadLanguageContent()
})



projectsPageLinkArray.forEach((link) => {
    let dynamicTextId;
    
    if (link.parentElement.firstElementChild === link){
        dynamicTextId = "official_link_explanation"
    } else {
        dynamicTextId = "personal_link_explanation"
    }
    
    link.addEventListener("mouseover", () => {
        if (languageSelectorBigScreen.checked === true) {
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
    navigationMenu.classList.add('menu-open')
    openMenuButton.style.visibility = 'hidden'
})
closeMenuButton.addEventListener("click", () => {
    navigationMenu.classList.remove('menu-open')
    openMenuButton.style.visibility = 'visible'
})

bigScreenNavbarLinks.forEach(hoveredlink => {
    hoveredlink.addEventListener('mouseover', (e) => {
        bigScreenNavbarLinks.forEach(link => {
            if (e.target === link) {
                link.style.color = 'white'
            } 
            link.classList.add('not-hovered-navbar-link')
        })
    })
    hoveredlink.addEventListener('mouseleave', (e) => {
        bigScreenNavbarLinks.forEach(link => {
            if (e.target === link) {
                link.style.color = ''
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
})







