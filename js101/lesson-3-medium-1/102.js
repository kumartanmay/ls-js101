/*
let munstersDescription = "The Munsters are creepy and spooky.";

Return a new string that swaps the case of all of the letters:
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`
*/

const munstersDescription = "The Munsters are creepy and spooky.";
const munstersLength = munstersDescription.length;
const munstersCharSplit = munstersDescription.split("");

let newString = "";

for(let index = 0; index < munstersLength; index++) {
  munstersCharSplit[index] === munstersCharSplit[index].toUpperCase() ? newString += munstersCharSplit[index].toLowerCase() : newString += munstersCharSplit[index].toUpperCase();
}

console.log(newString === `tHE mUNSTERS ARE CREEPY AND SPOOKY.`);