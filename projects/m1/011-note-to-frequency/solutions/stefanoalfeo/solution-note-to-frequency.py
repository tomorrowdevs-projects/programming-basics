note = input("insert note in the folowing form: 'C4', 'A4' etc...\n")
letter = note[0]
octave = int(note[1])

def found_frequency():
    global frequency
    frequency = round(base_frequency / (2 ** (4 - octave)), 2)
    

if 0 <= octave <= 8:
    if letter == "A":
        base_frequency = 440.00
        found_frequency()
        print("The frequency of note: " + note + " is: " + str(frequency))
    elif letter == "B":
        base_frequency = 493.88
        found_frequency()
        print("The frequency of note: " + note + " is: " + str(frequency))
    elif letter == "C":
        base_frequency = 261.63
        found_frequency()
        print("The frequency of note: " + note + " is: " + str(frequency))
    elif letter == "D":
        base_frequency = 293.66
        found_frequency()
        print("The frequency of note: " + note + " is: " + str(frequency))
    elif letter == "E":
        base_frequency = 329.63
        found_frequency()
        print("The frequency of note: " + note + " is: " + str(frequency))
    elif letter == "F":
        base_frequency = 349.23
        found_frequency()
        print("The frequency of note: " + note + " is: " + str(frequency))
    else:
        print("letter error")
else:
    print("Octal must be includes trought 0 and 8")