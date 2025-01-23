export function burger(){
    document.addEventListener('DOMContentLoaded', () => {
        const burgerMenu = document.querySelector('.burger-menu');
        const navLinks = document.querySelector('.NavDivTwo');
      
        burgerMenu.addEventListener('click', () => {
          navLinks.classList.toggle('active');
        });
      }); 
}