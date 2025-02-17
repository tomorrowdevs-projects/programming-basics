const fs = require('fs');
const file = "esempio.txt";
const path = require("path");
const checkForDuplicates = require("./utils")

/** used to track the number of the line into the file */ 
let count = 0; 

fs.promises.readFile(path.join("filesToTest",file), "utf-8")
.then((content) =>{

    /** list of lines into the file 
     * @type {Array<string>}
    */
    const linesList = content.split("\n"); 

    /** foreach line into the file there is the check for conseutive duplicates alerting the user with a log */
    linesList.forEach(line => {  

        /** List to store duplicates
         * @type {Array<string>}
        */
        const duplicates = checkForDuplicates(line.split(" ")); 

        /** if there are duplicates the user will be alerted */
        if (duplicates.length != 0){ 
            console.log("Line: " + count + " -> duplicates: ", duplicates); 
        }         
        count++;
    })
          
})  
.catch((err) => {
    console.log(err);
});                          
 
