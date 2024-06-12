noteInput = input("Enter note:  ")

note = noteInput[0].upper()
octave = int(noteInput[1])


if note == "C":
    frequency = 261.63 * (2 ** (-4 + octave))
    print(str(noteInput) + "'s frequency is " + str(round(frequency, 2)))
elif note == "D":
    frequency = 293.66 * (2 ** (-4 + octave))
    print(str(noteInput) + "'s frequency is " + str(round(frequency, 2)))
elif note == "E":
    frequency = 329.63 * (2 ** (-4 + octave))
    print(str(noteInput) + "'s frequency is " + str(round(frequency, 2)))
elif note == "F":
    frequency = 349.23 * (2 ** (-4 + octave))
    print(str(noteInput) + "'s frequency is " + str(round(frequency, 2)))
elif note == "G":
    frequency = 392.00 * (2 ** (-4 + octave))
    print(str(noteInput) + "'s frequency is " + str(round(frequency, 2)))
elif note == "A":
    frequency = 440.00 * (2 ** (-4 + octave))
    print(str(noteInput) + "'s frequency is " + str(round(frequency, 2)))
elif note == "B":
    frequency = 493.88 * (2 ** (-4 + octave))
    print(str(noteInput) + "'s frequency is " + str(round(frequency, 2)))
else:
    print('Please, refresh and enter a correct note.')