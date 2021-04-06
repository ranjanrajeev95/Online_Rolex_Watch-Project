

function imgSlide(anything) {
	document.querySelector(".rolex").src = anything; 
}

function ChangeBgColor(color) {
	const sec = document.querySelector('.sec');
	sec.style.background = color;
}

function Menutoggle() {
	const toggleMenu = document.querySelector('.toggleMenu');
	const navigation = document.querySelector('.navigation');
	toggleMenu.classList.toggle('active');
	navigation.classList.toggle('active');
}
