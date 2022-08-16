const menuDOM = (() => {
  const returnProperTarget = (event) => {
    if (event.target.classList.contains('list-container')) {
      return event.target;
    }
    return event.target.parentNode;
  };
  const renderMenu = (event) => {
    const container = returnProperTarget(event);
    const menu = container.children[1];
    menu.classList.remove('inactive');
    menu.classList.add('active');
  };
  const removeMenu = (event) => {
    const container = returnProperTarget(event);
    const menu = container.children[1];
    menu.classList.remove('active');
    menu.classList.add('inactive');
  };
  return { renderMenu, removeMenu };
})();

export default menuDOM;
