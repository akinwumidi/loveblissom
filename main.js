// Animated hamburger menu starts here

let hamburgerdiv = document.querySelector(".hamburger")
let programMenu = document.querySelector(".mobile-program-container")



function toggleClassName() {
    hamburgerdiv.classList.toggle('crossburger')
    programMenu.classList.toggle('show-program')
}

hamburgerdiv.addEventListener("click", toggleClassName)
// Animated hamburger menu ends here

// Swiper implementation ends here

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true, autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // breakpoints: {
    //     640: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     1024: {
    //         slidesPerView: 4,
    //         spaceBetween: 20,
    //     },
    // },
});
// Animated Hamburger menu ends here