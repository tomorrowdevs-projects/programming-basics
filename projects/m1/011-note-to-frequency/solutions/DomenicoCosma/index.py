
try:

 note = input('Tell me one letter from A to G')
 octave = int(input('Tell me one number From 0 to 9'))




 if note[0:1] == 'c' and octave <= 9 and octave >= 0:
    print(f'The frequenzy of {261.63 / (2**(4-octave)):.2f}(HZ)')
 elif note[0:1] == 'd' and octave <= 9 and octave >=0:
    print(f'The frequenzy of {293.66 / (2**(4-octave)):.2f}(HZ)')
 elif note[0:1] == 'e' and octave <= 9 and octave >=0:
    print(f'The frequenzy of {329.63 / (2 ** (4 - octave)):.2f}(HZ)')
 elif note[0:1] == 'f' and octave <= 9 and octave >=0:
    print(f'The frequenzy of {349.23 / (2 ** (4 - octave)):.2f}(HZ)')
 elif note[0:1] == 'g' and octave <= 9 and octave >=0:
    print(f'The frequenzy of {392.00 / (2 ** (4 - octave)):.2f}(HZ)')
 elif note[0:1] == 'a' and octave <= 9 and octave >= 0:
    print(f'The frequenzy of {440.00 / (2 ** (4 - octave)):.2f}(HZ)')
 elif note[0:1] == 'b' and octave <= 9 and octave >=0:
    print(f'The frequenzy of {493.88 / (2 ** (4 - octave)):.2f}(HZ)')
 else:
    print('Error: your note or octave is not correct!!')
except:
    print('Error: please follow the request')
