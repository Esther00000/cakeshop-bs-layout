// icon
import "@fortawesome/fontawesome-free/js/all.js";
//swiper
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";
import AOS from "aos";
import "aos/dist/aos.css";
// Import all of Bootstrap's JS
import "./style/style.scss";
import * as bootstrap from "bootstrap";
// init Swiper:
const swiper = new Swiper(".productsSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      navigation: {
        nextEl: ".productsSwiper-button-next",
        prevEl: ".productsSwiper-button-prev",
      },
    },
    992: {
      slidesPerView: 3,
    },
  },
});
//AOS
AOS.init({
  delay: 400, // values from 0 to 3000, with step 50ms
  duration: 800,
});
