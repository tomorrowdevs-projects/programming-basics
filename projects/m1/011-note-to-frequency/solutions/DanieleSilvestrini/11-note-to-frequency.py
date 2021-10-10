

user = input('Type a note:\n').upper()
octave = input('Type an octave:\n')


if user + octave == 'C' + octave:
    print((261.63 / 2**(4 - int(octave))))
elif user + octave == 'D' + octave:
    print((293.66 / 2**(4 - int(octave))))
elif user + octave == 'E' + octave:
    print((329.63 / 2**(4 - int(octave))))
elif user + octave == 'F' + octave:
    print((349.23 / 2**(4 - int(octave))))
elif user + octave == 'G' + octave:
    print((392.00 / 2**(4 - int(octave))))
elif user + octave == 'A' + octave:
    print((440.00 / 2**(4 - int(octave))))
elif user + octave == 'B' + octave:
   print((493.88 / 2**(4 - int(octave))))
