
frequency = 0

while frequency == 0:

    note = str(input("Insert the note "))
    note = note.upper()

    if note[0] == 'C':
        frequency = 261.63

    if note[0] == 'D':
        frequency = 293.66

    if note[0] == 'E':
        frequency = 329.63

    if note[0] == 'F':
        frequency = 349.23

    if note[0] == 'G':
        frequency = 392

    if note[0] == 'A':
        frequency = 440

    if note[0] == 'B':
        frequency = 493.88

    if frequency == 0:
        print("Error! You should insert a note ad its octave, ex: c4")

note = int(note[1])
    
frequency = frequency / (2 ** (4-note))

print("The frequency is {:.2f} Hz".format(frequency))