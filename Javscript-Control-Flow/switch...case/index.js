
let role = 'guest';

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;
    
  case 'moderator':
    console.log('Moderator User');
    break; 

  default:
    console.log('Unknown User')  
}

//Can be done with if...else statements

if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User'); 