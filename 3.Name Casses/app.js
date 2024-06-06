"use strict";
// lowercase
let personName = "Ather";
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toUpperCase());
// Titlecase
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
