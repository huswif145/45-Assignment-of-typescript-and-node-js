"use strict";
let current_users = ['Taha', 'Daniyal', 'salman', 'Hamza', 'John'];
let new_users = ['Bilal', 'Taha', 'Dawood', 'jameel', 'Hamza'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase().includes(lowerCase))) {
        console.log(`The username ${newUsername} is not available.please write a different user name`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
