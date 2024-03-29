/*
Write a function that takes a string and returns an object containing three properties: 
one representing the number of characters in the string that are lowercase letters, 
one representing the number of characters that are uppercase letters, 
and one representing the number of characters that are neither.

Examples:
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
*/

function letterCaseCount(str) {
  let strArr = str.split("");
  let count = {lowercase: 0, uppercase: 0, neither: 0}
/*
The solution uses a regex to match alphabets from the arr. When an alphabet is identified, it determines its case.
When the char of strArr is not an alphabet then neither property of count object is incremented by 1.
*/
  strArr.forEach(elem => {
    if (elem.match(/[A-Za-z]/)) {
      if(elem === elem.toLowerCase()) count['lowercase'] += 1;
      else count['uppercase'] += 1;
    } else count['neither'] += 1;
  })

  return count;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));