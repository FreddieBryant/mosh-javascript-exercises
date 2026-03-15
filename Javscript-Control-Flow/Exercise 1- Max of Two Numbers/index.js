
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



// is phone in landscape mode

// log the width and height and the console
// width is greater than than the height return true
// else if the width is not greater than the height return false

console.log(isLandscape(150, 100));

function isLandscape(width, height){
  return (width > height);
}


// The max of two numbers
// return the max of two numbers
// if number 1 is greater than number 2 return number one
// else return niumberb 2

let number = max(500, 550);
console.log(number);

function max(num1, num2) {
  return (num1 > num2) ? num1 : num2;
}




checkSpeed(130);

// Speed Limit = 70
// 5 -> 1 point
// Use Math.floor(1.3) to calculate point
// 12 points -> 'License Supended'

// if the speed is let than the speed limit(70) it is okay
// if the speed is five kilonmeters over the speed limit 1 point is recieved
// for every 5 km/h over the speedLimit increment total points by 1
// at 12 points license is Suspended
// log the amount of points

function checkSpeed(speed) {
  let speedLimit = 70;
  let kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Okay');
    return;
  }
    
  const points = Math.floor((speed - speedLimit) / (kmPerPoint));
  if (points >= 12)
    console.log('License Suspended');
  else
    console.log('Points', points);
}




// fizzbuzz algorithim
// If the Input is not a number Return NaN
// If the Input numbera multiple of 3 AND 5 Return 'Fizzbuzz'
// If the Input is a multiple 3 Return 'Fizz'
// If the Input is a multiple 5 Return 'Buzz'
// ELSE RETURN input

const output = fizzBuzz(7);
console.log(output);


function fizzBuzz(input){
  if (typeof input !== 'number')
    return NaN;
  if (input % 3 === 0 && input % 5 === 0)
    return 'FizzBuzz'
  if (input % 3 === 0)
    return 'Fizz'
  if (input % 5 === 0)
    return 'Buzz'
  return input;
}


showNumbers(10);

// Show Number and whether it is 'EVEN' or 'ODD' string next to it
// Hint message 
// Loop: start index at zero and as long as the index is lest than the limit Increment the index.
// If the index in a multiple of 2, set message to 'EVEN;
// ELSE set messge to 'ODD
//Log Index and Messege 

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    let message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
  }  
}


// Pseudo-code for showProperties
// Define a function that takes an object as an input.
// Loop through every key inside that object.
// Check the type of the value associated with that key.
// IF the value is a string:
// Display both the key name and its value.


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
  for (let key in obj) 
    if(typeof obj[key] === 'string')
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

// set varible to zero. use sum as variable
// loop: start Index at zero. as long as Index is Less Than or Equal to the Limit Increment the Index.
// If the index is a multiple of 3 or a multiple of five add the current number to the sum(+=)
//Return the sum;


function sum(limit) {
  let sum = 0;
  
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  } 
  return sum;  
}


const array = [80, 80, 50];
console.log(calculateGrade(array));

// Find average of marks
// Make two seperate functions

//set a varible to zero(sum)
// check all marks in array(marks)
// the Average of the Array is the Sum of the array divided by the length.

function calculateGrade(marks) {
  let average = calculateAverage(marks);
  
  if (average < 60) return 'F'
  if (average < 70) return 'D'
  if (average < 80) return 'C'
  if (average < 90) return 'B'
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
   sum += value; 
  }  
  return sum / array.length;
}
 




showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++){

    let pattern = '';
    for (let i = 0; i <= row; i++)
      pattern += '*';
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
  for(let factor = 2; factor < number; factor++)
    if(number % factor === 0)
  
  return true;
}
 

// function getMax(array) {
//   let max = array;

//   for (let value of array){
//     if (value > max) {
//       max = value;
//     }   
//   }
//   return max;
// }

// function countOccurrences(array, searchElement) {
//   let count = 0;
//   for (let value of array) {
//     if (value === searchElement){
//       count++;
//     }
//   }
//   return count;
// }

// function countOccurrences(array, searchElement) {
//   let count = 0;
//   for (let value of array) {
//     if (value !== searchElement){
//       count++;
//     }
//   }
//   return count;
// }




// function reverseArray(array) {
//   let output = [];

//   for (let i = array.length -1; i >= 0; i++) {
//      output.push(array[i]);
//    }

//   return output;
// }

// const numbers = [10, 20, 30];

// function removeItem(array, index) {
//   let output = [...array]; 
  
//   output.splice(index, 1);
//   // output.splice(index, howManyItems?);

//   return output;
// }

//console.log(removeItem(numbers, 1));



// const numbers = [1, 2, 3, 4];
// function insertMiddle(array, value) {
//   let output = [...array];

//   let middle = Math.floor(output.lenght / 2);
//   output.splice(2, 0, 3)

//   return output;

//}

// const numbers = [10, 20, 30, 40];


// output.splice(2, 0, 25);

// const lifted = items.splice(2, 0)[0];
// items.splice(1, 0, 'cherry');



// const numbers = [10, 20, 30]

// function move(array, idex, newIndex){
//   const lifted = array.splice(0, 2)[0];
//   array.splice(0, 0, 20)
// }



// function move(array, index, newIndex) {
//   const lifted = array.splice(index, 1)[0];
//   array.splice(newIndex, 0, lifted);
// }
 

// colors.splice(1, 1,)[0];
// colors.splice(1, 0, 'Green', 'Yellow');



// const groceries = ['Milk', 'Eggs', 'Bread', 'Cheese'];

// const lifted = groceries.splice(0, 1)[0];
// groceries.splice(3, 0, lifted);

// const tasks = ['Laundry', 'Gym', 'Groceries', 'Email'];

// const priorityTask = tasks.splice(1, 1)[0];
// tasks.splice(0, 0, priorityTask);


//  im not doing pseudo-code today try challenge.

//  not sure what I remember but here is a try

//  let food = ['pizza', 'taco', 'sushi']

//  const lifted = food.splice(1, 1, 'burger')[0];

// let week = ['Mon', 'Tue', 'Friday', 'Saturday', 'Sun']

// const lifted = week.splice(2, 2, 'Wed', 'Thu')[0];

// let cart = ['Bread', 'Milk', 'Eggs', 'Cheese']

// const protein = cart.splice(1, 2, 'Butter')[1];



// const lastPerson = line.splice(-1, 2, 'Frank')[1];

// if they go into the box 'David' and then 'Eve' i believe this would be correct.

// let line = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

// const lastPerson = line.splice(-2, 2, 'Frank')[1];

//create a line of people ['John', 'Paul', 'Acting Up', 'James']

//find position of 'Acting Up' person in list which is second to last

//Go to position the second to last position on the list, and remove that person, and then add 'New Person'

// Now the line is ['John', Paul, 'New Person', 'James']


//create line of five people ['John', Paul, 'Michael', 'James', 'Shawn']
//SPLICE at Index 0 remove 0 items and add VIP cut in line at the beginning
//SPLICE at Index -1 Remove 1 kick the last person out of line
//The new line is ['VIP','John', Paul, 'Michael', 'James']

//You have an array of 50 recentMessages. You need to create a new array called topFive that contains only the most recent 5 (the last 5 in the array).

// const messages = ['50 messages', ...]
// I men
// SPLICE at index -45 remove 45 save the array

// const allPosts = ["Post1", "Post2", "Post3", "Post4", "Post5", "Post6", "Post7", "Post8", "Post9", "Post10"];

//Psuedo-code
// start at index 7 and stop in index -1

// const currentPage = allPosts.slice(7, -1)();

// const allStudents = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

//Psuedo-code
//Start at Index 2 and SLICE INDEX -2

// const middleStudents = allStudents.slice(2, -2);

//Extract a portion of the rawData.
//Start the extraction at index 10
//END the extraction 5 items from the end.
//STORE the result in a new variable called cleanData.

const rawData = [...Array(100).keys()]; 
const cleanData = rawData.slice(10, -5);

console.log(cleanData.length); 

const shiftHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Extract a portion of the shiftHours.
//START extraction at index 3
//End extraction at index -4
//Store result in a new variable called coreShift

const coreShift = shiftHours.slice(3, -4);

//const secretCode = [9, 9, 9, 7, 3, 2, 1, 8, 8, 8];

//Psuedo-code
//Extract a portion of the secretCode.
//Start at index 3
//End at Index -3
//Store result in value called realMessage

//const realMessage = secretCode.slice(3, -3);


//I know this isn't right. I'm rusty on loops now 

// const realMessage = [7, 3, 2, 1];
// let decrypted = [];

// for (let number of realMessage) {
//   let newNumber = number + 10;
//   decrypted.push(newNumber);
// }
// console.log(decrypted);


// I need a more indept explaination

// const finalPrices = [];

// const rawPrices = [101, 102, 50, 100, 150, 0, 0];

// const finalPrices = rawPrices.slice(2, -2);

//   for (let price of cleanPrices) {
//     let cleanPrices = price + 5.
//     finalPrices.push(cleanPrices); 
//   }
// console.log(finalPices);

// You have 100 items. You need to "cut off" the first 10 (warm-up) and the last 5 (cool-down).


// const cleandata = sensorReading.slice(10, -5);


// hourlyFootage.splice(5, 1,);
// const usefulVideo = hourlyFootage.slice(2, -3);

// Imagine you have an array called prices = [10, 20, 30]. You want to loop through and add $5 to every single price.

// Start at Index 0
// Stop before Index Equals the Lenght of prices array
// Increment Index by 1
// Action (inside)for loop: Take the price at the current index and ADD 5 to it.

// javascript
// let prices = [10, 20, 30, 40];

// for (let i = 0; i < prices.length; i++) { // i++ means i + 1
//     // This is where the "$5" logic happens:
//     prices[i] = prices[i] + 5; 
// }

// Result: [15, 25, 35, 45]

let names = ['alice', 'bob', 'charlie']

//Start at Index 0
//Stop before Index Equals the Lenght of prices array
//Increment by 1
//Interate over array
//I do not know how to capitalize values in an array

//Before the next challenge
//step 

let titles = ["manager", "developer", "designer", "intern"];
//Start at index 0
// Stop berfore end of titles array(3)
//Increment by 1
//Action (inside)for loop: dont know how to write the Psuedo-code for this
//names.[i] = name[i].toUpperCase.
//name[i] is that really how you write the code, name[i] or is it just name or [i]?

//Let me try another one.
//I understand the Javascript code, but I do not understand the Psuedo-code
//To me the Psuedo-code does not match the Javascript code
//Unless that is just for the action part

//let stock = [5, 12, 8, 20];

//Start at index 0
//Stop at end of stock's lenght(3)
//increment by 1
//Loop action target stock in slot1
//Then take its current value and add 5
//Override this value with the new value

// for(let i = 0; i < stock.length; i++) {
//   stock[i] = stock[i] + 5;
// }

// let statuses = ["y", "y", "y", "y"];

//START at index 0
//Stop before the end of statuses
//Step by 1
//Action target statuses[1]
//Change the current value to 'ACTIVE'
//Override this value with new value 'ACTIVE'

// for (let i = 0; i < statuses.length; i++) {
//   statuses[1] = 'ACTIVE';
// }
// console.log(statuses);

//missing ; after cheers length
//cheers[i] = cheers[i] + '!'
// this is a guess

let boutiquePrices = [100, 250, 500, 1200];

for (let i = 0; i < boutiquePrices.length; i++){
  boutiquePrices[i] = boutiquePrices[i] + 25;
}
console.log(boutiquePrices);

let salaries = [50000, 60000, 45000, 70000];
let bonus = 5000

// The Pseudo-code Plan:
// START at index 0.
// STOP before the end of the array.
// STEP by 1.
// ACTION: Target the salary in Slot [i]. Set it to equal its Current Value plus the bonus variable.

for (let i = 0; i < salaries.length; i++) {
  salaries[i] = salaries[i] + bonus;
}
console.log(salaries);

let stock = [12, 4, 8, 2, 15];

// 1. The Pseudo-code Plan
// START at index 0.
// STOP before the end of the stock array.
// STEP by 1.
// ACTION (The "If" Sandwich):
// CHECK: IF the current value (stock[i]) is less than 5.
// THEN: Take that specific value (stock[i]) and add 10 to it.

for (let i = 0; i < stock.length; i++) {
  if (stock[i] < 5) {
    stock[i] = stock[i] + 10;
  }
}
console.log(stock);

let incomes = [40000, 150000, 80000, 250000];

//START at index 0;
//STOP before the end the end of the incomes array
//Step by 1
//ACTION: if sandwich
 //Target: Original income[i]
 //Calculate: If the income[i] is Greater Then 100000 Subtract 10000

 for (let i = 0; i < incomes.length; i++) {
  if (incomes[i] > 100000) {
    incomes[i] = incomes[i] - 10000;
  }
 }
 console.log(incomes);

//  I forgot to Overwright

let guests = ["Guest", "Alice", "Guest", "Bob"];

//START at INDEX 0
//STOP before the end of the guests.length
//TARGET: Original name ='Guest'
 //Action guest[i] (===) 'Guest' update(=) to 'ANONYMOUS'

for (let i = 0; i < guests.length; i++) {
  if (guests[i] === 'Guest'){
    guests[i] = 'ANONYMOUS'
  }  
}
console.log(guests);

//Got to go to work
//Would like to continue with the 'double check' challenge when i comw back.
//can you give me the save date to come back here.

let inventory = ["Banana", "Apple", "Orange", "Apple", "Pear"];

//START at index 0
//STOP before the end og inventory array
//TARGET: 'Apple' in the array
//Action: if index  === 'Apple' replace it with = 'SOLD OUT'

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i] === 'Apple'){
    inventory[i] = 'SOLD OUT';
  }
}
console.log(inventory);

//This is all I have time for. I have to go to Work. Even if I got this right I would like to try another one when I get home to boost my confidence. I stuggled a little bit with this.

// let guestAges = [25, 18, 30, 20, 22, 16];
 
//Psuedo-code
//START at index 0
//STOP before the end of guessAges array
//Target: guestAges[1] if sandwich; if age is less than (<) 21 
// Action: replace(=) with 'REJECTED 

// for (let i = 0; i < guestAges.length; i++){
//   if (guestAges[i] < 21) {
//     guestAges[i] = 'REJECTED'
//   }
// }
// console.log(guestAges);

let guestAges = [20, 70, 25, 65, 18];
let ticketPrices = [];

//Psuedo-code
//START at index 0
//STOP before the end of guestAges array
//Step by 1
//Target: (If sandwich) if  guestAges[i] <= 65 tickectPrices  = 30
//ELSE: ticketPrices = 50;

for(let i = 0; i < guestAges.length; i++) {
  if (guestAges[i] >= 65) {
    ticketPrices[i] = 30;
  }
  else {
    ticketPrices[i] = 50;
  }
}
//why are there two console.log
console.log("Ages:", guestAges);
console.log('Prices', ticketPrices);

//not understanding why there is an empty array for ticketPrices or where you enter the age.

let basePrices = [50, 150, 200, 30, 80];
let finalReceipt = [];

//START at index 0
//STOP before the end of basePrices array
//STEP by 1
//Target basePrices[i] if greater than 100 add 10
//ELSE add 2

for(let i = 0; i < basePrices.length; i++){
  if(basePrices[i] >= 100){
    finalReceipt[i] = basePrices[i] + 10;
  }
  else {
    finalReceipt[i] = basePrices[i] + 2;
  }
}
console.log('Base Price', basePrices);
console.log('Final Price', finalReceipt);

//i struggled through this. let me try another one


let guestNames = ["Admin", "Alice", "Admin", "Bob", "Charlie"];
let badges = [];

//Psuedo - code 
// regular start and stop for loop. step by 1
//Target: if guestNames === 'Admin'
//Action: badges = 'ACCESS GRANTED'
//ELSE: badges = 'USER'

for (let i = 0; i < guestNames.length; i++){
  if (guestNames[i] === 'Admin') {
    badges[i] = 'ACCESS GRANTED';
  }
  else {
    badges[i] = 'USER';
  }
}
console.log('Guest Name', guestNames);
console.log('Badge Type', badges);

//I think i got instanceof. its break time
//I may need to refresh when I come back
//I may be done for today

// let orders = [20, 60, 30, 50, 10];
// let finalBills = [];

// Basic loop start at 0 stop before the end of orders array and step by 1
//Target: (if sandwich) if order is greater than of equal to (>=) 50 add 0
//Action  finalBills[i] = 'FREE'
//Else: finalBills[i] = finalBills[i] + 5

// for(let i = 0; i < orders.length; i++) {
//   if (orders[i] >= 50) {
//     finalBills[i] = 'free'
//   }
//   else {
//     finalBills[i] = orders[i] + 5;
//   }
// }
// console.log('Orders', orders);
// console.log('Final Bills', finalBills)

//instead of free wouldn't you want it to just show the number instead of free. thats the only confusion that i have. and i dont know how to do that yet.

let orders = [20, 60, 30, 50, 10];
let finalBills = [];

// for (let i = 0; i < orders.length; i++) {
//   if (orders[i] >= 50) {
    // TOSS the original price onto the final list
//     finalBills.push(orders[i]); 
//   } else {
     // TOSS the price + 5 onto the final list
//     finalBills.push(orders[i] + 5);
//   }
// }
// console.log(finalBills);

let fuelLevels = [100, 15, 45, 10, 80];
let statusReport = [];

for (let i = 0; i < fuelLevels.length; i++){
  if(fuelLevels[i] < 20){
    statusReport.push('LOW');
  }
  else {
    statusReport.push('OK')
  }
}
console.log(fuelLevels);
console.log(statusReport);

//I want to read more about this to get a better understanding and practice more
//I know I am moving slow. is this Okay.
//I think I am done until tomorrow when I have more time

let points = [150, 40, 100, 95, 200];
let customerStatus = [];

//STArt at index 0 
//STOP before end of points array
// Step by 1
// Target points[i] (if sandwich ) if points > 100 
// Action customer = 'VIP'
//ELSE = 'STANDARD;

for (let i = 0; i < points.length; i++) {
  if (points[i] >= 100){
    customerStatus.push('VIP');
  }
  else {
    customerStatus.push('STANDARD')
  }
}
console.log('Points', points);
console.log('Status', customerStatus);
//let me try one more



// let speeds = [55, 80, 65, 72, 40];
// let policeReport = [];

// 1. START at 0, STOP at length, STEP by 1.
// 2. IF speeds[i] is greater than 65...
// 3. ACTION: policeReport.push("TICKET");
// 4. ELSE...
// 5. ACTION: policeReport.push(speeds[i]);

// for (let i = 0; i < speeds.length; i++) {
//   if (speeds[i] > 65) {
//     policeReport.push('TICKET');
//   }
//   else {
//     policeReport.push(speeds[i]);
//   }
// }
// console.log('Speed', speeds);
// console.log('Report', policeReport);

//i understand the syntax, but can you explain how .push takes the place of the previous method we used. If feels like i am asking to many questions 

let speeds = [55, 80, 65, 72, 40];
let ticketsOnly = [];

// 1. START at 0, STOP at length, STEP by 1.
// 2. IF speeds > 65
// 3. ACTION policeReport.push 'TICKET;

for (let i = 0; i < speeds.length; i++) {
  if (speeds[i] > 65){
    ticketsOnly.push('TICKET');
  }
}
console.log('Ticket', ticketsOnly);



