const morseCode = {
    a: ' .-', b: ' -...', c: ' -.-.', d: ' -..',
    e: ' .', f: ' ..-.', g: ' --.', h: ' ....',
    i: ' ..', j: ' .---', k: ' -.-', l: ' .-..',
    m: ' --', n: ' -.', o: ' ---', p: ' .--.',
    q: ' --.-', r: ' .-.', s: ' ...', t: ' -',
    u: ' ..-', v: ' ...-', w: ' .--', x: ' -..-',
    y: ' -.--', z: ' --..', 1: ' .----', 2: ' ..---',
    3: ' ...--', 4: ' ....-', 5: ' .....', 6: ' -....',
    7: ' --...', 8: ' ---..', 9: ' ----.', 0: ' -----',
    á: ' .--.-', ä: ' .-.-', é: ' ..-..', ñ: ' --.--',
    ö: ' ---.', ü: ' ..--',
};
let userInput = prompt('Enter a phrase').toLocaleLowerCase();
let result = '';

for (let char of userInput){
    if(char in morseCode) result += morseCode[char];
};
alert(result.slice(1));