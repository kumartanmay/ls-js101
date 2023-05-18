/*
Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements 
from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. 
You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

PEDAC:
since both are sorted arrays, we just need to compare the first elements of the arrays.
the first element keeps on changing, as we remove the first element that has been pushed to the resulting array
*/
function merge(array1, array2) {
  let result =[];
  let copyArray1 = array1.slice()
  let copyArray2 = array2.slice()
 
  while(copyArray1.length > 0 && copyArray2.length > 0) {
   if (copyArray1[0] <= copyArray2[0]) {
     result.push(copyArray1[0]);
     copyArray1.shift();
   } else {
     result.push(copyArray2[0]);
     copyArray2.shift();
   }
  }
  
  // if any array has an element left, concat it with resulting array
 
  if(copyArray1.length > 0) {
   result = result.concat(copyArray1);
  } else {
   result = result.concat(copyArray2);
  }
  
 //  console.log(copyArray1);
 //  console.log(copyArray2);
  console.log(result);
  return result;
 }
 
 
 merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
 merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
 merge([], [1, 4, 5]);             // [1, 4, 5]
 merge([1, 4, 5], []);             // [1, 4, 5]