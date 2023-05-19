/*
Anagram: Two words are anagrams of each other if they both contain the same letters.
Write a method that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

Problem:

input: a string + an array

output:  an array

info / rules
1. Find all strnigs in an array that is an anagram of the word given
2. If there is no match, return an empty array.

Examples:
1. abba -> aabb -> [aabb]
2. abba -> abcd -> [aabb]
3. abba -> bbaa -> [aabb, bbaa]
4. abba -> dada -> [aabb, bbaa]
5. racer -> crazer -> []
6. racer -> carer -> [carer]
7. racer -> racar -> [carer]
8. racer -> caer -> [carer]
9. racer -> racer -> [carer, racer]
10. laser -> lazing -> []
11. laser -> lazy -> []
12. laser -> lacer -> []

The frequency of characters in the string must match with the anagram.
The length of the string should be equal to the anagram.

Data strucutre:
Output is an array

Algo:
0. Declare a variable which will store the resulting array
1. Compare the input with each word in the array, if it matches push the word in the resulting array. If not, iterate to the next element in the array.
2. Comparison algo : sort both the words and strictly compare them. If true, then filter it.
*/

function anagrams (word, array) {

  // sorting the word in alphabetical order
  let sortedWord = word.split("").sort().join("");
  
  // compare the each sorted string of the array with the sorted word. if it is strictly equal, then the string is an anagram
  return array.filter(str => str.split("").sort().join('') === sortedWord);
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

// ['aabb', 'bbaa']

  

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

// ['carer', 'racer']

  

console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));

// []