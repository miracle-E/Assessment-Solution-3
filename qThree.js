let oddUsers = [ ];
let evenUsers = [ ];

let usersArray = [...]; // This is an array of objects where users with their ID are stored objects

function sortUsers() {
   usersArray.forEach((user) => {
      if (user.id % 2 === 0) {
         evenUsers.push(user);
      } else {
         oddUsers.push(user);
      }
   })
}
