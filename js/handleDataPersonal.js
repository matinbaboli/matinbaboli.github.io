const projectCardsWraper = document.getElementById("project-cards-wraper")
const projectDetailWraper = document.getElementById("project-details-wraper")
const closeModalBtn = document.getElementById('close-modal-btn')

const ProjectDetailsModal = document.querySelector('.project-info-modal')

async function start() {
    const response = await fetch("../data/personal-projects.json")
    const personalProjects = await response.json()
    createProjectCards(personalProjects)
    openAndCloseDetails()
} 
start()

function createProjectCards(personalProjects) {
    projectCardsWraper.innerHTML = personalProjects.map(item => {
        const {thumbnailImage, englishTitle, farsiTitle} = item
        let title = sessionStorage.language === "en" ? englishTitle: farsiTitle
        // let shortenedTitle = title.substring(0, 8) + "..."
        return `
                <div class="project-card">
                    <img src="${thumbnailImage}" alt="project-preview">
                    <div>
                        <h2>${title}</h2>
                        <p id="text" data-translation-id="more_details">
                            <img src="./icons/arrow-right-icon.svg" alt="arrow">
                        </p>
                    </div>
                </div>
        `
    
    }).join("")

    
}

function openAndCloseDetails() {
    const projectCardNodes = document.querySelectorAll('.project-card')
    const projectCards = Array.from(projectCardNodes)

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            ProjectDetailsModal.showModal()
            ProjectDetailsModal.style.animation = 'modal-open 500ms'
        })
    })
    closeModalBtn.addEventListener('click', () => {
        ProjectDetailsModal.close()
        ProjectDetailsModal.style.animation = 'modal-close 500ms'
    })
    console.log(projectCards)
}
