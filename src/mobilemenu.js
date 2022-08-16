/* eslint-disable no-unused-vars */
const mobileMenuDOM = (() => {
  const mobileDropDown = document.querySelector('#mobile-dropdown-menu');
  const returnProperTarget = (event) => {
    if (event.target.classList.contains('mobile-container')) {
      return event.target;
    }
    return event.target.parentNode;
  };
  const removeMobileMenu = () => {
    if (mobileDropDown.classList.contains('inactive')) {
      return;
    }
    const active = document.querySelector('.clicked');
    active.classList.remove('clicked');
    mobileDropDown.classList.remove('active');
    mobileDropDown.classList.add('inactive');
    mobileDropDown.textContent = '';
  };
  const renderMobileMenu = (event) => {
    if (mobileDropDown.classList.contains('active')) {
      removeMobileMenu();
    }
    const container = returnProperTarget(event);
    container.classList.add('clicked');
    mobileDropDown.classList.remove('inactive');
    mobileDropDown.classList.add('active');
    mobileDropDown.textContent = container.children[0].textContent;
  };
  return { renderMobileMenu, removeMobileMenu };
})();

export default mobileMenuDOM;
