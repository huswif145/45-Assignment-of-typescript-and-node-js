
// let person_Name :string = 'Ather';

// const personName_Array : (string | number)[] = ['Person','car','cold drink'];

interface person{
     age : number 
     name : string
     nationality : string 
     student : boolean
  }
let person : person = {
   age : 22 ,
   name : 'Ather',
   nationality : 'Pakistani',
   student : true
}

console.log(person);

interface car {
   maker: string,
   colour: string,
   automatic: boolean,
}

let car = { 
   maker: 'toyota',
   colour: 'black',
   automatic: true,
}

console .log(car);


