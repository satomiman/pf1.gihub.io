document.addEventListener("DOMContentLoaded", () => {
	const hamburger1 = document.getElementById("hamburger1");
	const menu = document.getElementById("menu");

	hamburger1.addEventListener("click", () => {
		hamburger1.classList.toggle("active");
		menu.classList.toggle("active");
	});
});
