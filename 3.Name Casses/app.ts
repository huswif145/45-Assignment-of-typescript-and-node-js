// lowercase
let personName: string ="Ather"
console.log("lowercase:", personName.toLowerCase());

// uppercase
console.log("uppercase:", personName.toUpperCase());

// Titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));