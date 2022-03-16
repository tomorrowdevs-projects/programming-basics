import sys
import string

"""
Detect repeated words in a text file. 
Display a message that contains the line number and the repeated word.
Handle the case where the same word appears at the end of one line and the beginning of the following line.
"""

if len(sys.argv) != 2:
    print('You inserted the wrong number of arguments.')
else:
    try:
        with open(sys.argv[1], 'r') as opened_file:
            lines = []

            #process text 
            for line in opened_file:
                for l in line:
                   if l in string.punctuation:
                        line = line.replace(l, "").lower().rstrip()
                #separate each word in the list
                lines.append(line.split())

            #find the repeated words  
            for i in range(len(lines)):
                for i2 in range(1, len(lines[i])):
                    line = lines[i]
                    
                    if line[i2 -1] == line[i2]:
                        print(f'Line {i + 1}, repeated the word \'{line[i2]}\'.')

                # when the same word appears at the end of one line and the beginning of the following line
                if i != len(lines)-1 and line[-1] == lines[i +1][0]:           
                    print(f'Line {i + 1} and {i + 2}, repeated the word \'{lines[i +1][0]}\'.')

              
    except FileNotFoundError:
        print(f'Error, the program is unable to open the file \'{sys.argv[1]}\'.') 