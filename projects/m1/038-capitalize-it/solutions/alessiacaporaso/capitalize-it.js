// reads the user message, capitalize parts of the message and display the results
alert(capitalizeText(prompt('Please enter you message')))

function capitalizeText(text){
    let capitalizeLetter = "";
    let newText = "";
    for(let i = 0; i < text.length; i++){
        const letterAfterMarker = i - 2 ;
        // capitalize the first non-space
        if(i === 0){
            capitalizeLetter = text[i].toUpperCase()
            newText += capitalizeLetter
        } 
        // capitalize the first non-space character after a period, exclamation mark or question mark
        else if(text[letterAfterMarker] === '?' || text[letterAfterMarker] === '.' || text[letterAfterMarker] === '!'){
            capitalizeLetter = text[i].toUpperCase()
            newText += capitalizeLetter
        } 
        // capitalize i if it is preceded by a space and followed by a space, period, exclamation mark, question mark or apostrophe.
        else if (text[i - 1] === ' ' && text[i] === 'i' && text[i + 1] === " " || text[i] === 'i' && text[i + 1] === "’") {
            capitalizeLetter = text[i].toUpperCase()
            newText += capitalizeLetter
        } else {
            newText += text[i]
        }
    }
return newText
}