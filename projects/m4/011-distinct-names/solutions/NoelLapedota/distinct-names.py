import os

aggregg_m = []
aggregg_f = []

path = r'C:\Users\mrleo\Desktop\Test\programming-basics\projects\m4\011-distinct-names\solutions\NoelLapedota\names'

#    creation of the function that read files, and divides them by gender into 2 lists

def recursive_list(path):
    with open(path,'r') as f:
        f.readline()
        for a in  f:
          if ',M' in a:
             index = a.index('M')
             name_m = a[:index-1]
             if name_m.isalpha()and name_m not in aggregg_m :
               aggregg_m.append(name_m)

          elif ',F' in a:
             index = a.index('F')
             name_f = a[:index-1]
             
             if name_f.isalpha()and name_f not in aggregg_f :
               aggregg_f.append(name_f)

        return aggregg_m
        return aggregg_f
 
#   opening files with reading with recursive function

for file in os.listdir(path):
   if file.endswith('.txt'):
       pathname = os.path.join(path,file)
       recursive_list(pathname)
       print(aggregg_m)
       print('\n')
       print(aggregg_f)
        

