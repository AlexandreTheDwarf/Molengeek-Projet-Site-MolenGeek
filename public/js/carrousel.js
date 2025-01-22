export function carrousel() {
    document.addEventListener("DOMContentLoaded", () => {
        const slides = document.querySelector(".slides");
        const totalSlides = document.querySelectorAll(".slide").length;
        let currentIndex = 0;

        function goToNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides; // Passe à la slide suivante ou revient à la première
            slides.style.transform = `translateX(-${currentIndex * 33}%)`; // Déplace les slides
        }

        // Change de slide toutes les 5 secondes
        setInterval(goToNextSlide, 5000);
    });
}