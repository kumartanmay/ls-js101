/*
Write a function that determines the mean (average) of the three scores passed to it, 
and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative values or 
values greater than 100.

Algo:
1. Calculate the mean
2. Check the grade corresponding to the mean
3. Return grade

Example:
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

*/

function calculateMean(scoreA, scoreB, scoreC) {
  return (scoreA + scoreB + scoreC) / 3;
}

function getGrade (scoreA, scoreB, scoreC) {
  const mean = calculateMean(scoreA, scoreB, scoreC);
  if (mean >= 90) {
    return `Grade: A`;
  } else if (mean >= 80) {
    return `Grade: B`;
  } else if (mean >= 70) {
    return `Grade: C`;
  } else if (mean >= 60) {
    return `Grade: D`;
  } else {
    return `Grade: F`;
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"