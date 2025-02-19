/**
 * @param {unknown} unsafe
 * @returns {string}
 */
export const escapeHtml = (unsafe) => {
  return String(unsafe)
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};
