/* eslint-disable no-else-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
const imageSliderDOM = (() => {
  const window = document.querySelector('#slideshow');
  let isSlideShow = false;
  let myInterval;
  const convertWordtoNumber = (word) => {
    if (word === 'one') {
      return 1;
    } else if (word === 'two') {
      return 2;
    } else if (word === 'three') {
      return 3;
    } else if (word === 'four') {
      return 4;
    } else {
      return 5;
    }
  };
  const circleSelect = (event) => {
    if (event.target.classList.contains('full')) {
      return;
    }
    const circleClass = convertWordtoNumber(event.target.className);
    const currentClass = convertWordtoNumber(window.children[0].getAttribute('id'));
    let difference = circleClass - currentClass;
    if (difference > 0) {
      for (let i = 0; i < difference; i += 1) {
        shiftRight();
      }
    } else {
      difference *= -1;
      for (let j = 0; j < difference; j += 1) {
        shiftLeft();
      }
    }
  };
  const removeActive = () => {
    const circle = document.querySelector('.full');
    circle.classList.remove('full');
  };
  const highlightActive = (number) => {
    const circle = document.querySelector(`.circles > .${number}`);
    circle.classList.add('full');
  };
  const shiftRight = () => {
    const activeImg = window.children[0];
    window.appendChild(activeImg);
    const imgClass = window.children[0].getAttribute('id');
    removeActive();
    highlightActive(imgClass);
  };
  const shiftLeft = () => {
    const activeImg = window.children[4];
    window.prepend(activeImg);
    const imgClass = window.children[0].getAttribute('id');
    removeActive();
    highlightActive(imgClass);
  };
  const carousel = () => {
    if (isSlideShow === false) {
      myInterval = setInterval(shiftRight, 2000);
      isSlideShow = true;
    } else {
      clearInterval(myInterval);
      isSlideShow = false;
    }
  };
  return { circleSelect, shiftRight, shiftLeft, carousel, highlightActive };
})();
export default imageSliderDOM;
