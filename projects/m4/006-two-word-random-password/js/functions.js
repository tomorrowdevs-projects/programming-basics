function randomPass(data){
    data = data.split(/\W+/);
    let words = data.filter((word) =>  word.length >= 3).map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let psw;

    do{
        let word1 = words[Math.floor(Math.random()* words.length)];
        let word2 = words[Math.floor(Math.random()* words.length)];
        psw = word1 + word2;
    }while(psw.length < 8 || psw.length > 10)

    return psw
}

module.exports = randomPass;