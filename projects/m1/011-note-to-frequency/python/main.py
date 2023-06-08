input_note_user = input("Please type note (like A4,B4 etc) :  ")

note = input_note_user[0].upper()
octave = int(input_note_user[1])


if note == "C":
    frequency = 261.63 * (2 ** (-4 + octave))
    print(str(input_note_user) + "'s frequency is " + str(round(frequency, 2)) + str(" Hz "))
elif note == "D":
    frequency = 293.66 * (2 ** (-4 + octave))
    print(str(input_note_user) + "'s frequency is " + str(round(frequency, 2)) + str(" Hz "))
elif note == "E":
    frequency = 329.63 * (2 ** (-4 + octave))
    print(str(input_note_user) + "'s frequency is " + str(round(frequency, 2)) + str(" HZ "))
elif note == "F":
    frequency = 349.23 * (2 ** (-4 + octave))
    print(str(input_note_user) + "'s frequency is " + str(round(frequency, 2)) + str(" Hz "))
elif note == "G":
    frequency = 392.00 * (2 ** (-4 + octave))
    print(str(input_note_user) + "'s frequency is " + str(round(frequency, 2)) + str(" Hz "))
elif note == "A":
    frequency = 440.00 * (2 ** (-4 + octave))
    print(str(input_note_user) + "'s frequency is " + str(round(frequency, 2)) + str(" Hz "))
elif note == "B":
    frequency = 493.88 * (2 ** (-4 + octave))
    print(str(input_note_user) + "'s frequency is " + str(round(frequency, 2)) + str(" Hz "))
else:
    print('Please, type correct note.')