# NOTES TO FREQUENCY
# Enter the note and the octave of any notes to know its frequency.

b4 = 493.88
a4 = 440.00
g4 = 392.00
f4 = 349.23
e4 = 329.63
d4 = 293.66
c4 = 261.63

note = input('Enter the note: ')
octave = input('Enter the octave: ')
octave = int(octave)


if note == str('C'):
    print(c4 / 2** (4 - octave), 'Hz')
elif note == str('D'):
    print(d4 / 2** (4 - octave), 'Hz')
elif note == str('E'):
    print(d4 / 2** (4 - octave), 'Hz')
elif note == str('F'):
    print(f4 / 2** (4 - octave), 'Hz')
elif note == str('G'):
    print(g4 / 2** (4 - octave), 'Hz')
elif note == str('A'):
    print(a4 / 2** (4 - octave), 'Hz')
elif note == str('B'):
    print(b4 / 2** (4 - octave), 'Hz')






