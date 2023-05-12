/*
Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. 
The sorting should be done "in-place" — that is, the function should mutate the array. 
You may assume that the array contains at least two elements.

Rule:
On each iteration of the array, two consecutive elements are compared.
if first is greater than second, then swap
The process is repeated until the whole iteration of the array goes without making any swap

Algo:
Store a count of swap that resets to zero at every pass
If count of swap is zero in any pass, then sorting is considered complete

*/

function bubbleSort(array) {
  let swapCount = 0;
  // compare two consecutive elements of an array
  // if first is greater than second, swap their positions

  for(let i = 1; i < array.length; i++) {
    if(array[i - 1] > array[i]) {
      let temp = array[i-1];
      array[i-1] = array[i];
      array[i] = temp;
      swapCount++;
    }
  }

  if (swapCount > 0) bubbleSort(array);
  return array;
}

console.log(bubbleSort([5, 3]));
console.log(bubbleSort([6,2,7,1,4]));
console.log(bubbleSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));