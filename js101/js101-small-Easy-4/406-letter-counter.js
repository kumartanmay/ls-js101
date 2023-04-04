/*
Write a function that takes a string consisting of zero or more space separated words 
and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
*/

function wordSizes(string) {
  if (string !== "") {
    let arrayOfStrings = string.split(" ");
    let lengthOfWords = arrayOfStrings.map(elem => elem.length);

    let uniqueLengths = uniqueWordLength(lengthOfWords);

    let frequency = uniqueLengthsFrequency(Object.keys(uniqueLengths), lengthOfWords, uniqueLengths);
  
    console.log(frequency);
  }
  else console.log({});
}

function uniqueLengthsFrequency(arrayOfKeys, mappedLengthOfWords, uniqueLengths) {
  mappedLengthOfWords.forEach(elem => {
    if(arrayOfKeys.includes(elem.toString())) {
      uniqueLengths[elem] += 1;
    }
  });
  return uniqueLengths;
}

function uniqueWordLength(array) {
  // find unique elements and set the frequency to 0

  let uniqueElements = {};

  if(array.join() !== '') {
    for(let i = 0; i <  array.length; i++) {
      if (!Object.keys(uniqueElements).includes(array[i]))
        uniqueElements[array[i]] = 0;
    }
  }

  return uniqueElements;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}