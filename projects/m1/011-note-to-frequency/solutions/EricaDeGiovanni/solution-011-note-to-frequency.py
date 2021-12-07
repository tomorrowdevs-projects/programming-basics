

#Note	Frequency (Hz)
#C4	261.63
#D4	293.66
#E4	329.63
#F4	349.23
#G4	392.00
#A4	440.00
#B4	493.88

#read the name of a note from the user and displays the note’s frequency. 
note_user = input('Insert a note: ')

# separating the letter from the octave
octave = int(note_user[1])
note = note_user[0]

# using the data in the table above divide the frequency by 2**(4−x) 
# x = octave number entered by the user.

def calc_freq(freq , oct):
  print( freq / 2**(4 - oct))

if note == 'C':
    calc_freq(261.63, octave)
elif note == 'D':
    calc_freq(293.66, octave)
elif note == 'E':
    calc_freq(329.63, octave)
elif note == 'F':
    calc_freq(349.23, octave)
elif note == 'G':
    calc_freq(392.00, octave)
elif note == 'A':
    calc_freq(440.00, octave)
elif note == 'B':
    calc_freq(493.88, octave)
    
