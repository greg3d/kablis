import "aos/dist/aos.css"
import "./fonts.scss"
import "bulma/bulma.scss"
import "./main.scss"

// import Swiper JS
import Swiper from 'swiper';
import Rellax from 'rellax';
import {Autoplay, EffectFade} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


document.addEventListener("DOMContentLoaded", () => {
    setBurger()
    stickyMenu()
    mainCarousel()
    effects()
})

const effects = () => {
    new Rellax('.parallaxed');
}

const mainCarousel = () => {
    const swiper = new Swiper('.carousel', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        modules: [Autoplay, EffectFade],
        pagination: false,
        navigation: false,
        effect: "fade",
        speed: 5000,
        autoplay: {
            delay: 4000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
        }
    });
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