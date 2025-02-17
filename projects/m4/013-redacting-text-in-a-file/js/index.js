//013

//packages
const fs = require('fs').promises;

//files name
const story = 'text.txt'
const sensitive = 'sensitive words.txt'
const redacted = 'redacted.txt'

//function to read the content of the story and sensitive
const readFileFunction = fileName => {
    return fs.readFile(fileName, {encoding:'utf-8'})
      .then((data) => {
          const dataArray = data.replaceAll(/[\r]/g, '').split('\n')
          return  dataArray})

      .catch ((error) => {
          console.error(`this ${fileName} file does not exixt`), error
          return Promise.reject(error)
      });
}

// function to read redacted 
const readRedacted = fileName => {
  return fs.readFile(fileName, {encoding:'utf-8'})
      .then(() => {
        return  Promise.resolve()})

      .catch ((error) => {
        console.error(`this ${fileName} file does not exixt`), error
        return Promise.reject(error)
      });
}

//function to elaborate the story
//[[text],[sensitive]]
const redactText = textAndSensitive => {

    let text = textAndSensitive[0]
    const sensitive = textAndSensitive[1]

    text.forEach((sentence, index) => {
        sensitive.forEach(secret => {
            if (sentence.toLowerCase().replaceAll(/[^a-zA-Z0-9 ]/g,'').includes(secret)) {
                sentence = sentence.replace(RegExp(`\\b${secret}\\b`, 'gi'), '****')
            }
        })
        text[index] = sentence    
    });
    text = text.join('\n')
    return text
}

Promise.all([readFileFunction(story), readFileFunction(sensitive), readRedacted(redacted)] )
  .then((data) => {
    const outputContent = redactText(data)
    return fs.writeFile(redacted, outputContent, { flag: 'r+' })
  })
    .then(() => {
      // file written successfully
      console.log(`${redacted} file updated successfully!`)
    })
    .catch((error) => {console.error(`this is the first error code detected: ${error.code}`)})


