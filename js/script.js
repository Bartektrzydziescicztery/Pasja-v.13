document.addEventListener("DOMContentLoaded", function () {
	let nav = document.querySelector(".navbar");
	let navToggler = document.querySelector(".navbar-toggler");
	let allNavItems = document.querySelectorAll("a.nav-link");
	let mobileNavbar = document.querySelector(".navbar-collapse");

	// cień na menu po scrollowaniu
	function addShadow() {
		if (window.scrollY >= 50) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}
	// cień na menu po kliknięciu w hamburger
	function addShadowToggler() {
		nav.classList.add("shadow-bg");
	}
	// zamyka menu hamburgerowe po kliknięciu w link
	function navbarCollapse() {
		mobileNavbar.classList.remove("show");
	}

	// wywołanie funkcji po kliku i scrollu
	window.addEventListener("scroll", addShadow);
	navToggler.addEventListener("click", addShadowToggler);

	// allNavItems.forEach(item => item.addEventListener("click", navbarCollapse));

	// powyższe działa
	// poniżesze tez działa ale po prostu ma zagniezdzony skrypt
	allNavItems.forEach(item =>
		item.addEventListener("click", () => {
			mobileNavbar.classList.remove("show");
		})
	);
});
