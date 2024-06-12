#variables
notes = ["C", "D", "E", "F", "G", "A", "B"]
octaves = [0, 1, 2, 3, 4, 5, 6, 7, 8]
C4 = 261.63
D4 = 293.66
E4 = 329.63
F4 = 349.23
G4 = 392.00
A4 = 440.00
B4 = 493.88

#input a valid note
print ("Insert a note (write in capital letters) to calculate his frequency:")
note = str(input())
if note in  notes:
    print ("You insert " + note + ". Now insert an octave:")
    octave = int(input())
    if octave in octaves:
        print ("your tone is: " + note + str(octave))
    else:
        print ("Error! Your octave's format is not valid.")
else:
    print ("Error! Your note's format is not valid.")
    
#frequency's calc
print ("The frequency of " + note + str(octave) + " is:")
if note == notes[0]:
    frequency = C4/pow(2, 4-octave)
    
elif note == notes[1]:
    frequency = D4/pow(2, 4-octave)
    
elif note == notes[2]:
    frequency = E4/pow(2, 4-octave)
    
elif note == notes[3]:
    frequency = F4/pow(2, 4-octave)
    
elif note == notes[4]:
    frequency = G4/pow(2, 4-octave)

elif note == notes[5]:
    frequency = A4/pow(2, 4-octave)
    
elif note == notes[6]:
    frequency = B4/pow(2, 4-octave)

print (frequency)