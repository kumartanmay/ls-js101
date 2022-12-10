let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';
let string4 = 'Polar mole';

function isEqualStrings(string1, string2) {
  if(string1.length === string2.length) {
    for(let i = 0; i < string1.length; i += 1) {
      if (string1[i].toLowerCase() !== string2[i].toLowerCase()) {
        return "Strings are NOT equal";
      }
    }
    return "Strings are equal!"
    }
  return "Strings not equal length"
}
console.log(isEqualStrings(string3, string1));