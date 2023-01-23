note = str(input("Insert - Note-Name: C4; D4; E4; F4; G4; A4; B4 ---> "))

note_frequency = {
"C4": 261.63, "D4": 293.66, "E4":329.63, "F4":349.23, "G4":392.00, "A4":440.00, "B4":493.88
}
#In this case is better to use a Dictionary than many IF.
#The Values are defined als float numbers and not String ad I did in the previous exercise: infact here we have to work and to calculate
#with numbers - and for this reason the Strings are useless.


if note in note_frequency:

    print(f"{note} Frequency: {note_frequency[note]} (Hz)")

else:
   
    print("Error in data entry - repeat this program")
   
# The program works.
# Now I have to put a Support:
# that shows the correlation between Note and Frequency long tha Scale C0 - C8
# I know only C4, but I also know that C5: C4*2 and C3:C4/2... and so on...
# Let's go!

note_number = int(input("Insert a number from 0 to 8 in order to know the corrispective frequency of the Note C ---> "))

i = note_number + 1 # It's a only trick: in this way I can correlate the value of the note and his power exponent, sparing a lot of Code


if -1<note_number<9:
   
    frequency = format((261.626/16)*pow(2, i-1), ".2f")
    print(f"C{note_number} frequency: {frequency}")

else:
    print("Error! You had to inser only a number from 0 to 8 - Nothing else!")
