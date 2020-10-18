
module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix === undefined) {
    return result;
  }
  matrix.forEach(element => {
    if (matrix.indexOf(element) % 2 === 1){
      element.reverse();
    }
      result = result.concat(element);
  });
  return result;
}
