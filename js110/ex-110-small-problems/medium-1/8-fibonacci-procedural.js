


function fibonacci(num) {
  let fibo = [1, 1];
  if (num > 2) {
    for (let i = 2; i < num; i++) {
      fibo[i] = fibo[i-2] + fibo[i-1];
    }
    return fibo[fibo.length - 1];
  }
  return 1;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(75));