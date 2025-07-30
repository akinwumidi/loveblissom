// Countdown implementation starts here
    const targetDate = new Date('August 16, 2025 00:00:00').getTime();

    // Update the countdown every second
    const interval = setInterval(function() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById('countdown').innerHTML =`<span>${days}</span> D <span>${hours}</span> H <span>${minutes}</span> M <span>${seconds}</span> S` ;

      // If the countdown reaches zero, stop the interval and display a message
      if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "";
      }
    }, 1000);
  

// Countdown implementation ends here


// Animated hamburger menu starts here

let hamburgerdiv = document.querySelector(".hamburger");
let navigator = document.querySelector(".program-navigator");
let closehamburger = document.querySelector(".closehamburger");
let hamburger2 = document.querySelector(".hamburger2");
let Showlocation = document.querySelector("#location");
let Giftscontainer = document.querySelector(".gifts-container");
let giftsMenu = document.querySelector("#gifts");
let programMenu = document.querySelector(".mobile-program-container");
let programFoodMenu = document.querySelector(".mobile-program-food-menu");

function toggleVisibility(target) {
    // Hide all containers first
    programMenu.classList.remove('show-program');
    Giftscontainer.classList.remove('show-program');
        programFoodMenu.classList.remove('show-program');


    // Show the selected target
    if (target === 'programMenu') {
        programMenu.classList.add('show-program');


    } else if (target === 'Giftscontainer') {
        Giftscontainer.classList.add('show-program');
    
    } else if (target === 'programFoodMenu') {
        programFoodMenu.classList.add('show-program');
    }

    // Toggle navigator and closehamburger visibility
    const isVisible = programMenu.classList.contains('show-program') || 
                      Giftscontainer.classList.contains('show-program')||programFoodMenu.classList.contains('show-program');
    closehamburger.classList.toggle('show-closehamburger', isVisible);
    navigator.classList.toggle('hide-program-navigator', isVisible);
}

function removeAllAndShowProgram() {
    // Hide both containers and reset UI
    programMenu.classList.remove('show-program');
    programFoodMenu.classList.remove('show-program');
    Giftscontainer.classList.remove('show-program');
    closehamburger.classList.remove('show-closehamburger');
    navigator.classList.remove('hide-program-navigator');
}

// Event Listeners
hamburgerdiv.addEventListener("click", () => toggleVisibility('programMenu'));
hamburger2.addEventListener("click", () => removeAllAndShowProgram());
Showlocation.addEventListener("click", () => toggleVisibility('programFoodMenu'));
giftsMenu.addEventListener("click", () => toggleVisibility('Giftscontainer'));

// Animated hamburger menu ends here

// Swiper implementation starts here

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
});
// Swiper implementation ends here






// Payment cards copy implementation starts here
document.addEventListener("DOMContentLoaded", function () {
    const allowedIds = ['groom-details', 'bride-details'];

    document.querySelectorAll('.copy-btn').forEach(button => {
        const targetId = button.getAttribute('data-target');

        if (allowedIds.includes(targetId)) {
            button.addEventListener('click', function () {
                const textElement = document.getElementById(targetId);

                // Convert innerHTML to clean text (handles <br>)
                const tempElement = document.createElement('div');
                tempElement.innerHTML = textElement.innerHTML;
                const textToCopy = tempElement.innerText;

                if (navigator.clipboard) {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        showNotification(this);
                    }).catch(err => {
                        console.error("Clipboard copy failed:", err);
                    });
                } else {
                    // Fallback for older browsers
                    const textarea = document.createElement('textarea');
                    textarea.value = textToCopy;
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        showNotification(this);
                    } catch (err) {
                        console.error("Fallback copy failed:", err);
                    }
                    document.body.removeChild(textarea);
                }
            });
        }
    });

    function showNotification(button) {
        const notification = button.nextElementSibling;
        notification.classList.add("show");
        setTimeout(() => {
            notification.classList.remove("show");
        }, 2000);
    }
});


// Payment cards copy implementation ends here

