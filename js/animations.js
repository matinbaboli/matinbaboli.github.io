import {animate, inView, stagger} from "motion"


animate("#home-hero-section >  #my-main-info", { x: [20, 0], opacity: [0, 1]}, {duration: 1.5, delay: stagger(0.5)})
animate(".circle-shape-inner", { rotate: 360}, {duration: 5, repeat: Infinity, easing: "linear"} )

inView("#about-description-and-image", (intersectionInfo) => {
    animate(intersectionInfo.target, {y: [100, 0], opacity: [0, 1]}, {
        duration: 1,
        easing: "ease-in-out"
    })
})

inView(".projects-links-container", ({target}) => {
    animate(target.querySelectorAll("#projects-link"), {x: [200, 0], opacity: [0, 1]}, {duration: 1, easing: "ease-in-out", delay: stagger(0.5)})
})

inView(".skill-item-container", ({target}) => {
    animate(target.querySelectorAll(".skill-item"), {opacity: [0, 1]}, {duration: 1, easing: "ease-out", delay: stagger(0.1)})
}, {amount: 0.5})
