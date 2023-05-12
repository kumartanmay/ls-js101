function fibonacci(nth) {
  let fibo = {1: 1, 2: 1};
  if (nth > 2) {
    for(let i = 3; i <= nth; i++) {
      fibo[i] = fibo[i-1] + fibo[i-2];
    }
  }

  return fibo[Object.keys(fibo).length.toString()];
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(20));
console.log(fibonacci(200));