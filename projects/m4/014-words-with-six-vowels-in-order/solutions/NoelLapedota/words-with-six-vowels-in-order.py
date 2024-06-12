import re

input_file_path = input('Insert the path of your original text to redact: ')

vowels = 'aeiouy'
file = []
count = 0
n_vowels = 0

try:

# files reading  
 
 with open(input_file_path,'r') as f:
# eliminated punctuation
   for word in f.read().split():
       out = re.sub(r'[^\w\s]','',word)
       if len(word) >= len (vowels):
          file.append(out.lower())
  
 #  vocal number search in words
  
 while count != len(file):
     for  letter in file[count]:
        if letter in vowels:
            n_vowels += 1
            if n_vowels == 6:
              print(f'this word has the required requisites : {file[count]}')
       
       
     count += 1
     n_vowels = 0

except FileNotFoundError:
    print('File not found')
