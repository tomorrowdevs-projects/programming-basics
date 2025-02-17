// Soluzione con Set()

const userString = prompt('Enter a string').toUpperCase();

const uniqueChar = (str) => {

    const numbUnique = new Set(str);

    return numbUnique.size

}


alert(`The string:\n ${userString} has ${uniqueChar(userString)} unique charaters`);


//Soluzione con ciclo for

// const userString = prompt('Enter a string').toUpperCase();

// const uniqueChar = (str) =>{
//     let numbUnique = '';

//     for(let i = 0; i < str.length; i++){

//         if(!numbUnique.includes(str[i])){
//             numbUnique += str[i];
//         }
//     }

//     return numbUnique.length;
// }

// alert(`The string:\n ${userString} has ${uniqueChar(userString)} unique charaters`);