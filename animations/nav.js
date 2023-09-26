
const navbar = document.getElementsByClassName("pc-nav")[0];

window.onscroll = () => {
	const scrollY = window.scrollY;

  	if (scrollY > 1100) {
	  // Désactive la classe nav-active lorsque le défilement est entre 800 et 1200 pixels
	  navbar.classList.remove('nav-active');
	} else if (scrollY > 500) {
	  // Réactive la classe nav-active lorsque le défilement atteint 500 pixels
	  navbar.classList.add('nav-active');
	} else {
	  // Désactive la classe nav-active lorsque le défilement est inférieur à 500 pixels
	  navbar.classList.remove('nav-active');
	}
  };