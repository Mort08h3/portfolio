window.addEventListener("load", showSlides);

let slideIndex = 0;

function showSlides() {
    console.log("showSlides");
    let i;

    let slides = document.querySelectorAll(".slideshow");
    let dots = document.querySelectorAll(".dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide");
        slides[i].classList.remove("fade");
        dots[i].classList.remove("active");
    }

    slideIndex++;


    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].classList.remove("hide");
    slides[slideIndex - 1].classList.add("fade");
    dots[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3500);
}
