# listed notes
C4 = 261.63
D4 = 293.66
E4 = 329.63
F4 = 349.23
G4 = 392.00
A4 = 440.00
B4 = 493.88

octave = input("Enter a music note (for example 'A4','B4' etc.) : ")
letter = octave[0]
number = int(octave[1])

if letter == "C":
    frequency = C4 / (2**(4-number))
    print("The frequency is "+str(frequency) + " Hz") 

elif letter == "D":
    frequency = D4 / (2**(4-number))
    print("The frequency is "+str(frequency) + " Hz") 

elif letter == "E":
    frequency = E4 / (2**(4-number))
    print("The frequency is "+str(frequency) + " Hz") 

elif letter == "F":
    frequency = F4 / (2**(4-number))
    print("The frequency is "+str(frequency) + " Hz") 

elif letter == "G":
    frequency = G4 / (2**(4-number))
    print("The frequency is "+str(frequency) + " Hz") 

elif letter == "A":
    frequency = A4 / (2**(4-number))
    print("The frequency is "+str(frequency) + " Hz") 

elif letter == "B":
    frequency = B4 / (2**(4-number))
    print("The frequency is "+str(frequency) + " Hz") 

else: print("You didn't enter a correct note, try again.")