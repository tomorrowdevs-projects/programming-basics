#create a dictionary that reads note associated with frequence

note_listed = {'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23,
'G4': 392.00, 'H4': 440.00, 'B4': 493.88}

#divide the part of the note in 2: note and frequency, also the full note is
#the sum of the note1 and note2 

note = input("Enter first part of note: ")
frequence = input("Enter second part of note: ")

note = note.upper()
full_note = note + frequence

#if the note is equal to C and frequence is different from 4 i calculate the 
#respective frequence 

if note == 'C' and frequence != '4':
    value = 261.63
    frequence = int(frequence)
    print(f"{261.63/2**(4-(frequence))} is {note}{frequence} Hz.")

#if note is in note listed i keep this note from the dictionary    

elif full_note in note_listed:
    print(f"The frequency of {full_note} is {note_listed[full_note]} Hz.")
#if it's not in dictionary and it's not "C" the note is not supported at the moment
else:
    print(f"{full_note} is not supported at the moment.")