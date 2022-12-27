//013

//packages
const fs = require('fs').promises;

//files name
const story = 'text.tx'
const sensitive = 'sensitive words.txt'
const redacted = 'redacted.txt'

//function to read the content of the story 
const readStory = story => {
    return fs.readFile(story, {encoding:'utf-8'})
        .then((data) => {
            const dataArray = data.replaceAll(/[\r]/g, '').split('\n')
            return  dataArray})

        .catch ((error) => {
            console.error(`this ${story} file does not exixt`), err
            return Promise.reject(error)
        });
}

// function to read the content of sesitive words
const readSensitive = sensitive => {
    return fs.readFile(sensitive, {encoding:'utf-8'})
        .then((data) => {
            const dataArray = data.replaceAll(/[\r]/g, '').split('\n')
            return  dataArray})

        .catch ((error) => {
            console.error(`this ${sensitive} file does not exixt`), error
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
                sentence = sentence.toLowerCase().replace((/\b${secret}\b/gi),'****') // new RegExp(`\\b${secret}\\b`, 'gi') 
            }
        })
        text[index] = sentence    
    });
    text = text.join('\n')
    return text
}

Promise.all([readStory(story), readSensitive(sensitive)])
  .then((data) => {
    const outputContent = redactText(data)
    return fs.writeFile(redacted, outputContent)
  })
  .then(() => {
    // file written successfully
    console.log(`${redacted} file updated successfully!`)
  })
  .catch((error) => {
    console.error(`something went wrong:`, error)
  })


