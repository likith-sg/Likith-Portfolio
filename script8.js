document.addEventListener('DOMContentLoaded', function () {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("project-slide");
        var dots = document.getElementsByClassName("dot");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        setTimeout(showSlides, 2000);
    }

    document.getElementById('downloadButton').addEventListener('click', function () {
        var link = document.createElement('a');
        link.href = 'My Resume.pdf';
        link.download = 'My Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert('Downloading document...');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.style.backgroundColor = '#ffffff';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
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
});
