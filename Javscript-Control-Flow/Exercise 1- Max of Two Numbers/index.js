
// function greet(firstName, lastName) {
//   console.log(firstName + ' ' + lastName );
// }

// greet('Freddie', 'Bryant');

// Write a function that takes two numbers and returns the maximum of the two.

// 

// let number = max(3, 4);
// console.log(number);

// function max(num1, num2) {
//   if(num1 > num2) return num1;
//   else return num2;
// }

// function max(num1, num2) {
//   if(num1 > num2) return num1;
//   //... else can be removed
//   return num2;
// }

// cleaner code
// function max(num1, num2) {
//   if(num1 > num2) return num1;
//   return num2;
// }
// rewrite with condional operator
// (condition) ? num1 : num1

// return (num1 > num2) ? num1 : num2;

// cleanest code

// function max(num1, num2) {
//   return (num1 > num2) ? num1 : num2; 
// }


// let number = max(2, 1);
// console.log(number);

// function max(num1, num2) {
//   return(num1 > num2) ? num1 : num2;
// }




// let number = max(3, 3);
// console.log(number);

// function max(num1,num2){
//   return(num1 > num2) ? num1 : num2;
// }


// let area = isLandscape (100, 50);
// console.log(area);  

// function isLandscape(width, height) {
//   if (width > height) return true;
//   return false;
// }
// with condional operation instead

// function isLandscape (width,  height) {
//   return (width > height)
// }


// console.log(firstName);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or a hyphen (-)
// They are case sensitive




// console.log(isLandscape(100, 99));

// function isLandscape (width, height){
//   return(width > height)
// }

// let number = max(9, 5);
// console.log(number);

// function max (num1, num2) {
//   return (num1 > num2) ? num1 : num2;
// }


// const output = fizzbuzz(15);
// console.log(output);

// function fizzbuzz (input){ 
//   if (typeof input !== 'number') {
//     return NaN;
//   }

//   if ((input % 3 === 0) && (input % 5 === 0))
//     return "FizzBuzz"

//   if (input % 3 === 0)
//     return 'Fizz';

//   if (input % 5 === 0)
//     return 'Buzz'
//   return input;
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



















// const output = fizzBuzz('true')
// console.log(output);


// function fizzBuzz(input){
//   if (typeof input !== 'number')
//     return NaN;
//   if (input % 3 === 0 && input % 5 === 0)
//     return 'FizzBuzz';
//   if (input % 3 === 0)
//     return 'Fizz';
//   if (input % 5 === 0)
//     return 'Buzz';
//   return input;
// }





// const movie = {
//   director: 'a',
//   movieName : 'b',
//   releaseYear: 2026,
//   movieLenght: 2.5,
//   bestActor: 'c',
//   nextMovie: 'd'
// };

// showProperties(movie);

// function showProperties(obj){
//   for (let key in obj)
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
// }



// const array = [1, 2, 5, 28, null, undefined, 12];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for(let value of array)
//     if(value)
//       count++;
// return count;    
// }





// const movie = {
//   director: 'a',
//   movieName : 'b',
//   releaseYear: 2026,
//   movieLenght: 2.5,
//   bestActor: 'c',
//   nextMovie: 'd'
// };

// showProperties(movie);

// function showProperties(obj){
//   for (let key in obj)
//     if (typeof obj[key] === 'string')
//     console.log(key, obj[key]);
    
// }




const array = [1, 2, 5, 28, null, undefined, 12];
console.log(countTruthy(array));


function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value)
      count++;
  return (count);
}

const movie = {
  director: 'a',
  movieName : 'b',
  releaseYear: 2026,
  movieLenght: 2.5,
  bestActor: 'c',
  nextMovie: 'd'
};

showProperties(movie);

function showProperties(obj) {
  let count = 0;
  for (let key in obj)
    if (typeof obj[key] === 'string')
      count++;
  console.log(count);  
}

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++){
  const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message)
  }
}
