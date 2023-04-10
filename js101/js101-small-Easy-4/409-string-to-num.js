function stringToInteger(str) {
  return +str;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("-570") === -570); // logs true
console.log(stringToInteger("+170") === 170); // logs true

function hexadecimalToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };
  let arrayOfDigits = str.split("").map(elem => DIGITS[elem.toLowerCase()]);
  //console.log(arrayOfDigits);
  let value = 0;
  arrayOfDigits.forEach(elem => value = value * 16 + elem)
  return value;
}

console.log(hexadecimalToInteger('4D9f')); // 19871