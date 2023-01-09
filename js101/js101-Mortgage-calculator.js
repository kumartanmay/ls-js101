/*
MORTGAGE LOAN CALCULATOR

Take everything that you've learned so far and build a mortgage calculator (or car payment calculator -- 
  it's the same thing).

You'll need three pieces of information:

    the loan amount
    the Annual Percentage Rate (APR)
    the loan duration

From the above, you'll need to calculate the following two things:

    monthly interest rate
    loan duration in months

You can use the following formula:

let m = p * (j / (1 - Math.pow((1 + j), (-n))));


    m = monthly payment
    p = loan amount
    j = monthly interest rate
    n = loan duration in months

When you write your program, don't use the single-letter variables m, p, j, and n; 
use explicit names. For instance, you may want to use loanAmount instead of p.

Try to print the payment amount as a dollar and cents amount, e.g., $123.45 or $371.00.

Finally, don't forget to run your code through ESLint. 
Also, consider asking for a code review after you've reviewed your code against the possible solution, 
and made any adjustments that you need to make.

PROBLEM:
  Input: 
  1. Loan Amount
  2. APR
  3. Duration of the loan (years)

  Output:
  1. duration of loan in months
  2. monthly rate of interest

  Implicit rule:
  Duration of the loan will be in integers only.
  APR can be floating numbers and it is expressed in percentage. 
  Loan amount will be in integers only.

  Mental Model: 
  loan duration in months can be simply converted into months by multiplying it with 12.
  Monthly interest will be back calculated from the formula shared. Since we do not know 
  the monthly amount, how do we calculate monthly rate of interest? Or is it 1/12th of APR?
*/

const rlsync = require('readline-sync');

function prompt(message) {
  console.log(message);
}
prompt('Welcome to Loan Mortgage Calculator!');

const loanAmount = Number(rlsync.question("What is the loan amount?: "));
const annualPercentageRate = Number(rlsync.question("What is the APR in percentage?: "));
const loanDuration = Number(rlsync.question("What is the loan duration in years?: ")); 

const monthlyInterestRate = annualPercentageRate / 12;
const loanDurationMonths = loanDuration * 12;
console.log(`Monthly Interest Rate: ${monthlyInterestRate}%`);
console.log(`Loan Duration: ${loanDurationMonths} months`);