
#convert a string in a list (only in the list we knoe the position of the item)

text = input('')
text_list = list(text)

#function the convert the letters in uppercase in different situation

def message(text):
 for n in range(len(text)):
     if n < (len(text) - 1):
         if text[0] != '':
             text[0] = text_list[0].upper()
         if text[n] == 'i' and text[n + 1] == '?' and text[n - 1] == ' ':
                text[n] = text_list[n].upper()
         elif text[n] == '?' and text[n + 1] == ' ':
                text[n + 2] = text[n + 2].upper()
         elif text[n] == '!' and text[n + 1] == ' ':
                text[n + 2] = text[n + 2].upper()
         elif text[n] == '.' and text[n + 1] == ' ':
                text[n + 2] = text[n + 2].upper()
         elif text[n] == '?' and text[n + 1] != '':
                text[n + 1] = text[n + 1].upper()
         elif text[n] == '!' and text[n + 1] != '':
                text[n + 1] = text[n + 1].upper()
         elif text[n] == '.' and text[n + 1] != '':
                text[n + 1] = text[n + 1].upper()
         elif text[n] == 'i' and text[n - 1] == ' ' and text[n + 1] == ' ':
                text[n] = text[n].upper()
         elif text[n] == 'i' and text[n + 1] == '\'':
                text[n] = text[n].upper()

message(text_list)



#convert the list in a string

text_list = str(''.join(text_list))
print(text_list)