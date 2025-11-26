/* 1. Reverse Number

Write a JavaScript function that reverses a number.

Example x = 32243;

Expected Output : 34223 */

function reverseNum(num) {
  return console.log(num.toString().split('').reverse().join(''));
}

reverseNum(12345);

/* 2. Check Palindrome

Write a JavaScript function that checks whether a passed string is a palindrome or not?

A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. */

function palindrome(str) {
  if (typeof str !== 'string') {
    return console.log('The argument is not a String!!');
  }

  if (str.split('').reverse().join('') === str) {
    return console.log(str, 'is a PALINDROME.');
  } else {
    return console.log(str, 'is NOT a PALINDROME.');
  }
}

palindrome('noon');

/* 3. String Combinations

Write a JavaScript function that generates all combinations of a string.

Example string : 'dog'

Expected Output : d,do,dog,o,og,g */

function strCombo(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let combo = '';
    for (let j = i; j < str.length; j++) {
      combo += str[j];
      result.push(combo);
    }
  }
  return result;
}

console.log(strCombo('dog'));
