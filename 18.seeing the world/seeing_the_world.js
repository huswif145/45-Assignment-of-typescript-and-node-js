"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// store the location in a arry.make sure the arry is not in alphabetical order.
let place = ['Italy', 'Germany', 'Agra', 'Eifel Tower', 'Times square'];
// print your arry in its orignal order.
console.log('orignal ' + place);
// print your arry in alphabetical order without modifying the actual list.
console.log('copy ' + [...place].sort());
// show that your array is still in its orignal order by printing it.
console.log('orignal ' + place);
// print in your array in reverse alphabetical order without changing the order of the orignal list.
console.log('copy ' + [...place].sort().reverse);
// show that your arry is still in its orignal order by printing it again.
console.log('orignal ' + place);
// Reverse the order of your list. print the array to show that it order has changed.
console.log('orignal ' + place.reverse());
// Revverse the order of your list again.print the list to show it's back to its orignal order.
console.log('orignal ' + place.reverse());
// sort your array so it's stored in alphabetical order.print the array to show that its order has been changed.
console.log('orignal ' + place.sort());
// sort to change your array so it's stored in reversed alphabetical order.print the list to show that its order has changed/
console.log('orignal ' + place.sort().reverse());
