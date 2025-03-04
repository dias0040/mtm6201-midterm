const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

let skipLink = document.querySelector('.skip-link');
let mainContent = document.getElementById('main-content');
let atTop = true;  // Flag to track if we are at the top of the page

skipLink.addEventListener('click', function() {
    if (atTop) {
        // Scroll down to the main content
        window.scrollTo({
            top: mainContent.offsetTop,
            behavior: 'smooth'
        });
        skipLink.textContent = "Back to top";  // Change the link text
    } else {
        // Scroll back to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        skipLink.textContent = "Skip to content";  // Change the link text
    }

    // Toggle the atTop flag
    atTop = !atTop;
});
