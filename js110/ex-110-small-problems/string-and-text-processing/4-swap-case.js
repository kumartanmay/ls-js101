/*
Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase 
and every uppercase letter changed to lowercase. Leave all other characters unchanged.

Examples:
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
*/

function swapCase(str) {
  let strArr = str.split("");
  let swappedCase = strArr.map(char => {
    if (char === char.toUpperCase()) char = char.toLowerCase();
    else char = char.toUpperCase();
    return char;
  })

  console.log(swappedCase.join(""));
}
swapCase('CamelCase');
swapCase('Tonight on XYZ-TV');