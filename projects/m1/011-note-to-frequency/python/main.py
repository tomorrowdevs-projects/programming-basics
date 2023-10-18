note = input('Please insert a note using cap letters(like C4): ')

note_frequency = {"C4" : 261.63, 
                  "D4" : 293.66,
                  "E4" : 329.63,
                  "F4" : 349.23,
                  "G4" : 392.00,
                  "A4" : 440.00,
                  "B4" : 493.88}
c_note = note[0]
c_octave = int(note[1])

if note in note_frequency: 
    print(" AFrequency: ", note_frequency[note])
elif c_note == 'C' and c_octave >= 0 and c_octave <= 8: 
    new_frequency = print('Frequency: ', note_frequency['C4'] / 2 ** (4 - c_octave))
else: 
    print("Error. Unrecognized data.")





