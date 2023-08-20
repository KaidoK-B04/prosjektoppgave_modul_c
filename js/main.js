// const mainContainer = document.querySelector("#main-container");
// const navButtonHome = document.querySelector("#nav-index-btn");

// navState = "getDetails";
// navigate(
// 	"https://data.norges-bank.no/api/data/REGNET/Q.ARSLONN.BA..CURRY.?format=sdmx-json&startPeriod=2022-03-14&endPeriod=2023-03-14&locale=en"
// );

// SCROLL ANIMATION FOR SECTION TEXT
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
