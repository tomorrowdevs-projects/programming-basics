# File: names

year = input('Choose the year you are interested in - use 4 digits -')
r = 'names\yob'
f = '.txt'
directory = r + year + f

with open(directory, 'r') as opened_file:
    #process file
    name = opened_file.read()
    print(name)

             
