user_tone=input("Enter tone to know the frequency (A-G): ")

user_octave=int(input("Enter octave (1-8): "))
tone_frequency_list1=(261.63/8, 293.66/8, 329.63/8, 349.23/8, 392.00/8, 440.00/8, 493.88/8)
tone_list=('A', 'B', 'C', 'D', 'E', 'F', 'G')
tone_number=len(tone_list)

index=0

while index<tone_number:
    if tone_list[index]==user_tone:
        octava_frequency= tone_frequency_list1[index]*(2**(user_octave-1))
        print("Frequency of {}{} tone is {} Hz".format(user_tone,user_octave,octava_frequency))
        break
    else: index += 1