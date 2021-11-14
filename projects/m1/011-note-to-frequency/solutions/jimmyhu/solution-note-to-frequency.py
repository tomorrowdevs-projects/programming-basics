# il programma deve essere capace di calcolare la frequenza delle note sotto e sopra quella data di default (ogni volta che si scende di 1 di dimezza e viceversa si raddoppia)
# *****non si deve fare una semplice lista*****
notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b']
frequency = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88]
note_input = input('please insert the note: ').lower()
if note_input[0] in notes and note_input[1] == '4':
    index = notes.index(note_input[0])
    print('The frequency of this note is: ' + str(frequency[index]))
elif note_input[0] in notes and note_input[1] != '4':
    index = notes.index(note_input[0])
    base = frequency[index]
    octave = int(note_input[1])
    if octave < 4 and octave >= 0:
        result = base / (2 ** (4 - octave))
        print(result)
    elif octave > 4 and octave <= 8:
        result = base * (2 ** (octave - 4))
        print(result)