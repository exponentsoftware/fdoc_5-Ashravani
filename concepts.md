2. Explain the following questions in your own words

What is the difference between forEach, map, filter and reduce ? Explain these using your own words
Explain the difference between function declaration and arrow function ?
Explain the difference between find and findIndex ?
If you like to filter out one object element in an array which method do you like to use: filter or find ? Explain
Explain the difference of var, let and const when we declare a variable ?


forEach is used to execute the same code on every element in an array but does not change the array and it returns undefined.

map executes the same code on every element in an arrayband returns a new array with the updated elements.

filter checks every element in an array to see if it meets a certain criteria and returns a new array with the element that return true for the criteria.

reduce method takes the values of the array from array elements and applies functionality such that it changes the array into one singular value.

Function and Arrow function

Function is dynamic and depends on the invocation
If the Arrow function has one expression,then the expression is returned implicitly,even without using the return keyword

find and findindex

find method returns the value of the first element in an array that passes a given test.
findindex returns the index of the first element in the array that passes a given test.

filter or find
filter
filter method filters all the elements and returns the element that matches and removes all the unmatched elements.

var,let and const

let:
let age =45;
age =37;
The value can be changed here and let is block scoped.
 
 const birthyear=1991;
 birthyear=1990;
 The value cannot be changed and const is block scoped.

 var a=12;
 var b=6;
 var c=a+b;
 var is function scoped
 