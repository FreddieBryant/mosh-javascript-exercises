
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

function max(num1, num2) {
  return (num1 > num2) ? num1 : num2; 
} 


// let number = max(2, 1);
// console.log(number);

// function max(num1, num2) {
//   return(num1 > num2) ? num1 : num2;
// }




// let area = isLandscape (100, 50);
// console.log(area);  

// function isLandscape(width, height) {
//   if (width > height) return true;
//   return false;
// }
// with condional operation instead

function isLandscape (width,  height) {
  return (width > height)
}


// console.log(firstName);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or a hyphen (-)
// They are case sensitive





console.log(isLandscape(150, 100));

function isLandscape(width, height){
  return(width > height);
}

let number = max(500, 550);
console.log(number);

function max(num1, num2) {
  return (num1 > num2) ? num1 : num2;
}




checkSpeed(75);

// Speed Limit = 70
// 5 -> 1 point
// Use Math.floor(1.3) to calculate point
// 12 points -> 'License Supended'

function checkSpeed(speed) {
 let speedLimit = 70;
 let kmPerPoint = 5;

  if ( speed < speedLimit + kmPerPoint) {
    console.log('OK')
    return
  }

  const points = Math.floor((speed - speedLimit) / (kmPerPoint));
  if (points > 13)
    console.log('License Suspended');
  else
    console.log('Points', points);
}


const output = fizzBuzz(9);
console.log(output);


function fizzBuzz(input){
  if (typeof input !== 'number') 
    return NaN;
  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';
  if (input % 3 === 0)
    return 'Fizz';
  if (input % 5 === 0)
  return 'Buzz';
return input;
}


showNumbers(10);

// Show Number and whether it is 'EVEN' or 'ODD' string next to it
// Hint message 

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message =  (i % 2 === 0) ? 'Even' :'Odd';
    console.log(i, message);
 }
  

}


const movie = {
  director: 'a',
  movieName : 'b',
  releaseYear: 2026,
  movieLength: 2.5,
  bestActor: 'c',
  nextMovie: 'd'
};

// Display all 'strings' in obj

showProperties(movie);

function showProperties(obj) {
  for (key in obj)
    if (typeof obj[key] === 'string')
    console.log(key, obj[key]);    
}



// const array = [ 2, null, 5, 6, 9];
// console.log(countTruthy(array));

// //display number of truthy values in array

// function countTruthy(array) { 
//   let count = 0;

//   for (let value of array)
//     if (value)
//       count++;
//   return count;
// }


console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  
  return sum;    
}




const array = [80, 80, 50];
console.log(calculateGrade(array));

// Find average of marks
// Make two seperate functions

function calculateGrade(marks) {
  let average =calculateAverage(marks);

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(number) {
  let sum = 0;
  for (let value of array)
    sum += value;
  
  return sum / array.length;
}
 




showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++){

    let pattern = '';
    for(let i = 0; i < row; i++){
      pattern += '*';
    }
    console.log(pattern);
  }
}
  


showPrimes(10);

// Show all prime numbers until limit

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
      if (number % factor === 0)  
        return false;
    
    return true;
}
 
