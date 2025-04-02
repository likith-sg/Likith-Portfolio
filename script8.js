document.addEventListener('DOMContentLoaded', function () {
    initializeSlideshow("project-slide", 5000);
    initializeSlideshow("certificate-slide", 2000);
    initializeDownloadButton();
    initializeScrollEffect();
    initializeSmoothScrolling();
});

function initializeSlideshow(slideClass, interval) {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName(slideClass);
        const dots = document.getElementsByClassName("dot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, interval);
    }
}

function initializeDownloadButton() {
    document.getElementById('downloadButton').addEventListener('click', function () {
        var link = document.createElement('a');
        link.href = 'Likith_SG_Resume.pdf';
        link.download = 'Likith_SG_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert('Downloading document...');
    });
}

function initializeScrollEffect() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.style.backgroundColor = '#ffffff';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
}

function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}
