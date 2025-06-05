const loadinScreen = document.querySelector(".loading-screen")
const main = document.getElementById("main")

let images = [
    "/images/texture35yu2.jpg",
    "/images/my-picture4.jpg",
    "./images/Component.png"
]

let loadedImages = 0

images.forEach((image) => {
    const newImage = new Image()
    newImage.src = image
    newImage.onload = () => {
        loadedImages++
        if(loadedImages === images.length) {
            loadinScreen.classList.add("hide-loading")
            main.style.display = "block"
        }
    }
})