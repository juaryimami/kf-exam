import { setDataLocalStorage, getDataLocalStorage } from './store.js';
import { refreshIndex, renderTaskDom } from './render.js';
import { refreshDragDropTarget } from './drag-drop.js';
import { refreshDescriptions } from './description.js';

const bundleRefreshHandlersAndUpdate = (listOfTask) => {
  refreshIndex(listOfTask);
  setDataLocalStorage(listOfTask);
  renderTaskDom();
  refreshDragDropTarget();
  refreshDescriptions();
};

export const removeTask = (event) => {
  event.target.parentNode.parentNode.parentNode
    .parentNode.removeChild(event.target.parentNode.parentNode.parentNode);
};

export const removeGroup = (event) => {
  event.target.parentNode.parentNode.parentNode
    .parentNode.parentNode.parentNode.removeChild(event.target.parentNode
      .parentNode.parentNode.parentNode.parentNode);
};

export const removeTaskChecked = () => {
  const listTasks = getDataLocalStorage();
  if (listTasks !== []) {
    const newListTask = listTasks.filter((task) => task.status === false);
    bundleRefreshHandlersAndUpdate(newListTask);
  }
};

export const removeAllTask = () => {
  const listTasks = [];
  setDataLocalStorage(listTasks);
  renderTaskDom();
};
