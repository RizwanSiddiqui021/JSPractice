/* 1. Reverse Number

Write a JavaScript function that reverses a number.

Example x = 32243;

Expected Output : 34223 */

function reverseNum(num) {
    return console.log(num.toString().split("").reverse().join(""));
}

reverseNum(12345);
