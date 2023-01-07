export const groupCounter = () => {
  const items = [...document.querySelector('.group-container').children];
  return items.length;
};
export const slotCounter = (event) => {
  const items = [...event.target.parentNode.parentNode.firstElementChild.children];
  return items.length;
};
