
const navbar = document.getElementsByClassName("pc-nav")[0];

window.onscroll = () => {
	const scrollY = window.scrollY;
	if (scrollY > 1800) {
		navbar.classList.remove('nav-active-2');
		navbar.classList.add('nav-active-1');
	} else if (scrollY > 1100) {
		navbar.classList.remove('nav-active-1');
		navbar.classList.add('nav-active-2');
	} else if (scrollY > 500) {
		navbar.classList.add('nav-active-1');
		navbar.classList.remove('nav-active-2');
	} else if (scrollY > 1) {
		navbar.classList.add('nav-active-2');
	} else {
		navbar.classList.remove('nav-active-1', 'nav-active-2');
	}
};




//Burger
const menuToggle = document.getElementById("menu-toggle");


const toggleMenu = document.getElementById("toggle-menu");

menuToggle.addEventListener("click", function () {

    if (toggleMenu.style.display === "block") {
        toggleMenu.style.display = "none";
    } else {
        toggleMenu.style.display = "block";
    }
});

const menuItems = document.querySelectorAll("#toggle-menu ul li a");

// Ajoutez un gestionnaire d'événements au clic sur chaque rubrique
menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", function () {
        // Masquez le menu déroulant
        toggleMenu.style.display = "none";
    });
});
	