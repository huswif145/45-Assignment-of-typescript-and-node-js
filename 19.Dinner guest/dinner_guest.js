"use strict";
let Guest_List = ['Ali', 'Ifra', 'Iqra'];
// for(let i=0; i<Guest_List.length; i++){
//      console.log('Dear mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest = 'Ali';
let new_Guest = 'kamran khan Tessori';
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
// }
// console.log('Mr. ${absent_Guest} is not coming to the party.');
// console.log('Goodnews! we find a big table so we are inviting 3 more guests.');
Guest_List.unshift('sir zia khan');
Guest_List.splice(2, 0, 'Rimsha');
Guest_List.push('Ayesha');
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
// }
// console.log(`\n sorry we can not arrange big table,only Two people will be invited.`)
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    // console.log(`sorry Mr. ${remove_Guest}, you are not invited for dinner.`);
}
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank you!\n\n');
// }
Guest_List.splice(0, 2);
console.log(Guest_List);
console.log(`Total bumber of Guest Are : ${Guest_List.length}`);
