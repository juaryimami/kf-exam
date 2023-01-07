export const removeTask = (event) => {
  event.target.parentNode.parentNode.parentNode
    .parentNode.removeChild(event.target.parentNode.parentNode.parentNode);
};

export const removeGroup = (event) => {
  event.target.parentNode.parentNode.parentNode
    .parentNode.parentNode.parentNode.removeChild(event.target.parentNode
      .parentNode.parentNode.parentNode.parentNode);
};
