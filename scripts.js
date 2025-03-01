document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('#color_mode');
    const body = document.body;
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        nav.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            nav.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            nav.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.querySelector(".menu-container");
    const navButton = document.querySelector(".nav-button");

    navButton.addEventListener("click", function () {
        menuContainer.classList.toggle("active");
    });
});

// Selectăm butonul de MENU și meniul lateral
const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

// Când se apasă pe MENU, meniul apare
menuButton.addEventListener("click", () => {
    sideMenu.classList.add("active");
});

// Când se apasă pe "X", meniul se închide
closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("active");
});

// Dacă utilizatorul dă click în afara meniului, îl închidem
document.addEventListener("click", (event) => {
    if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
        sideMenu.classList.remove("active");
    }
});