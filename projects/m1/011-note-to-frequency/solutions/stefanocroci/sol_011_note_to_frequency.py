
def my_function(req):

    #Creat note and frequencies list and split the input in note and octave
    note_list = ('CDEFGAB')
    freq_list4 = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88] 
    note = req[0].upper()
    octave = req[1]

    #Check the input is correct
    if len(req) > 2:
        print('ERROR! You should insert just two digits')
        return
    elif note not in note_list:
        print('ERROR! Are you sure this is a note?')
        return  
    
    #Find the correspondence between notes and frequnecies
    note_index = note_list.find(note)
    freq4 = freq_list4[note_index]
    #Find the correspondence between octaves and frequnecies
    new_freq = float(freq4) / 2 ** (4 - int(octave))
    print(new_freq)

#Ask the user for an input and diplay the output   
request = input('insert a note: ')
my_function(request)    


