# The user must enter a note
note1=input('Enter a note from A to G and the octave from 0 to 8\n')
# the chosen note will give a value in (Hz)
if note1[0:1]=='C':
    note=261.63
elif note1[0:1]=='D':
    note=293.66
elif note1[0:1]=='E':
    note=329.63
elif note1[0:1]=='F':
    note=349.23
elif note1[0:1]=='G':
    note=392.00
elif note1[0:1]=='A':
    note=440.00
elif note1[0:1]=='B':
    note=493.88
print( 'The frequency of the note is')
# the octave of the chosen note give the final value in (Hz).
# the frequency of any note in octave n is half the frequency of the corre-sponding note in octave n + 1.
# the calculation starts from the fourth octave
if note1[1:2]=='0':
    print(note/16,'Hz')
elif note1[1:2]=='1':
    print(note/8,'Hz') 
elif note1[1:2]=='2':
    print(note/4,'Hz')
elif note1[1:2]=='3':
    print(note/2,'Hz')
elif note1[1:2]=='4':
    print(note,'Hz') 
elif note1[1:2]=='5':
    print(note*2,'Hz') 
elif note1[1:2]=='6':
    print(note*4,'Hz')
elif note1[1:2]=='7':
    print(note*8,'Hz')
elif note1[1:2]=='8':
    print(note*16,'Hz')












