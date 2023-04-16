Q1.

What is the return value of the `filter` method call below? Why?

```javascript
[1, 2, 3].filter(num => 'hi');
```

Ans: 
[1, 2, 3]


Since the callback will evaluate to a truthy value, `hi`, at every iteration, hence, all the elements of the array will pass the selection condition. We'll get a shallow copy of the array on which the `filter` method was called. `filter` method does not mutate the calling array.

------

Q2.
What is the return value of map in the following code? Why?

```javascript
[1, 2, 3].map(num => {
  num * num;
});
```

Ans:
[undefined, undefined, undefined]

Since the callback function has code block within `{}` , the function expression expects an explicit `return statement`. Without it, callback will return `undefined`. Hence each element in the original array will be replaced by `undefined` in the new array created after calling the `map` method.

If we want the map method to give the desired output of squaring the elements of array, then we can remove the `{}` and rephrase the `callback` in a single expression. JS implicity returns the value of an arrow function which can be expressed in a single line expression.

```javascript
[1, 2, 3].map(num => num * num;);
```

----------

Q4. 
What is the return value of the following statement? Why?

```javascript
['ant', 'bear', 'caterpillar'].pop().length;
```

Ans:
11

The `pop` method returns `caterpillar`. The `length` method calculates the length of the string `caterpillar` which is 11. FYI, `pop` method mutates the array on which it is called. 

----------

Q5.
What is the callback's return value in the following code? Also, what is the return value of `every` in this code?

```javascript
[1, 2, 3].every(num => {
  return num = num * 2;
});
```

Ans:
2
4
6
true

`every` method returns `true` when all the elements of the calling array evaluate to a `truthy` value, else it returns `false`. Callback doubles the value of each element and reassigns it to `num`. Since all the values are `truthy`, `every` method returns `true`.

-----

Q6.

How does Array.prototype.fill work? Is it destructive? How can we find out?
```javascript
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
```
Ans:
[1,1,1,1,1]

`Array.prototype.fill` will replace all the elements in the array with a value `1` from index `1` until the next 5 elements or the last element, whichever happens earlier. It mutates the calling array.

-----

Q7.

What is the return value of map in the following code? Why?

```javascript
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
```

Ans:
[undefined, 'bear']

Map method returns a new array after transforming each element of the calling array. Since the length of the first element `ant` is not greater than 3, it evaluates to a falsy value. Since there is no explicit return statement for a falsy value, the callback implicitly returns `undefined`. Hence the first element of the array returned by map method is `undefined`.

------

Q8.
Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

```javascript
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
```
Ans:

```javascript
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let objFlintstones = {};

flintstones.forEach((elem, idx) => {
  objFlintstones[elem] = idx;
});

console.log(objFlintstones);

```


---
Q9.
Add up all of the ages from the Munster family object:

```javascript
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
```

Ans:

```javascript
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesOfMunsters = Object.values(ages);
let sum = 0;

agesOfMunsters.forEach(elem => sum += elem);

console.log(agesOfMunsters);
console.log(sum);

```

-------

Q10.
Pick out the minimum age from our current Munster family object:

Ans:

```javascript
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesOfMunsters = Object.values(ages);
let min = agesOfMunsters[0];

agesOfMunsters.forEach(elem => {if(elem < min) {
  min = elem;
}return min});

console.log(min);
```

-----

Q11.
Create an object that expresses the frequency with which each letter occurs in this string:
```javascript
let statement = "The Flintstones Rock";

// Output will look something like this:
{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

```

Ans:
```javascript
let statement = "The Flintstones Rock";

function freqLetters (stmt) {
  let objLetters = {};
  let arrayLetters = stmt.split("");

  arrayLetters.forEach(elem => {
    if(objLetters[elem]) {
      objLetters[elem] += 1;
    } else {
      objLetters[elem] = 1;
    }
  });
  
  return objLetters;
}

console.log(freqLetters(statement));
```