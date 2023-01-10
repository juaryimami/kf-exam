import { createElement, getElement } from './tools.js';
import { groupCounter, slotCounter } from './itemCounter.js';

const groupContainer = getElement('.group-container');

const fragment = document.createDocumentFragment();
const groupFragment = document.createDocumentFragment();

const createSlotStructure = (event) => {
  const taskContainer = createElement('li');
  taskContainer.setAttribute('draggable', 'true');
  taskContainer.classList.add('slot-content');

  const slotItems = createElement('div');
  slotItems.classList.add('items-2');
  const nameDiv = createElement('div');
  nameDiv.classList.add('slot-name');
  const removeSlot = createElement('div');
  removeSlot.classList.add('rm-btn2');

  const slotTitle = createElement('h3');
  slotTitle.classList.add('slot-title');
  const removeButton = createElement('button');
  removeButton.classList.add('remove-btn2');
  const gName = event.target.dataset.id;

  slotTitle.textContent = `${gName}slot${slotCounter(event) + 1}`;
  removeButton.textContent = '-';

  nameDiv.appendChild(slotTitle);
  removeSlot.appendChild(removeButton);
  slotItems.appendChild(nameDiv);
  slotItems.appendChild(removeSlot);

  taskContainer.appendChild(slotItems);

  fragment.appendChild(taskContainer);
};

const createGroupStructure = () => {
  const gphead = createElement('div');
  gphead.classList.add('header');
  const groupHeader = createElement('div');
  groupHeader.classList.add('group-header');
  const hashtag = createElement('div');
  hashtag.classList.add('hashtag');
  hashtag.textContent = '#';
  const groupSection = createElement('div');
  groupSection.classList.add('group-section');
  groupSection.textContent = 'Group';
  const slotSection = createElement('div');
  slotSection.classList.add('slot-section');
  slotSection.textContent = 'Slot';

  groupHeader.appendChild(hashtag);
  groupHeader.appendChild(groupSection);
  groupHeader.appendChild(slotSection);

  const groupItems = createElement('div');
  groupItems.classList.add('group-items');
  const groupItem1 = createElement('div');
  groupItem1.classList.add('items1');
  const rmbtn1 = createElement('div');
  rmbtn1.classList.add('rm-btn1');
  const removeGroup = createElement('button');
  removeGroup.classList.add('remove-btn1');
  removeGroup.textContent = '-';
  const groupName = createElement('div');
  groupName.classList.add('group-name');
  const groupTitle = createElement('h3');
  groupTitle.classList.add('group-title');
  groupTitle.textContent = `group${groupCounter() + 1}`;

  const slotItems = createElement('div');
  slotItems.classList.add('slot-items');
  const slotItem = createElement('ul');
  slotItem.classList.add('slot-item');
  const slotContent = createElement('li');
  slotContent.classList.add('slot-content');
  const Items = createElement('div');
  Items.classList.add('items-2');
  const slotName = createElement('div');
  slotName.classList.add('slot-name');
  const slotTitle = createElement('h3');
  slotTitle.classList.add('slot-title');
  slotTitle.textContent = `g${groupCounter() + 1}_slot1`;
  const rmvBtn2 = createElement('div');
  rmvBtn2.classList.add('rm-btn2');
  const btn = createElement('button');
  btn.classList.add('remove-btn2');
  btn.textContent = '-';
  const addSlot = createElement('div');
  addSlot.classList.add('add-slot');
  const addSlotButton = createElement('button');
  addSlotButton.classList.add('add-slot-btn');
  addSlotButton.textContent = '+ Add Slot';
  addSlotButton.dataset.id = `g${groupCounter() + 1}_`;

  addSlot.appendChild(addSlotButton);
  slotName.appendChild(slotTitle);
  rmvBtn2.appendChild(btn);
  Items.appendChild(slotName);
  Items.appendChild(rmvBtn2);
  slotContent.appendChild(Items);
  slotItem.appendChild(slotContent);
  slotItems.appendChild(slotItem);
  slotItems.appendChild(addSlot);

  rmbtn1.appendChild(removeGroup);
  groupName.appendChild(groupTitle);
  groupItem1.appendChild(rmbtn1);
  groupItem1.appendChild(groupName);
  groupItems.appendChild(groupItem1);

  const groupContent = createElement('div');
  groupContent.classList.add('group-content');

  groupContent.appendChild(groupItems);
  groupContent.appendChild(slotItems);

  gphead.appendChild(groupHeader);
  gphead.appendChild(groupContent);

  groupFragment.appendChild(gphead);
};

export const renderGroup = () => {
  createGroupStructure();
  groupContainer.appendChild(groupFragment);
};
export const renderTaskDom = (event) => {
  const parentElement = event.target.parentNode;
  const slotContainer = parentElement.parentNode.firstElementChild;
  createSlotStructure(event);
  slotContainer.appendChild(fragment);
};

export const refreshIndex = (listTasks) => {
  listTasks.forEach((task, index) => {
    task.index = index;
  });
};
