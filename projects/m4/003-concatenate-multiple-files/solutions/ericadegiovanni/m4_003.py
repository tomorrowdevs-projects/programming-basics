import sys
"""
Display the concatenation of one or more files whose names are provided as command line arguments. 
The files are displayed in the same order that they appear on the command line.

Display an error message:
   - if your program is started without any command line arguments.
   - For any file that cannot be displayed, then proceed to the next file.
"""

if len(sys.argv) < 2:
    print('The command line arguments are omitted.')
else:
    for i in range(1, len(sys.argv)):
        try:
           with open(sys.argv[i], 'r') as text:            
               print(text.read().rstrip())      
        except FileNotFoundError:
            print(f'An error occurred displaying \'{sys.argv[i]}\' file.') 