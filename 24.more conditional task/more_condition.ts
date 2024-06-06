
console.log("Equality test with strings: ","Apple" === "Apple");

console.log("Inequality test with strings: ",("Apple" as string) != "orange");

console.log("Lower case funtion test: ","Hello".toLocaleLowerCase() === "hello");

console.log("Equality test with numbers: ",26 === 26);

console.log("Inequality test with numbers: ",26 != 26);

console.log("Greather then test: ",10 > 5);

console.log("less then test: ",5 < 10);

console.log("Greather then and equal to test: ",10 <= 10 );

console.log("less then and equal to test: ",5 <= 10 );

console.log("And operator test: ",5 === 5 && 10 >5 );

console.log("or operator test: ",5===5 || false );

const fruits : string[] = ['Naspati','Banana','Amrood'];
console.log('Test "Nashpati"in the array: ', fruits.includes("nashpati"));

console.log('Testing "Apple" is not in Array: ' ,! fruits.includes('apple'));
