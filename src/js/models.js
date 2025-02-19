import { escapeHtml } from './utils.js';

/**
 * @param {string} text
 * @return {import('../types/types.js').ProtoToDo}
 */
export const todoFactory = (text) => ({
  text,
  completed: false,
  editing: false,
});

/**
 * @param {import('../types/types.js').ToDo}
 */
export const todoTemplate = (todo) => {
  return `
      <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${
    todo.id
  }" draggable="true">
        <span class="drag-handle">⋮⋮</span>
        <input type="checkbox" class="todo-checkbox" ${
          todo.completed ? 'checked' : ''
        } />
        ${
          todo.editing
            ? `<input class="edit-input" type="text" value="${escapeHtml(
                todo.text
              )}" />`
            : `<span class="todo-text ${
                todo.completed ? 'completed' : ''
              }">${escapeHtml(todo.text)}</span>`
        }
        <button class="delete-button">×</button>
      </li>
    `;
};
