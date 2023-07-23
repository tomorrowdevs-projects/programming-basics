function onlyWords(phrase){
    const words = [''];

    if(phrase.length > 0){
        const exceptions = [',','.','?','‐','\'','!',':',';']
        let j = 0;

        for (let i = 0; i < phrase.trim().length; i++) {
            const letter = phrase.charAt(i);

            if( letter !== ' ' ){
                words[j] += letter;
            } else {
                j++;
                words[j] = '';
            }
        }

        for (let i = 0; i < words.length; i++) {
            while( exceptions.includes( words[i].charAt(words[i].length-1) ) ){
                words[i] = words[i].slice(0,-1);
            }
        }
    }

    return words;
}


function init(){
    const words = onlyWords("Contractions include: don’t, isn’t, and would’t.");

    for (let i = 0; i < words.length; i++) {
        console.log(words[i]);
    }

    return;
} 
init();