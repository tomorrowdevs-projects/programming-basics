# Note to Frequency

# The following table lists an octave of music notes, beginning with middle C, along
# with their frequencies.

# | Note | Frequency (Hz) |
# |------|-----------|
# |   C4   |    261.63      |
# |   D4   |    293.66      |
# |   E4   |    329.63      |  
# |   F4   |    349.23      |  
# |   G4   |    392.00      |  
# |   A4   |    440.00      |  
# |   B4   |    493.88      |  


# Begin by writing a program that reads the name of a note from the user and displays the note’s frequency. 
# Your program should support all the notes listed previously.

# Once you have your program working correctly for the notes listed previously 
# you should add support for all the notes from C0 to C8.
# While this could be done by adding many additional cases to your if statement, 
# such a solution is cumbersome, inelegant and unacceptable for the purposes of this exercise. 
# Instead, you should exploit the relationship between notes in adjacent octaves. 
# In particular, the frequency of any note in octave n is half the frequency 
# of the corresponding note in octave n + 1. 
# By using this relationship, you should be able to add support for the additional notes without adding additional cases 
# to your if statement.

# Hint: You want to access the characters in the note entered by the user individually when completing this exercise.
# Begin by separating the letter from the octave. 
# Then compute the frequency for that letter in the fourth octave using the data in the table above. 
# Once you have this frequency you should divide it by 2<sup>4−x</sup> , 
# where x is the octave number entered by the user.
# This will halve or double the frequency the correct number of times.


# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

user_note = input("Insert a note: ").upper()
note = user_note[0]
octave = int(user_note[1])


def freq(note, octave):
    if note == "A":
        return float(440.00/(2**(4 - octave)))
    elif note == "B":
        return float(493.88 / (2 ** (4 - octave)))
    elif note == "C":
        return float(261.63 / (2 ** (4 - octave)))
    elif note == "D":
        return float(293.66 / (2 ** (4 - octave)))
    elif note == "E":
        return float(329.63 / (2 ** (4 - octave)))
    elif note == "F":
        return float(349.23 / (2 ** (4 - octave)))
    elif note == "G":
        return float(392.00 / (2 ** (4 - octave)))


print("{:.2f}".format(freq(note, octave)))
