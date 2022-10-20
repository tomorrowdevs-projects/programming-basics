#note-to-frequency
#this program reads a note entered by the user and returns its frequency

letter = input("Enter a note: ").upper()
octave = int(input("Enter an octave: "))
set_of_notes = {"C": 261.63, "D": 293.66, "E": 329.63, "F": 349.23, "G": 392.00, "A": 440.00, "B": 493.88}
fourth_octave = (set_of_notes[letter])
def note_to_frequency (note, octave):
    f = note/(2**(4-octave))
    return (f)
frequency = note_to_frequency(fourth_octave, octave)
print("The frequency of {}{} is {} Hz".format(letter,octave,frequency))
