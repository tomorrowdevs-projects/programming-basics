notes=["C","D","E","F","G","A","B"]
frequency=[261.63,293.66,329.63,349.23,392.00,440.00,493.88]
my_note=input("Enter a note: ")
octave=int(my_note[1])
division= pow(2,4-octave)

for i in range(7) :
    if my_note[0]==notes[i]:
        print(f"The frequency of this note is {frequency[i]/division} Hz")