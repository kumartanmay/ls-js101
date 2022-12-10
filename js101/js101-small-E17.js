/*
Write a function that takes two strings as arguments, determines the length of the two strings, 
and then returns the result of concatenating the shorter string, the longer string, 
and the shorter string once again. You may assume that the strings are of different lengths.

Examples:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

PEDAC:
Problem: (Input, Output, Implicit rules, mental model)
=====================================================
  (1) Input: take two strings from the user
  (2) Output: 
  (3) Implicit rule: input strings are not of equal length
  (4) Mental model: 
    Determine the shorter string and concatenate it with the longer and itself, in that order.

Examples: 
  Input: abc, defgh
  Output: abcdefghabc
  Input: '123', '4567'
  Output: '1234567123'
  Input: pol, qwe
  Output: polqwe // or qwepol
Data Structure:
  Input: stringOne, stringTwo
  Output: result
Algorithm:
  (1) Include the readline-sync library from npm to take user input
  (2) Assign the inputs to two variables.
  (3) Determine the shorter string
  (4) Concatenate the shorter, longer and then shorter string
  (5) Log the result
*/

let rlSync = require('readline-sync')

let inputOne = rlSync.question('Please enter first string: ')
let inputTwo = rlSync.question('Please enter second string: ')

function shortLongShort(stringOne, stringTwo) {
  return stringOne.length < stringTwo.length ? stringOne + stringTwo + stringOne : stringTwo + stringOne + stringTwo
}

console.log(shortLongShort(inputOne, inputTwo));