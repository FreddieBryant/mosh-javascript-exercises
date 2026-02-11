
// showNumbers(10);

// function showNumbers(limit) {
//   for (i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, 'EVEN');
//   else console.log(i, 'ODD');

//   const message = (i % 2 == 0) ? 'EVEN ': 'ODD';
//   console.log(i, message);
//   }
// }


// function showNumbers(limit) {
//   for (i = 0; i <= limit; i++) {
//     const message = (i % 2 == 0) ? 'EVEN ': 'ODD';
//     console.log(i, message);
//   }
// }







showNumber(8);

function showNumber(limit) {
  for (let i = 0; i <= limit; i++){
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
}