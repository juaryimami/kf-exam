import './styles.css';
import { addTask, addGroup } from './modules/add.js';
import { removeTask, removeGroup } from './modules/remove.js';

document.addEventListener('click', (event) => {
  if (event.target && event.target.className === 'add-group-btn') {
    addGroup();
  }
  if (event.target && event.target.className === 'add-slot-btn') {
    addTask(event);
  }
  if (event.target && event.target.className === 'remove-btn1') {
    removeGroup(event);
  }
  if (event.target && event.target.className === 'remove-btn2') {
    removeTask(event);
  }
}, false);
