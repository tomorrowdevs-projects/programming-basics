# File: names
boys = []
girls = []
year = input('Choose the year you are interested in - use 4 digits - between 1900 and 2012')
r = 'names\yob'
f = '.txt'
directory = r + year + f

with open(directory, 'r') as opened_file:
    #process file
    name = opened_file.read()
    list=name.split('\n')
    for  a in list:
      if ',F,' in a:
         if a not in girls:
           girls.append(a)
           
      else:
         if a not in boys:
             boys.append(a) 
  # display result      
        
print(f'the female names are:\n {girls}')
   
print(f'the male names are:\n {boys}')
   
  
