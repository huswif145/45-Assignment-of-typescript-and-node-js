function makesandwich (item: string[]) {
console.log ('\n\nmaking your sandwich with:')



item.forEach(element => console.log("- " + element));

console.log('\n\nEnjoy your sandwich !');
}


makesandwich(['Ham','Cheese','Lettuce']);

makesandwich(['Turkey','Bacon']);

makesandwich(['Peanut butter','Jelly']);
