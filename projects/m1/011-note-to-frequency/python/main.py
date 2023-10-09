'''
# Note to Frequency

The following table lists an octave of music notes, beginning with middle C, along
with their frequencies.

| Note   | Frequency (Hz) |
|--------|----------------|
|   C4   |    261.63      |
|   D4   |    293.66      |
|   E4   |    329.63      |  
|   F4   |    349.23      |  
|   G4   |    392.00      |  
|   A4   |    440.00      |  
|   B4   |    493.88      |  


Begin by writing a program that **reads the name of a note** from the user and **displays the note’s frequency**.  
Your program should support all the notes listed previously.

Once you have your program working correctly for the notes listed previously 
you should add support for all the notes from C0 to C8.   
While this could be done by adding many additional cases to your if statement, such a solution is cumbersome, 
inelegant and unacceptable for the purposes of this exercise. 
Instead, you should exploit the relationship between notes in adjacent octaves. 
In particular, **the frequency of any note in octave n is half the frequency of the corresponding note in octave n + 1.** 
By using this relationship, you should be able to add support for the additional notes without 
adding additional cases to your if statement.

Hint:  
You will want to access the characters in the note entered by the user individually when completing this exercise.  
Begin by separating the letter from the octave.  
Then compute the frequency for that letter in the fourth octave using the data in the table above. 
Once you have this frequency you should divide it by 2<sup>4−x</sup> , 
where x is the octave number entered by the user. 
This will halve or double the frequency the correct number of times.

Example:  
Input = F6  
Output = 1396.9 


Input = B0  
Output = 30.8 

https://pages.mtu.edu/~suits/notefreqs.html
'''

note_frequency = 0

note_to_search = str.lower(input("\nInsert note do you want to see frequency: "))

note_letter = note_to_search[0]
note_octave = int(note_to_search[1])

match note_letter:
    case 'c':
        note_frequency = 261.63/(2**(4-note_octave))
    case 'd':
        note_frequency = 293.66/(2**(4-note_octave))
    case 'e':
        note_frequency = 329.63/(2**(4-note_octave))
    case 'f':
        note_frequency = 349.23/(2**(4-note_octave))
    case 'g':
        note_frequency = 392.00/(2**(4-note_octave))
    case 'a':
        note_frequency = 440.00/(2**(4-note_octave))
    case 'b':
        note_frequency = 493.88/(2**(4-note_octave))

print(f"{note_frequency:.1f}")