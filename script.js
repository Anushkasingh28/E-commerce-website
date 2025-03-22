const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');

ham.addEventListener('click',()=>{
    nav.classList.toggle('active');
})

// Scrolling animation
window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    if (window.scrollY > 50){
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
    }
});  // yha tk ka code (scrolling animation) isliye h taki jb hm screen 50 se jyada scroll krenge to navbar ka color green ho jaiga aur jo scrolled h ise hmne css m styling kiya h whi apply ho rha h [nav.scrolled]


//  Testimonial js

let slideIndex = 1;
showSlies(slideIndex);

function plusSlide(n){
    showSlies(slideIndex += n);
}
function currentSlide(n){
    showSlies(slideIndex = n);
}

function showSlies(n) {
    const slides = document.getElementsByClassName("testimonial-slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length){
        slideIndex = 1
    }

    // ye function aage ki trf aane ke liye yani click krne pr aage jaiga
    if (n < 1){
        slideIndex = slides.length
    }

    for(let i=0; i < slides.length; i++){
        slides[i].classList.remove("active")
    }

    for(let i=0; i < dots.length; i++){
        dots[i].classList.remove("active")
    }

    // ye function piche ki trf jane ke liye yani click krne pr aage jaiga
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

// event listener
// in dono line se arrow button pr click krne se slide hoga
document.querySelector('.pre').addEventListener('click',() => plusSlide(-1));
document.querySelector('.next').addEventListener('click',() => plusSlide(1));

// Isse dot pr click krne se slide hoga
document.querySelectorAll('.dot').forEach((dot, index)=>{
    dot.addEventListener('click', () => currentSlide(index + 1));
})

