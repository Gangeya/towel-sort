
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if((!matrix) || (!arguments.length))
    { return [];}

  matrix.forEach((element, i) => {
    if (i % 2 !== 0) {
      result = result.concat(element.reverse());
    } else {
      result = result.concat(element);
    }
  });

  return result;
};
