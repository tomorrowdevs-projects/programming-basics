m1/011-note-to-frequency by Francesco Ricci
# refactoring nomi variabili e messaggi output

def isNumber(value):
    #va in typerror se la input passa una stringa
    if value.isdecimal():
        # is int number
        return True
    else:
        # is not int number
        print('value not number!')
        return False

def isNoteLenValid(value):
    if len(value) > 1:
        # is note len valid
        return True
    else:
        # is not note len valid
        print('Note len not valid! ')
        return False


def isNote(value):
    note_valid = 'CDEFGAB'
    if value in note_valid:
        # is note
        return True
    else:
        # is not note
        print('Note not valid! ')
        return False

def isOctave(value):
    value = int(value)
    if value > -1 and value < 9:
        # is octave valid
        return True
    else:
        # is not octave valid
        print('Octave not valid! ')
        return False

def print_frequency(note, octave):
    note = note.upper()
    octave = int(octave)
    if note == 'C':
        frequency = 261.63
    elif note == 'D':
        frequency = 293.66
    elif note == 'E':
        frequency = 329.63
    elif note == 'F':
        frequency = 349.23
    elif note == 'G':
        frequency = 392.00
    elif note == 'A':
        frequency = 440.00
    elif note == 'B':
        frequency = 493.00

    print((frequency / 2**(4 - octave)))

inp_note = input('Enter note: ')

# controllare la lunghezza della inp_nota inserita
if isNoteLenValid(inp_note):
    inp_note =  inp_note [: 2]
    note = inp_note[:1].upper()
    octave = inp_note[-1]

    # controllare la validita della nota
    # controllare se l'ottava è numerica e la validita della ottava
    if isNote(note) and isNumber(octave) and isOctave(octave):
        print_frequency(note, octave)
