
exports.min = function min (array) {
  return min.arguments.length == 0 ||  array.length == 0 ? 0 : Math.min(...array)
}

exports.max = function max (array) {
  return max.arguments.length == 0 ||  array.length == 0 ? 0 : Math.max(...array)
}

exports.avg = function avg (array) {
  return avg.arguments.length == 0 ||  array.length == 0 ? 0 : array.reduce( (score, item)=> score + item ) / array.length
}
