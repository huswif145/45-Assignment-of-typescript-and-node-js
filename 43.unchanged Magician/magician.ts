let magician : string[] = ['Harry potter','Hermione Granger','Ron weasley','Albus Dumbledore']; 

function copyArray(arr:string[]){
    return[...arr]
}

function make_great( magicianArry:string[] ){

    for (let i=0; i<magicianArry.length; i++ ) {
        magicianArry[i] = 'the Great' + magicianArry[i]
    }
}


function show_megician(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}

const copyMegicianArray = copyArray(magician)


make_great(copyMegicianArray);

console.log('\n\nThis is my orignal array:');
show_megician(magician); 

console.log('\n\nThis is my modified copy of the array:');
show_megician(copyMegicianArray);