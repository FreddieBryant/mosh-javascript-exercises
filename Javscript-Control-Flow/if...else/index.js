
// Hour
// If hour is between 6am and 12pm: Good morning!  
// If hour is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

// if (condition) {
//     statement
// }
// else if (anotherCondition) {
//     statement
// }
// else if (yetAnotherCondition){
//     statement
// }
// else {
//     statement
// }

let hour = 20

if (hour >= 0 && hour < 12) {
  console.log('Good Morning!')
}
else if (hour >= 12 && hour < 18) {
  console.log('Good Afternoon')
}
else if (hour >= 18 && hour < 21) {
  console.log('Good Evening');
}
else {
  console.log('Good Night')
}
  


