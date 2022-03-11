#    Write a program that reads every file in the data set and identifies 
#    all of the names that were most popular in at least one year.
#    Your program should output two lists: one containing the most popular names
#    for boys and the other containing the most popular names for girls.


# File: names
boys = []
girls = []
year = input('Choose the year you are interested in - use 4 digits -')
r = 'names\yob'
f = '.txt'
directory = r + year + f

with open(directory, 'r') as opened_file:
    #process file
    name = opened_file.read()
    for find in name:
        if find == ',F,':
             if find not in girls:
               girls.append(find)
        else:
            if find not in boys:
             boys.append(find)


    print(f'the female names are:\n {girls}')
   
    print(f'the male names are:\n {boys}')
     
       

 






         