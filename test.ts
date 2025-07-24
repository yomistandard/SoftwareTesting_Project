import { fireEvent } from '@testing-library/dom';

// Set up DOM
document.body.innerHTML = `
<h1>Task Manager</h1>
<div class="app-container">
  <input id="task-input" type="text" placeholder="Add new task" />
  <button id="add-task-btn">Add Task</button>
  <div class="filters">
    <button data-filter="all" class="filter-btn active">All</button>
    <button data-filter="active" class="filter-btn">Active</button>
    <button data-filter="completed" class="filter-btn">Completed</button>
  </div>
  <ul id="task-list"></ul>
</div>
`;

// Copy script.js logic here or import if modularized
const taskInput = document.getElementById('task-input') as HTMLInputElement | null;
const addTaskBtn = document.getElementById('add-task-btn') as HTMLButtonElement | null;
const taskList = document.getElementById('task-list') as HTMLUListElement | null;
const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-btn');

type Task = {
  id: number;
  text: string;
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
  renderTasks();
}

function addTask() {
  if (!taskInput) return;
  const text = taskInput.value.trim();
  if (text === '') return;
  const task: Task = {
    id: Date.now(),
    text,
    completed: false,
  };
  tasks.push(task);
  saveTasks();
  taskInput.value = '';
  renderTasks();
}
function toggleTask(id: number) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  saveTasks();
  renderTasks();
}

function deleteTask(id: number) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}
}
function updateFilterButtons() {
  filterButtons.forEach(btn => {
    btn.classList.toggle('active', (btn as HTMLButtonElement).dataset.filter === currentFilter);
  });
}

function renderTasks() {
  if (!taskList) return;
  taskList.innerHTML = '';

  let filteredTasks = tasks;
  if (currentFilter === 'active') {
    filteredTasks = tasks.filter(t => !t.completed);
  } else if (currentFilter === 'completed') {
    filteredTasks = tasks.filter(t => t.completed);
  }

  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.dataset.id = String(task.id);

    const span = document.createElement('span');
    span.textContent = task.text;
    span.onclick = () => toggleTask(task.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteTask(task.id);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
// Initialize
loadTasks();
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = (btn as HTMLButtonElement).dataset.filter as 'all' | 'active' | 'completed';
    updateFilterButtons();
    renderTasks();
  });
});
if (addTaskBtn) {
  addTaskBtn.addEventListener('click', addTask);
}
if (taskInput) {
  taskInput.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') addTask();
  });
}

// Tests
// @ts-ignore
test('adds a task', () => {
  // Simulate user interaction
  if (!taskInput || !addTaskBtn || !taskList) throw new Error('Missing elements');
  taskInput.value = 'Test task';
  fireEvent.click(addTaskBtn);
  expect(taskList.children.length).toBe(1);
  expect(taskList.children[0].textContent).toContain('Test task');
});

// @ts-ignore
test('toggles task completion', () => {
  if (!taskList) throw new Error('Missing taskList');
  const firstChild = taskList.children[0] as HTMLLIElement;
  const taskId = parseInt(firstChild.dataset.id!);
  const span = firstChild.querySelector('span');
  if (!span) throw new Error('Missing span');
  fireEvent.click(span);
  expect(firstChild.className).toBe('completed');
});

// @ts-ignore
test('deletes a task', () => {
  if (!taskList) throw new Error('Missing taskList');
  const firstChild = taskList.children[0] as HTMLLIElement;
  const deleteBtn = firstChild.querySelector('.delete-btn');
  if (!deleteBtn) throw new Error('Missing deleteBtn');
  fireEvent.click(deleteBtn);
  expect(taskList.children.length).toBe(0);
});ireEvent.click(taskList.children[0].querySelector('span'));
  expect(taskList.children[0].className).toBe('completed');
});

test('deletes a task', () => {
  const deleteBtn = taskList.children[0].querySelector('.delete-btn');
  fireEvent.click(deleteBtn);
  expect(taskList.children.length).toBe(0);
});