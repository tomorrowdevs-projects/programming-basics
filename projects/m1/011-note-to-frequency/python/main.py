C4 = 261.63
D4 = 293.66
E4 = 329.63
F4 = 349.23
G4 = 392.00
A4 = 440.00
B4 = 493.88

user_input = input('Type a note in Scientific pitch notation: ')

# access the caracter inserted for the note and then halve or double the frequency using the octave inserted [note / (2**^4-octave)]

if user_input[0] == 'C':
    input_octave = int(user_input[1])
    input_frequency = C4 / (2**(4-input_octave))

    print(f'{user_input} frequency is {input_frequency} Hz')

if user_input[0] == 'D':
    input_octave = int(user_input[1])
    input_frequency = D4 / (2**(4-input_octave))

    print(f'{user_input} frequency is {input_frequency} Hz')

if user_input[0] == 'E':
    input_octave = int(user_input[1])
    input_frequency = E4 / (2**(4-input_octave))

    print(f'{user_input} frequency is {input_frequency} Hz')

if user_input[0] == 'F':
    input_octave = int(user_input[1])
    input_frequency = F4 / (2**(4-input_octave))

    print(f'{user_input} frequency is {input_frequency} Hz')

if user_input[0] == 'G':
    input_octave = int(user_input[1])
    input_frequency = G4 / (2**(4-input_octave))

    print(f'{user_input} frequency is {input_frequency} Hz')

if user_input[0] == 'A':
    input_octave = int(user_input[1])
    input_frequency = A4 / (2**(4-input_octave))

    print(f'{user_input} frequency is {input_frequency} Hz')

if user_input[0] == 'B':
    input_octave = int(user_input[1])
    input_frequency = B4 / (2**(4-input_octave))

    print(f'{user_input} frequency is {input_frequency} Hz')