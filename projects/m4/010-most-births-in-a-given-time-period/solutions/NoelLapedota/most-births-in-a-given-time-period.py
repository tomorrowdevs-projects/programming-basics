#    Per testare ho usato i files 1900-1901 ridimensionati,perchè troppo lunghi.
#    Non sono riuscito a trovare un' alternativa al ciclo while per unire più files-ci proverò più avanti
#    cosi funziona,ma consuma troppe risorse. 
#     File: names
boys = {}
girls = {}
#   directory creation
start = input('Choose the year you are interested in - use 4 digits - between 1900 and 2012\n')
stop = input('Enter the second value - use 4 digits - between 1900 and 2012\n')

r = 'names\yob'
f = '.txt'
directory = r + start + f
directory_stop = r + stop  + f


#  opening files, reading and creating a single file with all the data

while  directory != directory_stop:
  directory = r + str(start) + f
  nuovo=open('nuovo_file.txt' ,'a')
  opened_file = open(directory, 'r')
  for name in opened_file.readlines():
    nuovo.write(name)
  nuovo.close()
  opened_file.close()
  start = int(start ) + 1
  

nuovo=open('nuovo_file.txt' ,'r')
name = nuovo.read()
name_split=name.split('\n')
print(name_split)


#creation  dictionary

for a in name_split: 
 if ',M' in a:
     index = a.index('M')
     key = a[:index-1]
     val = a[index+2:]
     if key.isalpha():
        boys[key]= int(val)
        sor = sorted(boys.values())
        for name, num in boys.items():
            if num == sor[-1]:
              name_boy = name        

 if ',F' in a:
      
      index = a.index(',F,')
      key = a[:index-1]
      val = a[index+2:]  
      girls[key]= val
      sor = sorted(girls.values())
      for name, num in girls.items():
              if num == sor[-1]:
                 name_girl = name

print(f'The most used famale name is: {name_girl}')
print()
print(f'The most used male name is: {name_boy}')
nuovo.close()
 





