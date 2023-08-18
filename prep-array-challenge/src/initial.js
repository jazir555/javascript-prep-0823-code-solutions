/* exported initial */

function initial(arr) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i]);
  }
  return result;
}
