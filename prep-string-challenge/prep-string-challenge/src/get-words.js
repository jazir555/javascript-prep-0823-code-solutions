/* exported getWords */
function getWords(string) {
  const trimmedString = string.trim();

  if (!trimmedString) {
    return [];
  }

  const splitString = trimmedString.split(' ');

  console.log(splitString);

  return splitString;
}
