/*

Bannerizer

Write a function that will take a short line of text, and write it to the console log within a box.


Problem
=======
1. Assume that the string will be max 80 chars long, the max chars in a row

Examples:
========
logInBox('To boldly go where no one has gone before.');

Output:
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

Data Structure 
1. Input is a string
2. Output: String

Algo:
1. Calculate the length of the string
2. If length is zero, first and last lines will be '+--+
3. If not, first and last lines will be '+- "length of string times '-'" -+
4. Second and fourth line will always be "| length of string + two blank spaces |"
5. Third line will be "| string |"
*/

function logInBox(str) {
  let firstAndLastLine = "+--+";
  let secondAndFourthLine = "|  |";
  let thirdLine = "|  |";
  let lengthString = str.length;
  if (lengthString > 0) {
    firstAndLastLine = "+-" + multiplyHyphens(lengthString) + "-+";
    secondAndFourthLine = "| " + multiplyBlanks(lengthString) + "|";
    thirdLine = "| " + str + " |";
  }
  console.log(firstAndLastLine);
  console.log(secondAndFourthLine);
  console.log(thirdLine);
  console.log(secondAndFourthLine);
  console.log(firstAndLastLine);
}

function multiplyHyphens(counter) {
  let hyphens = "";
  if (counter > 0) {
    for (let index = 0; index < counter; index += 1) {
      hyphens += '-'
    }
  }
  return hyphens;
}

function multiplyBlanks(counter) {
  let blanks = " ";
  if (counter > 0) {
    for (let index = 0; index < counter; index += 1) {
      blanks += ' '
    }
  }
  return blanks;
}

logInBox('To boldly go where no one has gone before.');
logInBox('');