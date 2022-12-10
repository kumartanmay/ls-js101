
function repeatString(str, count) {
  let result = "";
  for(let i = 0; i < count; i += 1) {
    result = result + str;
  }
  return result;
}

console.log(repeatString('ha', 3))