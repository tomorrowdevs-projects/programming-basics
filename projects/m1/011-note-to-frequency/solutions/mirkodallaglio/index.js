let note = controlInput(prompt('Calcolo frequenze delle note musicali', 'Scrivi qui il nome della nota'));

function controlInput (i){
    if(i !== null) i = i.toUpperCase();

    if(/^[A-G][0-8]$/.test(i)){
        return i
    }else{
        return false;
    };
};

function calcFreq (letter, octave){
    let frequency = 0;

    switch(letter){
        case 'A':
            frequency = 440;
            break;
        case 'B':
            frequency = 493.88;
            break;
        case 'C':
            frequency = 261.63;
            break;
        case 'D':
            frequency = 293.66;
            break;
        case 'E':
            frequency = 329.63;
            break;
        case 'F':
            frequency = 349.23;
            break;
        case 'G':
            frequency = 392;
            break;
    };

    frequency = (frequency / Math.pow(2, (4-octave))).toFixed(2);
    return frequency;
};

if(!note) alert('Non hai scritto correttamente la nota... riprova');
else alert(`La nota ${note} ha una frequenza di ${calcFreq(note[0], note[1])} Hz`);
