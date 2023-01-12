const hamburger = document.querySelector(".hamburger-menu");
const sidebarTop = document.querySelector('.sidebar-top');
const slider = document.querySelector('.slider-pane');
const darkSlide = document.querySelector('.dark-page');


hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('active');
    sidebarTop.classList.toggle('active');
    slider.classList.toggle('active');
    darkSlide.classList.toggle('active');

})
