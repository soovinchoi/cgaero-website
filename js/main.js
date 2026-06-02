// CG Aero Corp Scroll Animation


const fadeElements = document.querySelectorAll('.fade-up');


const observer = new IntersectionObserver(

(entries) => {


entries.forEach(entry => {


if (entry.isIntersecting) {


entry.target.classList.add('show');


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




// Smooth header effect while scrolling


const header = document.querySelector('header');


window.addEventListener('scroll', () => {


if (window.scrollY > 50) {


header.classList.add('scrolled');


} else {


header.classList.remove('scrolled');


}


});
