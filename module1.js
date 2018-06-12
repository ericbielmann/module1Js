class Practice {
  constructor() { }

  //1. Write an isPrime() function that returns true if a number is prime and false otherwise.
  isPrime(num) {
    if (num <= 1)
      return false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  /*2. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. 
       (For ex: “0 is even”, “1 is odd”, “2 is even”)*/
  oddEvenCheck() {
    for (var i = 0; i <= 15; i++) {
      var val = '';
      if (i % 2 == 0) {
        val = 'even';
      }
      else {
        val = 'odd';
      }
      console.log(i + ' is ' + val);
    }
  }

  //3.Write a JavaScript program to sum the multiples of 3 and 5 under 1000
  sumMultiplies() {
    let multipliesOf3or5 = [];
    let totalSum = 0;
    for (let i = 1; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        totalSum += i;
      }
    }
    console.log(totalSum);
  }

  //4.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
  calculateAreaTriangle() {
    var side1 = 5;
    var side2 = 6;
    var side3 = 7;
    var perimeter = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
    console.log(area);
  }

  /*5. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then
  prompted to input a guess number. If the user input matches with guess number, the program will display a
  message "Good Work" otherwise display a message "Not matched"*/
  guessNumber() {
    var userNumber = prompt('Choose an integer between 1 to 10: ');
    var randomNumber = pickRandomNumber();
    console.log('We picked ', randomNumber);
    console.log('You picked ', userNumber);
    var result = userNumber == randomNumber ? 'Good Work' : 'Not matched';
    function pickRandomNumber() {
      return Math.round(Math.random() * 10) + 1;
    }
    console.log(result);
  }

  //6. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
  calculateMulAndDiv(numOne, numTwo) {
    var multiplication = numOne * numTwo;
    var division = numOne / numTwo;
    console.log('Multiplication is: ' + multiplication);
    console.log('Division is: ' + division);
  }

  //7. Write a JavaScript program that accept two integers and display the larger.
  logLargerNumber(a, b) {
    var result = 'The larger is ';
    if (a == b) {
      result = 'The values are equal';
    }
    else {
      result += a > b ? a : b;
    }
    console.log(result);
  }

  //8. Write a simple function that returns a boolean indicating whether or not a string is a palindrome.
  isPalindrome(text) {
    text = text.toLowerCase();
    var textLength = text.length;
    for (var i = 0; i < textLength / 2; i++) {
      if (text[i] !== text[textLength - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  //10. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
  computeGDC(numberOne, numberTwo) {
    var r = 0;
    while (numberOne !== 0) {
      r = numberTwo % numberOne;
      numberTwo = numberOne;
      numberOne = r;
    }
    return numberTwo;
  }

  /*11. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box
  with the specified sign. (For ex: 3, -7, 2 Output: The sign is - )*/
  findSignProduct(x, y, z) {
    if (x * y * z > 0) {
      console.log('The sign is +');
    }
    else {
      console.log('The sign is -');
    }
  }

  /*12. Write a sum method which will work properly when invoked using either syntax below.
  console.log(sum(4,3)); // Outputs 7
  console.log(sum(4)(3)); // Outputs 7 */
  sum(x, y) {
    if (arguments.length > 1) {
      return x + y;
    }
    return function (y) {
      return x + y;
    };
  }
}


//13. What will be the output when the following code is executed ? Explain.
console.log(false == '0') // true because when comparing, both are converted to numbers (same type)
console.log(false === '0') // false because '===' tests both, type and value 

//14. What will the code below output to the console and why ?
console.log(1 + "2" + "2"); //Output: 122. Expressions with numeric and string values with the + operator, JavaScript converts numeric values to strings 
console.log(1 + +"2" + "2"); //Output: 32. ++ converts "2" to number and add it to 1, this is 3 and then concats the "2"
console.log(1 + -"1" + "2"); //Output: 02. Statements with other operators like - / *, JavaScript does not convert numeric values to strings. But after that converts 0 to string
console.log(+"1" + "1" + "2"); //Output: 112. Expressions with numeric and string values with the + operator, JavaScript converts numeric values to strings 
console.log("A" - "B" + "2"); //Output: NaN2. Javascript cannot substract strings, this is because NaN and after that it concats 2
console.log("A" - "B" + 2); //Output: NaN.  Javascript cannot substract strings, this is because NaN and after that it cannot add 2.

//15. What is the output out of the following code? Explain your answer:
var a = {},
  b = { key: 'b' },
  c = { key: 'c' };
a[b] = 123;
a[c] = 456;
console.log(a[b]); 
//Both a[b] and a[c] are being threated like a{[object Object]} so the output will be 456, the last input



//16
console.log("0 || 1 = " + (0 || 1)); // Output: 0 || 1 = 1. Because takes 0 as null and add 1 to the string.  || operator takes the value different to null or undefined.
console.log("1 || 2 = " + (1 || 2));  // Output: 1 || 2 = 1. Because takes 1 as true and add 1 to the string. || operator takes the value different to null or undefined. 
console.log("0 && 1 = " + (0 && 1));  // Output: 0 && 1 = 0.  && operator takes the value null or undefined.
console.log("1 && 2 = " + (1 && 2));  // Output: 1 && 2 = 2.  && operator takes the value different to the condition.



//17. What will the code below output to the console and why?
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func: this.foo = " + this.foo);
    console.log("outer func: self.foo = " + self.foo);
    (function () {
      console.log("inner func: this.foo = " + this.foo);
      console.log("inner func: self.foo = " + self.foo);
    }());
  }
};
myObject.func();
/*The console output will be:
    outer func: this.foo = bar
    outer func: self.foo = bar
    inner func: this.foo = undefined
    inner func: self.foo = bar
Because the IIFE function creates its own isolated scope (this), so the inner function closure keeps the reference from its parent's scope (self)  */



//18
console.log(typeof null);  // Output: object. it’s an actual object instance, but it represents an “empty” value.
console.log(typeof {});   // Output: object. It is an object declaration.
console.log(typeof []);  // Output: object. It is also an object. Arrays are object.
console.log(typeof undefined);  // Output: undefined.  undefined  can be used as value but it is a primitive type.



//19. What’s the result of executing this code and why:
function test() {
  console.log(a) // Undefined;
  console.log(foo()) // 2 ;
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
//Because of Javascript's behavior of moving all declarations to the top of the current scope (Hoisting)



//20
(function () {
  console.log(bar); //OUTPUT: - WHY?
  console.log(baz); // OUTPUT: - WHY?
  foo(); //OUTPUT: - WHY?
  function foo() {
    console.log('aloha');
  }
  var bar = 1;
  baz = 2;
})();
/*The logs will be: undefined because of hoisting, ReferenceError: baz is not defined because the variable isn´t declared and ´aloha´ 
  because of closures the statement foo() will execute the function declared inside the code.*/



//21. What’s the result of executing the following code? Why?  
var fullname = 'John Doe';
var obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function () {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname()); //Output: Aurelio De Rosa
var test = obj.prop.getFullname;
console.log(test()); //Outout: John Doe
/*This is set to the object the method is call on. First console prints the fullName declared inside prop, 
  but second console prints the global fullname because getFullname fuction it's saved in global context */



//22
var fullname = 'John Doe';
var obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function () {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test.call(obj.prop));



//23. Complete the expected values and justify:
(function () {
  var foo = 1;
  function bar() {
    var foo = 2;
  }
  bar();
  console.log(foo); //OUTPUT: 1 - WHY? Because bar() only change another foo variable inside the function.
  if (true) {
    var foo = 3;
  }
  console.log(foo); //OUTPUT: 3 - WHY? Because in the if condition ir creates another foo variable with value 3 on the global function.
})();



//24. Complete the expected values and justify
(function () {
  function foo(x) {
    var baz = 3;
    return function (y) {
      console.log(x + y + (++baz));
    }
  }
  var moo = foo(2);
  moo(1); // WHAT VALUE RETURNS? WHY?
  moo(1); // WHAT VALUE RETURNS? WHY?
})();
//The values will be 7 and 8: because baz var keep saved in each call to moo() and add 1 en each call. x takes 2 and y takes 1.