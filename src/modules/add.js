import { renderTaskDom, renderGroup } from './render.js';

export const addTask = (event) => {
  renderTaskDom(event);
};
export const addGroup = () => {
  renderGroup();
};