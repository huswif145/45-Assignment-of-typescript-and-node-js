

let Guest_List :string[] =['Ali','Ifra','Iqra'];

// for(let i=0; i<Guest_List.length; i++){

//      console.log('Dear mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')


// }

let absent_Guest :string = 'Ali' ;

let new_Guest :string = 'kamran khan Tessori' ;

 for(let i=0; i<Guest_List.length; i++){

     console.log('Dear mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')


}

console.log('Mr. ${absent_Guest} is not coming to the party.');

console.log('Goodnews! we find a big table so we are inviting 3 more guests.')

Guest_List.unshift('sir zia khan')
Guest_List.splice(2, 0, 'Rimsha');
Guest_List.push('Ayesha');

for(let i=0; i<Guest_List.length; i++){

     console.log('Dear mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')


}