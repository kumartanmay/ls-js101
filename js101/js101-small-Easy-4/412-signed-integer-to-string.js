function signedIntegerToString(num) {
  // determine the sign of number and store it in an array
  // break number into individual digits and store in another 
  // create an object which converts the integer into string

  let result = [];

  // find the sign of the number
  // store it as the first element of the array
  if (num) {
    if (Math.sign(num) === 1) {
      result.push("+");
    } 

    let array = individualDigits(num);
    for (let i = 0; i < array.length; i++) {
      result.push(array[i]);
    }
    let resultString = result.join("");

    return resultString;

  } else {
    if (Object.is(num,0)) return "0";
    return "-0";
  }
  
}

function individualDigits(num) {
  let str = "" + num;
  return str.split("");
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");