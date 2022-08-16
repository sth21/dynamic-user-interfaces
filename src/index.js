import menuDOM from './dropdownmenu';
import mobileMenuDOM from './mobilemenu';
import imageSliderDOM from './imageslider';

const listContainer = document.querySelectorAll('.list-container');
listContainer.forEach((container) => {
  container.addEventListener('mouseover', menuDOM.renderMenu);
  container.addEventListener('mouseout', menuDOM.removeMenu);
});

const mobileheader = document.querySelectorAll('.mobile-container');
mobileheader.forEach((header) => {
  header.addEventListener('click', mobileMenuDOM.renderMobileMenu);
});

const exit = document.querySelector('.exit');
exit.addEventListener('click', mobileMenuDOM.removeMobileMenu);

const leftBtn = document.querySelector('#left');
leftBtn.addEventListener('click', imageSliderDOM.shiftLeft);

const rightBtn = document.querySelector('#right');
rightBtn.addEventListener('click', imageSliderDOM.shiftRight);

const slideShowBtn = document.querySelector('#slideshow-button');
slideShowBtn.addEventListener('click', imageSliderDOM.carousel);

const circles = document.querySelectorAll('.circles > *');
circles.forEach((circle) => {
  circle.addEventListener('click', imageSliderDOM.circleSelect);
});
