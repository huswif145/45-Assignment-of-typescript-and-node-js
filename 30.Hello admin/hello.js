"use strict";
const userNames = ['Admin', 'Ather', 'Ahmer', 'Saim', 'Rahim'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'Admin') {
        console.log('Hello Admin,would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userNames[i]},thank you for loggin again`);
    }
}
