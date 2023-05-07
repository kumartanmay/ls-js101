/*
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining 
whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; 
they just don't count when toggling the desired case.

Example:
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
*/

function staggeredCase(str, ignoreNonAlpha = true) {
  let strArr = str.split("");

  if (ignoreNonAlpha){
    let nonCharStackIndex = [];
    let charStackIndex = [];

    strArr.forEach((char, index) => {
      if (char.match(/[^A-Za-z]/i)) nonCharStackIndex.push(index);
      else charStackIndex.push(index);
    });

    charStackIndex.map((elem, index) => {
      if(index % 2 === 0) strArr[elem] = strArr[elem].toUpperCase();
      else strArr[elem] = strArr[elem].toLowerCase();
    })
  }
  else {
    return strArr.map((elem, index) => {
      if(index % 2 === 0) elem = elem.toUpperCase()
      else elem = elem.toLowerCase();
      return elem;
    }).join("");
  }

  return strArr.join("");

}
console.log(staggeredCase("ignore 77 the 444 numbers"));
console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ALL CAPS", false));