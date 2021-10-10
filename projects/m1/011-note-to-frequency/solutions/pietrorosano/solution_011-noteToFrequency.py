# The following table lists an octave of music notes, beginning with middle C, along with their frequencies.

# Note	Frequency (Hz)
# C4	261.63
# D4	293.66
# E4	329.63
# F4	349.23
# G4	392.00
# A4	440.00
# B4	493.88
# Begin by writing a program that reads the name of a note from the user and displays the note’s frequency. Your program should support all of the notes listed previously.

# Once you have your program working correctly for the notes listed previously you should add support for all of the notes from C0 to C8. While this could be done by adding many additional cases to your if statement, such a solution is cumbersome, inelegant and unacceptable for the purposes of this exercise. Instead, you should exploit the relationship between notes in adjacent octaves. In partic- ular, the frequency of any note in octave n is half the frequency of the corre- sponding note in octave n + 1. By using this relationship, you should be able to add support for the additional notes without adding additional cases to your if statement.

# Hint: You will want to access the characters in the note entered by the user individually when completing this exercise. Begin by separating the letter from the octave. Then compute the frequency for that letter in the fourth octave using the data in the table above. Once you have this frequency you should divide it by 24−x , where x is the octave number entered by the user. This will halve or double the frequency the correct number of times.

# Formula frequenze: f = k ** n * f0


print("\nNotes and Frequency")
print("C4 = 261.63 (Hz)")
print("D4 = 293.66 (Hz)")
print("E4 = 329.63 (Hz)")
print("F4 = 349.23 (Hz)")
print("G4 = 392.00 (Hz)")
print("A4 = 440.00 (Hz)")
print("B4 = 493.00 (Hz)")


print("\nEnter the note")
note = input()

c_frequency_4 = 261.63
d_frequency_4 = 293.66
e_frequency_4 = 329.63
f_frequency_4 = 349.23
g_frequency_4 = 392.00
a_frequency_4 = 440.00
b_frequency_4 = 493.00

if note[0] == "C" and int(note[1]) < 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** -((4 - int(note[1])) * 12) * c_frequency_4)), ".2f")) + " Hz.")
elif note[0] == "C" and int(note[1]) >= 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** ((int(note[1]) - 4) * 12) * c_frequency_4)), ".2f")) + " Hz.")

if note[0] == "D" and int(note[1]) < 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** -((4 - int(note[1])) * 12) * d_frequency_4)), ".2f")) + " Hz.")
elif note[0] == "D" and int(note[1]) >= 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** ((int(note[1]) - 4) * 12) * d_frequency_4)), ".2f")) + " Hz.")

if note[0] == "E" and int(note[1]) < 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** -((4 - int(note[1])) * 12) * e_frequency_4)), ".2f")) + " Hz.")
elif note[0] == "E" and int(note[1]) >= 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** ((int(note[1]) - 4) * 12) * e_frequency_4)), ".2f")) + " Hz.")

if note[0] == "F" and int(note[1]) < 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** -((4 - int(note[1])) * 12) * f_frequency_4)), ".2f")) + " Hz.")
elif note[0] == "F" and int(note[1]) >= 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** ((int(note[1]) - 4) * 12) * f_frequency_4)), ".2f")) + " Hz.")

if note[0] == "G" and int(note[1]) < 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** -((4 - int(note[1])) * 12) * g_frequency_4)), ".2f")) + " Hz.")
elif note[0] == "G" and int(note[1]) >= 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** ((int(note[1]) - 4) * 12) * g_frequency_4)), ".2f")) + " Hz.")

if note[0] == "A" and int(note[1]) < 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** -((4 - int(note[1])) * 12) * a_frequency_4)), ".2f")) + " Hz.")
elif note[0] == "A" and int(note[1]) >= 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** ((int(note[1]) - 4) * 12) * a_frequency_4)), ".2f")) + " Hz.")

if note[0] == "B" and int(note[1]) < 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** -((4 - int(note[1])) * 12) * c_frequency_4)), ".2f")) + " Hz.")
elif note[0] == "B" and int(note[1]) >= 4:
    print("The frequency of " + note + " is " + str(format((((2 ** (1/12)) ** ((int(note[1]) - 4) * 12) * c_frequency_4)), ".2f")) + " Hz.")




