/*
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. 
For instance, the word size of "it's" is 3, not 4.

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
*/

function wordSizes(string) {
  //array of string.split()
  //strip each element of array, if it contains anything other than a-z,A-Z, or 0-9
  //new array of size of each word
  //frequency of size of words

  let wordSizeObject = {};
  if (string) {
    let arrayOfSizeOfWords = string.split(" ").map(elem => elem.replace(/\W/g, "").length);

    for (let i = 0; i < arrayOfSizeOfWords.length; i++) {
      wordSizeObject[arrayOfSizeOfWords[i]] ? wordSizeObject[arrayOfSizeOfWords[i]] += 1 : wordSizeObject[arrayOfSizeOfWords[i]] = 1;
  }
  }
  

  return wordSizeObject;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 })
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));