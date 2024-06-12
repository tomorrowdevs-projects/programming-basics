note = input('Please type a note from A to G and an octave from 0 to 8, we will give you the frequence in Hz:')

if note[0:1] == 'A':
    note_1 = 440.00
elif note[0] == 'B':
    note_1 = 493.88
elif note[0] == 'C':
    note_1 = 261.63
elif note[0] == 'D':
    note_1 = 293.63
elif note[0] == 'E':
    note_1 = 329.63
elif note[0] == 'F':
    note_1 = 349.23
elif note[0] == 'G':
    note_1 = 392.00

if note[1] == '0':
    print(note_1 / 16, 'HZ')

elif note[1] == '1':
    print(note_1/8, 'Hz')

elif note[1] == '2':
    print(note_1 / 4, 'Hz')

elif note[1] == '3':
    print(note_1 / 2, 'Hz')

elif note[1] == '4':
    print(note_1 / 1, 'Hz')

elif note[1] == '5':
    print(note_1 * 2, 'Hz')

elif note[1] == '6':
    print(note_1 * 4, 'Hz')

elif note[1] == '7':
    print(note_1 * 8, 'Hz')

elif note[1] == '8':
    print(note_1 * 16, 'Hz')




