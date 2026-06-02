/* ===============================
   CG AERO LUXURY INTERACTIONS
================================ */


// Smooth fade-up animation while scrolling

const fadeElements = document.querySelectorAll(".fade-up");


const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {


if (entry.isIntersecting) {

entry.target.classList.add("show");

}


});


},

{

threshold: 0.15

}

);



fadeElements.forEach(element => {


observer.observe(element);


});







// Premium header shadow on scroll


const header = document.querySelector("header");


window.addEventListener("scroll", () => {


if (window.scrollY > 60) {


header.style.boxShadow =
"0 10px 40px rgba(0,0,0,0.08)";


} else {


header.style.boxShadow =
"none";


}


});







// Luxury image reveal timing


window.addEventListener("load", () => {


document.body.classList.add("loaded");


});
