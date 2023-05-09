/*
A stack is a list of values that grows and shrinks dynamically. 
A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. 
Each operation in the language operates on a register, which can be thought of as the current value. 
The register is not part of the stack. 
An operation that requires two values pops the topmost item from the stack 
(i.e., the operation removes the most recently pushed value from the stack), 
operates on the popped value and the register value, and stores the result back in the register.

This sounds complex, but the behavior is straightforward and easy to walk through manually. 
Consider a MULT operation in a stack-and-register language. 
It removes the value from the stack, multiplies the removed stack value with the register value, 
then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] 
(where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] 
(the 4 is removed), and the result of the multiplication, 28, is left in the register. 
If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the 
following commands (also called operations or tokens):

    n : Place a value, n, in the register. Do not modify the stack.
    PUSH : Push the register value onto the stack. Leave the value in the register.
    ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
    SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
    MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
    DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
    REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
    POP : Remove the topmost item from the stack and place it in the register.
    PRINT : Print the register value.

All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. 
Your function may assume that all arguments are valid programs — i.e., 
they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

----


Input: 
  Stack: array
  Register: Number

Information:
  Stack: array- uses two methods: pop and push
  Register: current value
  Initial value of stack: []
  Initial value of register: 0

Rules:
  Stack uses two methods: push and pop
  Each operation is performed on a register, current value
  Register is not part of the stack
  An operation requires two values: topmost item from the stack and register value
  Topmost item is the last value in the stack
  Result of operation is stored in register
  Operations: Multiply, addition, substraction, division, remainder, push, pop, print
  All operations are on integers only
  Arguments will be string

Commands:
  n: place a value in the register - does not modify the stack though
  PUSH: push the register value in the stack. The value does not leave the register
  ADD: pop a value from the stack and add it to the register value, the result is the new register value
  SUB: pop value from the stack and subtract it from the register value, result is the new register value
  MULT: pop a value from the stack and multiply it with the register value, result is the new register value
  DIV: pop a value from the stack and divide the register value by the popped stack value, store the INTEGER value in the register
  REMAINDER: pop a value from the stack and divide the register value by the popped stack value, store the INTEGER remainder value in the register
  POP: remove the top most value from the stack and store it in the register
  PRINT: print the register value:

Mental model:
1. Create an array from the input string
2. Parse through the array and filter the commands used
3. Create separate functions for each of the commands; return the new register value
*/

let stack = [];
let register = 0;
const COMMANDS = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER', 'POP', 'PRINT'];

function minilang(stringCommand) {
  let arrayCommand = stringCommand.split(" ");

  // if the element is a command, call it
  // if the element is not a command, update the register

  arrayCommand.forEach(token => {
    if (COMMANDS.includes(token)) {
      switch(token) {
        case 'ADD':
          register = ADD(stack, register);
          break;
        case 'PUSH':
          register = PUSH(stack, register);
          break;
        case 'SUB':
          register = SUB(stack, register);
          break;
        case 'MULT':
          register = MULT(stack, register);
          break;
        case 'DIV':
          register = DIV(stack, register);
          break;
        case 'REMAINDER':
          register = REMAINDER(stack, register);
          break;
        case 'POP':
          register = POP(stack, register);
          break;
        case 'PRINT':
          PRINT(register);
          break;
        default:
          console.log("Something Wrong!");
          break;
      }
      //console.log(`Stack: ${stack}`);
      //console.log(`Register: ${register}`);
    }
    else {
      register = Number(token);
      placeInRegister(register);
    }
  })

  // let tokensInCode = arrayCommand.filter(token => COMMANDS.includes(token));
  // let valuesInCode = arrayCommand.filter(token => !COMMANDS.includes(token));

  //console.log(arrayCommand);
  //console.log(stack);
  return register;
}

function placeInRegister(num) {
  register = num;
  return register;
}

function PUSH(stack, register) {
  stack.push(register);
  return register;
}

function ADD(stack, register) {
  let operand = Number(stack.pop()); // it will concatenate in string values
  register += operand;
  return register;
}

function SUB(stack, register) {
  let operand = stack.pop();
  register -= operand;
  return register;
}

function MULT(stack, register) {
  let operand = stack.pop();
  register *= operand;
  return register;
}

function DIV(stack, register) {
  let divisor = stack.pop();
  register = (register / divisor).toFixed();
  return register;
}

function REMAINDER(stack, register) {
  let divisor = stack.pop();
  register = (register % divisor).toFixed();
  return register;
}

function POP(stack, register) {
  register = stack.pop();
  return register;
}

function PRINT(register) {
  console.log(register);
}

minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');