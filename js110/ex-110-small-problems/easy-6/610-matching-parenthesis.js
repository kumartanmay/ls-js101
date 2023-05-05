/*
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, 
false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Examples:
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

Note that balanced pairs must each start with a (, not a ).
*/

/*
Logic:
Stack the opening and closing brackets in different lists
Delete the latest opening bracket from the stack when a closing bracket is encountered. Delete the latest closing bracket.
If there are none left in both the stacks, then we have matching brackets.
*/

function isBalanced(str) {
  let indicesOfOpeningBrackets = [];
  let indicesOfClosingBrackets = [];
  let charsInString = str.split("");
  
  charsInString.map((char, index) => {if (char === '(') {
    indicesOfOpeningBrackets.push(index);
    return indicesOfOpeningBrackets;
  } if (char === ')') {
    indicesOfClosingBrackets.push(index);
    if (indicesOfOpeningBrackets.length > 0) {
      indicesOfOpeningBrackets.pop();
      indicesOfClosingBrackets.pop();
    }
    return indicesOfClosingBrackets;
  }});

  //console.log(indicesOfOpeningBrackets);
  //console.log(indicesOfClosingBrackets);

  return indicesOfClosingBrackets[0] === indicesOfOpeningBrackets[0];
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?")=== false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);