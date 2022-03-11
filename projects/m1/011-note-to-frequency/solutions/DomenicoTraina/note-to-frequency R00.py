user_note=input("Enter tone to know the frequency: ")

note_list=("A4","B4","C4","D4","E4","F4","G4")
frequency_list=(440.00, 493.88, 261.63, 293.66, 329.63, 349.23, 392.00)
index=0
while index <7:
    if user_note==note_list[index]:
        print("the frequency note {} is {} ".format(user_note, frequency_list[index]))
        index -= 1
        break
