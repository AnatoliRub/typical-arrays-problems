
exports.min = function min (array) {
  return min.arguments.length == 0 ||  array.length == 0 ? 0 : Math.min(...array);
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
