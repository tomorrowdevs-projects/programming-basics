input_file_path = input('Insert the path of your original text to redact: ')
sensitive_words_path = input('Insert the path of the file containing the sensitive words: ')
output_file = input("Enter the name for the new redacted file -including extension-\n")


#   files reading + new file

try:
    
 with open(input_file_path,'r') as sen, open(output_file,'a') as new_file ,open(sensitive_words_path,'r')as f:
     
    files = f.read().lower()
    lista_sen=  sen.read().split()
    for words in lista_sen:
         words.lower()
         for a in files:
           a.lower()
#    replace file

    replaced_text = files.replace(words,'*' * len(words))
    new_file.write(replaced_text)
 print(replaced_text)
      
except FileNotFoundError:
    print('File not found') 
