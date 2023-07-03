def key_sequence_for_value(dictionary: dict, value:str):
    '''
    Return the sequence of keys on cellphone keyboard to see 'value' on its screen
    '''
    key_sequence=""
    index = 0
    value = value.capitalize()
    while True:
        if value in dictionary[index]:
            number_press = dictionary[index].index(value)+1
            for i in range(number_press):
                key_sequence += str(index)
            return key_sequence
            break
        else:
            index += 1
        if index > len(dictionary) - 1:
            raise IndexError("Chiave non trovata")


cell_keyboard = {}

punct = ".,?!:"
letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

#construction of dictonary 'cell_keyboard' {key : list of characters linked to the key}
cell_keyboard[1]=list(punct)
index_string = 0
for i in range(2,9):
    cell_keyboard[i]=list(letter[index_string:index_string+3])
    index_string += 3
cell_keyboard[9]=list(letter[-4:])
cell_keyboard[0]=[" "]

string = input("Insert a string: ")
for char in string:
    print(key_sequence_for_value(cell_keyboard,char),end="")