// Animated hamburger menu starts here

let hamburgerdiv = document.querySelector(".hamburger")
let programMenu = document.querySelector(".mobile-program-container")



function toggleClassName() {
    hamburgerdiv.classList.toggle('crossburger')
    programMenu.classList.toggle('show-program')
}

hamburgerdiv.addEventListener("click", toggleClassName)
// Animated hamburger menu ends here