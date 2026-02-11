


// const isActive = true;
// const firstName = ''; // Falsy (false)
// if (firstName) console.log('Hello');

// Falsy values in Javascript

// falsey
// undefined
// null 
// ''
// false
// 0
// NaN



// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array)
//     if (value)
//     count++;
//   return count;
// }


// Review For..of loop

// const colors = ['red', 'blue', 'green'];

// for (let color of colors)
//   console.log(color);

// for (let i = 0; i <= 5; i++) {
//   if(i % 2 !== 0) console.log(i);
// }

// for-in loop

// const person = {
//   name: 'Mosh',
//   age: 25,
// };

// for (let key in person)
// console.log(key, person[key]);

// const colors = ['red', 'blue', 'green'];

// for (let index in colors)
// console.log(index, colors[index]);

// for-of loop

// const colors = ['red', 'blue', 'green'];

// for (let color of colors)
// console.log(color);






// Falsy values in Javascript

// falsey
// undefined
// null 
// ''
// false
// 0
// NaN

// const isActive = true;
// const firstName = 'Mosh';
// if (firstName) console.log('Hello');



// const array = [null, 0, undefined, 1, 2, 3]

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array)
//     if (value)
//     count++;
//   return count;
// }


// const array = [0, null, 52, true, 1, 2, 3, 4];
// console.log(countTruthy(array));

// function countTruthy(array){
//   let count = 0;
//   for (value of array)
//     if (value)
//     count++;
//   return count;  

// }



// const array = [1, 2, 3, 54, 25, 100, true, false];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count= 0;
//   for (value of array)
//     if (value)
//     count++;
//   return count;

// }

// const array = [1,26, true, 'mosh', 0 , 24, null];
// console.log(countTruthy(array))

// function countTruthy(array){
//  let count = 0;
//  for (let value of array)
//  if (value)
//  count++
// return count;

// }

// const array = [0, null, 28, 53, undefined];
// console.log(countTruthy(array));

// function countTruthy(array){
//   let count = 0;
//   for (let value of array)
//    if (value)
//     count++
//   return count;
// }



// showNumbers(5);

// function showNumbers(limit) {
//   for (i = 0; i <= limit; i++) {
     // if (i % 2 === 0) console.log(i, "EVEN");
    // else console.log(i, "ODD");
  

//   const message = (i % 2 !== 0) ? 'ODD' : 'EVEN';
//   console.log(i, message);
//   }
// }




// const array = ['true', null, false, undefined, 0, 26, 1, 2, 3, 4];
// console.log(countTruthy(array));

// function countTruthy(array){
//   let count = 0;
//   for (let value of array)
//    if (value)
//     count++
//   return count;
// }

// const array = [0, null, 28, 53, undefined];
// console.log(countTruthy(array));

// function countTruthy(array){
//   let count = 0;
//   for (let value of array)
//    if (value)
//     count++
//   return count;
// }



// showNumbers(4);

// function showNumbers(limit){
//   for (i = 0; i <= limit; i++){
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);

//     if (i & 2 === 0 ) console.log(i, 'EVEN');
//     else console.log(i, 'ODD');
//   }
// }


// const array = [0, null, 26, undefined, 1, 2, 3, 4]
// console.log(countTruthy(array));

// function countTruthy(array){
//   let count = 0;
//   for (value of array)
//     if (value)
//     count++
//   return count;
// }







// showNumbers(16);

// function showNumbers(limit){
//   for (i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, 'EVEN');
//     else console.log(i, 'ODD');

//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message); 
//   }
// }

// const array = [26, 54, 92, 'true', null, 0, undefined, 178];
// console.log(countTruthy(array));

// function countTruthy(array){
//   let count = 0;
//   for (value of array)
//     if (value)
//     count++
//   return count;
// }


// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input){
//   if (typeof input !== 'number')
//     return NaN;
//   if ((input % 3 === 0) & (input % 5 === 0))
//     return 'FizzBuzz';
//   if (input % 3 === 0)
//     return 'Fizz';
//   if (input % 5 === 0)
//     return 'Buzz'
//   return input;
// }


// checkSpeed(75);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log('Okay');
//     return;
//   }
    
//   const points = Math.floor((speed - speedLimit) / ( kmPerPoint ));
//     if (points >= 12)
//       console.log('License Suspended')
//     else
//   console.log('Points', points);
// }


// let number = max(26, 26);
// console.log(number);


// function max(num1, num2) {
//   return (num1 > num2) ? num1 : num2;
// }

// let number = max(2, 1);
// console.log(number);

// function max(num1, num2) {
//   return(num1 > num2) ? num1 : num2;
// }




console.log(isLandScape(90, 90));

function isLandScape(width, height) {
  return (width > height);
}



let number = max(70 , 60);
console.log(number);

function max(num1, num2) {
  return (num1 > num2) ? num1 : num2;
}



// checkSpeed(90);


// function checkSpeed (speed) {
//   const speedLimit = 70;
//   const kmPerHour = 5;

//   if (speed < speedLimit + kmPerHour) {
//     console.log('Ok');
//     return;
//   }

//   const points = Math.floor((speed - speedLimit) / (kmPerHour));
//   if (points >= 12)
//     console.log('License Suspended')
//   else
//     console.log('Points', points);
// }



checkSpeed(135);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint){
    console.log('okay')
    return;
  }

  const points = Math.floor((speed - speedLimit )/ (kmPerPoint));
  if (points >= 12)
    console.log('License Suspended');
 
  else
    console.log('Points', points);
    
}

// showNumbers(10);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, 'EVEN');
//     else console.log(i, 'ODD');

//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   }
// }





const array = [0, 1, 2, 3, 26];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (value of array)
    if (value)
    count++
  return count;
}
  