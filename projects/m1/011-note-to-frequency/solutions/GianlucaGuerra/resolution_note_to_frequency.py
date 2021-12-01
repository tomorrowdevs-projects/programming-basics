#formula to calculate the frequency
#f = (k**n) * fo 
#k = 1.05946

note = str(input("Please insert a note from A to G: "))
octave = int(input("Please insert an octave from 1 to 8: "))


if note == str('A'): 
  print("The frequency of your note is: " + str(440.00 / 2**(4 - int(octave))) + ' Hz')
elif note == str('B'):
    print("The frequency of your note is: " + str(493.88 / 2**(4 - int(octave))) + ' Hz')
elif note == str('C'):
    print("The frequency of your note is: " + str(261.63 / 2**(4 - int(octave))) + ' Hz')
elif note == str('D'):
    print("The frequency of your note is: " + str(293.66 / 2**(4 - int(octave))) + ' Hz')
elif note == str('E'):
    print("The frequency of your note is: " + str(329.63 / 2**(4 - int(octave))) + ' Hz')
elif note == str('F'):
    print("The frequency of your note is: " + str(349.23 / 2**(4 - int(octave))) + ' Hz')
elif note == str('G'):
    print("The frequency of your note is: " + str(392.00 / 2**(4 - int(octave))) + ' Hz')
