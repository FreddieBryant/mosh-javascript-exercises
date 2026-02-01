
// Divisible by 3 => Fizz
// Divisible by 5 = Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => the same number inputed will display on console
// Not a number => 'Not a number' will display on the console(strng,booleen,ect)
 
// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input){
//   if (typeof input !== 'number')
//   return NaN;

// if ((input % 3 === 0) && (input % 5 === 0))
//   return 'FizzBuzz';

// if (input % 3 === 0)

// return 'Fizz';
// if (input % 5 === 0)
// return 'Buzz';


// return input;
// }

// Divisible by 3 => Fizz
// Divisible by 5 = Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => the same number inputed will display on console
// Not a number => 'Not a number' will display on the console(strng,booleen,ect)



// const output = fizzBuzz('true')
// console.log(output);

// function fizzBuzz(input) {
// if (typeof input !== 'number')
//   return NaN;
// if ((input % 3 === 0) && (input % 5 === 0))
//   return 'FizzBuzz'
// if (input % 3 === 0)
//   return 'Fizz'
// if (input % 5 === 0)
//   return 'Buzz'
// return input;
// }


// console.log(isLandscape(50, 100));

// function isLandscape(width, height){
//   return(width > height);
// }

// let scout = max(500, 456);
// console.log(scout);

// function max(num1, num2) {
//   return (num1 > num2) ? num1 : num2;
// }



const output = fizzbuzz(15);
console.log(output);

function fizzbuzz(input){
  if (typeof input !== "number")
    return NaN;
  if (input % 3 === 0 && input % 5 === 0)
    return 'FizzBuzz';
  if (input % 3 === 0)
    return 'Fizz';
  if (input % 5 === 0)
    return 'Buzz';
  return input;
}