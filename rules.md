# Rules for submission
As there would be multiple people working on the project it is obvious as your code will affect other in one way or the other (positive or negative) so while writing your code
or before submitting your first task please check if your code follow the following standards: 
1. [ES6 syntaxing](https://www.w3schools.com/js/js_es6.asp)  : Utilize ES6 syntax in your JavaScript code. ES6 introduces a range of features that make the language more concise and informative. eg: 
```
// Using arrow function and template literal
const greet = name => `Hello, ${name}!`;
```
2. Commenting, Commenting and Commenting
Comments are crucial for explaining the logic and purpose behind your code.
Every function should have a brief comment explaining its role.
Complex blocks of code should also be commented to make it easier for others to understand your thought process.
```
// Function to calculate square of a number
const square = num => {
  // Squaring operation
  return num * num;
};
```
3. Tests for your functions using [Jest](https://jestjs.io/)
Write unit tests for all your functions using Jest.
Make sure to test not just the "happy path," but also edge cases and failure scenarios.
Running these tests before submission ensures that your code works as expected and doesn't break existing functionalities.
```
// Jest test for square function
test('square of 2 should be 4', () => {
  expect(square(2)).toBe(4);
});
```
```
#To run all tests before submission
npm test
```
