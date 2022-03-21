input_file_path = input('Insert the path of your original text to redact: ')
sensitive_words_path = input('Insert the path of the file containing the sensitive words: ')
output_file = input("Enter the name for the new redacted file -including extension-\n")


#   files reading + new file
                                              
try:
    
 with open(input_file_path,'r') as sen, open(output_file,'w') as new_file ,open(sensitive_words_path,'r')as f:
     
    files = f.read().lower().split()
    book = sen.read().lower()
    words= [words.lower().rstrip() for words in files]
    # il testo viene cifrato
    for word in words:
     
      replaced_text = book.replace(word, '*' * len(word))
      book = replaced_text         # I had to do this otherwise every time he encrypted only 1 word
    
   # write new file

    new_file.write(replaced_text)
 with open('new_file.txt','r')as file:
 
  print(file.read())
    
 
      
except FileNotFoundError:
    print('File not found') 

