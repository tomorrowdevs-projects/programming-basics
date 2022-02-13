
note = input('Che nota vorresti?')
octave = int(input('che ottava di quella nota?'))

frequenza_c = 261.63
calc_frequenza_c = frequenza_c/(2**(4-octave))      #Calcolo della frequenza inserita dall'utente da 0 a 9 

frequenza_d = 293.66
calc_frequenza_d = frequenza_d/(2**(4-octave))      

frequenza_e = 329.63
calc_frequenza_e = frequenza_e/(2**(4-octave))      

frequenza_f = 349.23
calc_frequenza_f = frequenza_f/(2**(4-octave))

frequenza_g = 392.00
calc_frequenza_g = frequenza_g/(2**(4-octave))

frequenza_a = 440.00
calc_frequenza_a = frequenza_a/(2**(4-octave))

frequenza_b = 493.88
calc_frequenza_b = frequenza_b/(2**(4-octave))



if note[0:1] == 'c' and octave <= 9 and octave >= 0:
    print(f'The frequenzy of {note.upper()}{octave}  is {calc_frequenza_c:.2f}(HZ)')
elif note[0:1] == 'd' and octave <= 9 and octave >=0:
    print(f'The frequenzy of {note.upper()}{octave}  is {calc_frequenza_d:.2f}(HZ)')
elif note[0:1] == 'e' and octave <= 9 and octave >=0:
    print(f'The frequenzy of {note.upper()}{octave}  is {calc_frequenza_e:.2f}(HZ)')
elif note[0:1] == 'f' and octave <= 9 and octave >=0:
    print(f'The frequenzy of {note.upper()}{octave}  is {calc_frequenza_f:.2f}(HZ)')
elif note[0:1] == 'g' and octave <= 9 and octave >=0:
    print(f'The frequenzy of {note.upper()}{octave}  is {calc_frequenza_g:.2f}(HZ)')
elif note[0:1] == 'a' and octave <= 9 and octave >= 0:
    print(f'The frequenzy of {note.upper()}{octave}  is {calc_frequenza_a:.2f}(HZ)')
elif note[0:1] == 'b' and octave <= 9 and octave >=0:
    print(f'The frequenzy of {note.upper()}{octave}  is {calc_frequenza_b:.2f}(HZ)')
else:
    print('Error: your note or octave is not correct!!')