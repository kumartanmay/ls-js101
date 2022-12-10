function multiply(x,y) {
  return x * y > Number.MAX_VALUE ? 'process as infinity' : x * y;
}

console.log(multiply(1, 1.7976931348623157e+308))
console.log(multiply(2, 1.7976931348623157e+308))