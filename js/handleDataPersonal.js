import {en} from "../languages/eng.js"
import {fa} from "../languages/fa.js"
import personalProjects from "../data/personal-projects.json"


const projectCardsWraper = document.getElementById("project-cards-wraper")

const ProjectDetailsModal = document.querySelector('.project-info-modal')


function start() {
    // const response = await fetch("../data/personal-projects.json")
    // const personalProjects = await response.json()
    console.log(personalProjects)
    createProjectCards()
    openAndCloseDetails()
} 
start()

function createProjectCards() {
    const fixed = new URL("../public/icons/arrow-right-icon.svg", import.meta.url)
    projectCardsWraper.innerHTML = personalProjects.map(item => {
        const {thumbnailImage, englishTitle, farsiTitle, id} = item
        let title = sessionStorage.language === "en" ? englishTitle: farsiTitle
        // console.log(thumbnailImage)
        // let shortenedTitle = title.substring(0, 8) + "..."
        return `
                <div id="${id}" class="project-card">
                    <img src="${thumbnailImage}" alt="project-preview">
                    <div>
                        <h2 id="dynamic-text" data-translation-id="blank">${title}</h2>
                        <p id="text" data-translation-id="more_details">
                            <img src=${fixed} alt="arrow">
                        </p>
                    </div>
                </div>
        `
    
    }).join("")
    addDynamicText()

    
}

function openAndCloseDetails() {
    const projectCardNodes = document.querySelectorAll('.project-card')
    const projectCards = Array.from(projectCardNodes)

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            ProjectDetailsModal.showModal()
            ProjectDetailsModal.style.animation = 'modal-open 500ms'
            let projectId = Number(e.currentTarget.id)
            handleModalDataForEachCard(projectId)

        })
    })
    // closeModalBtn.addEventListener('click', () => {
    //     ProjectDetailsModal.close()
    //     ProjectDetailsModal.style.animation = 'modal-close 500ms'
    // })
    // console.log(projectCards)
}

function handleModalDataForEachCard(projectId) {
    let filteredProjects = personalProjects.filter(item => item.id === projectId)
    let {showcaseImages, englishTitle, englishDescription, farsiTitle, farsiDescription, technologies, projectLink} = filteredProjects[0]
    let title = sessionStorage.language === "en" ? englishTitle: farsiTitle
    let description = sessionStorage.language === "en" ? englishDescription: farsiDescription

    ProjectDetailsModal.innerHTML = `
            <button id="close-modal-btn">
                <img src="./public/icons/navbar-icons/close-icon.svg" alt="close-modal">
            </button>
            <div class="project-modal-content-wraper">
            <h2 id="dynamic-text" data-translation-id="blank">${title}</h2>
                <div id="project-details-wraper">
                    <p id="dynamic-text" data-translation-id="blank" class="project-description">${description}</p>
                    <aside class="project-details">
                        <div class="technologies-wraper">
                            <h3 id="dynamic-text" data-translation-id="technologies"></h3>
                            <div>
                                ${technologies.map(item => {
                                    return `<p id="technologie-item">${item}</p>` 
                                }).join("")}
                            </div>
                        </div>
                        <a href="${projectLink}" target="_blank" id="dynamic-text" data-translation-id="view_project"
                            class="btn-primary btn-primary-small"></a>
                    </aside>
                    ${showcaseImages.map(item => {
                        return `<img src="${item}" alt="project-preview">`
                    }).join("")}
                    
                </div>
            </div>

    `
    const closeModalBtn = document.getElementById('close-modal-btn')


    closeModalBtn.addEventListener('click', () => {
        ProjectDetailsModal.close()
        ProjectDetailsModal.style.animation = 'modal-close 500ms'
    })
    addDynamicText()
    
}

function addDynamicText() {
    const allTexts = document.querySelectorAll('#dynamic-text')
    let translationId

    allTexts.forEach(text => {
        translationId = text.dataset.translationId
        
        if (sessionStorage.language === "fa") {
            text.innerHTML += fa[translationId]

            allTexts.forEach(text => {
                text.style.letterSpacing = '1px'
                text.style.fontFamily = 'Noto Sans Arabic'                
            })
        } else {
            text.innerHTML += en[translationId]
        }
    })
    // console.log("clicked")
}
