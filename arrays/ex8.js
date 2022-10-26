/*
Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. 
Instead, try to use the reduce method.

let strings = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
*/

let strings = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let arrLength = [];
  arr.forEach(element => arrLength.push(element.length))

  let result = arrLength.reduce((prev, curr) => {
    if(curr % 2 > 0) {
      prev.push(curr)
    }
    return prev;
  }, []);
  
  return result;
}

console.log(oddLengths(strings));

//console.log(oddLengths); // => [1, 5, 3]