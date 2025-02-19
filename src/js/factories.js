/**
 * @param {string} text
 * @return {import('../types/types.js').ProtoToDo}
 */
export const todoFactory = (text) => ({
  text,
  completed: false,
  editing: false,
});
