

// const movie = {
//   title: 'a',
//   releaseYear: 2008,
//   type: 'action',
//   rating: 4.5,
//   director: 'b'

// }


// showProperties(movie);

// function showProperties(obj){
//   for (let key in obj)
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
// }



// console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 10: 5, 10

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//       sum += i;

//   return sum;
// }



// const movie = {
//   name: 'a',
//   releaseYear: 2026,
//   director: 'b',
//   rating: 4.5
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
// }










// checkSpeed(80);

// function checkSpeed(speed){
//   const speedLimit = 70;
//   const kmPerHour = 5;

//   if (speed > speedLimit + kmPerHour){
//     console.log('OK');
//     return;
//   }

//   const points = Math.floor((speed - speedLimit) / (kmPerPoint));
//     if (points >= 12)
//     console.log('License Suspended');
//   else
//     console.log('Points', points);
    
// }



// const output = fizzbuzz(7);
// console.log(output);

// function fizzbuzz(input){
//   if (typeof input !== 'number')
//     return NaN;
//   if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';
//   if (input % 3 === 0)
//     return 'Fizz';
//   if (input % 5 === 0)
//     return 'Buzz';
//   return input;
// }


// console.log(isLandScape(100, 90));

// function isLandScape(width, height){
//   return (width > height) 
// }

// const number = max(30, 35);
// console.log(number);

// function max(num1, num2){
//   return (num1 > num2) ? num1 : num2;
// }
  


// const array = [26, 0, 52, null, undefined, 27, 52];
// console.log(countTruthy(array))


// function countTruthy(array){
//   let count = 0;
//   for (value of array)
//     if (value)
//     count++
//   return count;
// }

// const array = [0, 1, 2, 3, 26];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (value of array)
//     if (value)
//     count++
//   return count;
// }
  

// showNumber(10);

// function showNumber(limit){
//   for(let i = 0; i <= limit; i++){
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   }
  
// }



// const number = max(8, 5);
// console.log(number);

// function max(num1, num2){
//   return(num1 > num2) ? num1 : num2;
// }

// console.log(isLandScape(20, 26));

// function isLandScape(width, height){
//   return(width > height);
// }


// showNumber(10);

// function showNumber(limit){
//   for (i = 0; i <= limit; i++){
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   }
// }



// const array  = [24, undefined, 2, 5]
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (value of array)
//     if(value)
//     count++
//   return count;
// }


// console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 10: 5, 10

// function sum(limit){
//   let sum = 0;

//   for (i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//       sum += i;

//   return sum;
// }

// const movie = {
//   name: 'a',
//   releaseYear: 2026,
//   director: 'b',
//   rating: 4.5
// };

// showProperties(movie);

// function showProperties(obj){
//   for (let key in obj)
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
// }




// const movie = {
//   director: 'a',
//   rating: 4.5,
//   title: 'b',
//   genre: 'action',
//   lenght: 2.0
// }

// showProperties(movie);

// function showProperties(obj){
//   for (key in obj)
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
// }


console.log(sum(10));

function sum(limit){
  let sum = 0;

  for(i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
      sum += i ;

  return sum;      
}

// const movie = {
//   director: 'a',
//   rating: 4.5,
//   title: 'b',
//   genre: 'action',
//   lenght: 2.0
// }

// showProperties(movie);

// function showProperties(obj){
//   for (key in obj)
//     if (typeof obj[key] === 'string')
//      console.log(key, obj[key]);
// }



// console.log(sum(10));

// function sum(limit){
//   let sum = 0;

//   for (i = 0; i <= limit; i++)
//     if( i % 3 === 0 || i % 5 === 0)
//       sum += i;

//   return sum; 
// }


// showProperties(movie);

// function showProperties(obj){
//   for(key in obj)
//     if(typeof obj[key] === 'string')
//       console.log(key, obj[key]);
// }








const movie = {
  director: 'a',
  rating: 4.5,
  title: 'b',
  genre: 'action',
  lenght: 2.0
}

showProperties(movie);

function showProperties(obj){
  for (key in obj)
   if (typeof obj[key] === 'string')
    console.log(key, obj[key]);
}



console.log(sum(10))

function sum(limit){
  let sum = 0;
  for (i = 0; i <= limit; ++i )
    if ( i % 3 === 0 || i % 5 === 0)
      sum += i;

  return sum;    
}