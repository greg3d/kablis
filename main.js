import "aos/dist/aos.css"
import "./fonts.scss"
import "bulma/bulma.scss"
import "./main.scss"


import "@fancyapps/ui/dist/carousel/carousel.css"
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css"
import {Carousel} from "@fancyapps/ui"
import {Autoplay} from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js"


document.addEventListener("DOMContentLoaded", () => {
    setBurger()
    stickyMenu()
    mainCarousel()
})

const mainCarousel = () => {

    const container = document.getElementById("mainCarousel")
    if (container) {
        new Carousel(
            container,
            {
                infinite: true,
                Dots: false,
                transition: "crossfade",
                Navigation: false,
                Autoplay: {
                    timeout: 4000,
                    pauseOnHover: false,
                    showProgress: false
                }
            },
            {Autoplay}
        )
    }

}

const setBurger = () => {
    const burger = document.querySelector(".navbar-burger")
    if (burger) {
        const menu = document.querySelector(".navbar-menu")
        burger.addEventListener("click", () => {
            burger.classList.toggle("is-active")
            menu.classList.toggle("is-active")
        })
    }
}

const stickyMenu = () => {
    const navbar = document.querySelector(".navbar")
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                navbar.classList.add("nav-smaller")
            } else {
                navbar.classList.remove("nav-smaller")
            }
        })
    }
}