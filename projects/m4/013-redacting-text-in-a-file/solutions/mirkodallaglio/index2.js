const fs = require('fs').promises;
const path = require('path');

const original = 'Hello.txt';
const sensitiveWord = 'sensitive-word.txt';
const modifiedFile = original.split('.')[0] + '-modified.txt';
const log = './log/log.txt';
const date = new Date();

//Read the contents of the original and sensitive-word file, replace word and write the new file
const readReplaceWrite = async (original, sensitiveWord, cod='utf-8') => {
  try {
    //Read original file, if ok write in log file
    const data = fs.readFile(original, cod, (err, data) => {
        if (err) throw err;
        return data;
    });

    //Read the sensitive word file, if ok write in log file
    const sensitive = fs.readFile(sensitiveWord, cod, (err, data) => {
        if (err) throw err;
        return data;
    });

    //When the original file and the sensitive are read then
    Promise.all([data, sensitive]).then((values) => {
        //If the reading of the files was successful I write it in the log file
        if (values[0]) fs.appendFile(log, `${dateHour()} - READ - Original file read succefully\n`, (err) => {if(err) throw err});  
        if (values[1]) fs.appendFile(log, `${dateHour()} - READ - Sensitive-word file read succefully\n`, (err) => {if(err) throw err});  

        //Replaced all sensitive word with ***
        const result = replace(values[0], values[1].split(','));

        //Write the modified file, if ok write in log file
        fs.writeFile(modifiedFile, result, (err) => {if(err) throw err});
        fs.appendFile(log, `${dateHour()} - WRITE - Modified file write succefully\n`, (err) => {if(err) throw err});
    });
    
  } catch(err) { 
    console.log('Error: ', err);
    await fs.appendFile(log, `\n${dateHour()} - ERROR: ${err}\n`);
  }
};

//generate date and time in this format : Fri Oct 21 2022 - 13:15:12
function dateHour () {
  return `${date.toDateString()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

//replace each word of a string with those in sensWord (array), return a string modified
function replace (string, sensWord) {
  let modified = string;
  sensWord.forEach(word => {
    const reg = new RegExp(word, 'ig')
    modified = modified.replaceAll(reg, '***')
  })
  return modified;
};

//when the uploads are finished and the file has been written, I write the path and name of the files to the console
readReplaceWrite(original, sensitiveWord).then( _ => {
  console.log('\nThe files are located in the following path:\n')
  console.log(path.resolve(path.dirname(original)));
  console.log(`\nOriginal File => ${path.basename(original)}\nSensitive Word File => ${sensitiveWord}\nModified file => ${path.basename(modifiedFile)}\n`)
}).catch(error => console.log(error));