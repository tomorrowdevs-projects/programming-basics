note = input('type a note: ').lower()
octave = int(input('type an octave: '))

if note == 'c':
    frequency = 261.63 / 2**(4-octave)
elif note == 'd':
    frequency = 293.66 / 2**(4-octave)
elif note == 'e':
    frequency = 329.63 / 2**(4-octave)
elif note == 'f':
    frequency = 349.23 / 2**(4-octave)
elif note == 'g':
    frequency = 392.00 / 2**(4-octave)
elif note == 'a':
    frequency = 440.00 / 2**(4-octave)
elif note == 'b':
    frequency = 493.88 / 2**(4-octave)

print(frequency)

