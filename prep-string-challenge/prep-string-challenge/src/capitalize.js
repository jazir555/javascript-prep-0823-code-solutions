/* exported capitalize */

function capitalize(word) {
  if (!word) return ''; // handle empty or undefined/null inputs
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
