/*
Implement a function catAge that takes a number of human years as input and converts them into cat years. 
Cat years are calculated as follows:

    The first human year corresponds to 15 cat years.
    The second human year corresponds to 9 cat years.
    Every subsequent human year corresponds to 4 cat years.
*/

function catAge(humanYears) {
  if (humanYears === 0) humanYears = '0';
  if (humanYears === 1) humanYears = '1';
  if (humanYears === 2) humanYears = '2';
  
  switch (humanYears) {
    case '0':
      console.log(0);
      break;
    case '1':
      console.log(15);
      break;
    case '2':
      console.log(24);
      break;
    default:
      console.log(24 + (humanYears - 2) * 4)
      break;
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32