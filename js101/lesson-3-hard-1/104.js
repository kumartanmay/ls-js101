/*
IP Address

Check whether the input is a valid IP.

Assume: All the dot separated values are either alphabets or non-negative numbers
*/
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  //console.log(dotSeparatedWords)
  if (dotSeparatedWords.length === 4) {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      //console.log(`${word} is an IP: ${isAnIpNumber(word)}`);
      if (!isAnIpNumber(word)) {
        return false;
      }
    } return true;
  } else return false;
}
console.log(isDotSeparatedIpAddress("1.2.3.4"));
console.log(isDotSeparatedIpAddress("1.2.3"));
console.log(isDotSeparatedIpAddress("1.2.0.5"));
console.log(isDotSeparatedIpAddress("1.2.a.4"));
console.log(isDotSeparatedIpAddress("1.2.3.a"));
console.log(isDotSeparatedIpAddress("257.2.3.4"));
//console.log(Number.isInteger("a"));
//console.log(isAnIpNumber("12"));