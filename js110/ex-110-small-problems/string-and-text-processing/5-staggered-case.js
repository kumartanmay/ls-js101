/*
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. 
Every other character, starting from the first, should be capitalized and should be followed by a lowercase or 
non-alphabetic character. 
Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch 
between upper and lower case.

Examples:
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
*/

// convert into an array of characters containing it
// all even indexed should be in uppercase, if it is an alphabet
// all odd indexed should be in lowercase, if it is an aplhabet

function staggeredCase(str) {
  let strArr = str.split("");

  let staggeredArr = strArr.map((elem, index) => {
    if(index % 2 === 0) elem = elem.toUpperCase()
    else elem = elem.toLowerCase();
    return elem;
  });

  console.log(staggeredArr.join(""));
}

staggeredCase('ignore 77 the 4444 numbers');
staggeredCase('ALL_CAPS');
staggeredCase('I Love Launch School!');