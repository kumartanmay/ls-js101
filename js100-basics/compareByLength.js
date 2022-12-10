function compareByLength(str1, str2) {
  if (str1.length < str2.length) return -1;
  if (str1.length > str2.length) return 1;
  return 0;
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0