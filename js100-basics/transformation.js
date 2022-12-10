let string = "Captain Ruby";
let newString = ""
for(let i = 0; i < string.length; i+= 1) {
  newString = newString + string[i];
  if (newString === "Captain ") {
    newString = newString + "Javascript";
    break;
  }
}
console.log(newString);