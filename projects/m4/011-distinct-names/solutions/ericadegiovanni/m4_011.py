import os

"""
Read every file in the baby names data set described in "Names that Reached Number One" Exercise.
Keep track of every distinct name used for a boy and every distinct name used for a girl. 
Output each of these lists of names. 

"""

def find_common_names():
    names = []

    #loop trough the file in babynames and read all the content of each file
    for file in os.listdir('babynames'):
        try:
            with open(f'babynames/{file}') as opened_file:
                line = opened_file.readline()
                while line != "":
                    line = opened_file.readline()

                    # condition to avoid index error if line is []
                    if line:
                        name = line.split()[0]
                        if name not in names:
                            names.append(name)

        except FileNotFoundError:
            print('File not found')
    return names
        
def main():

    #display the list with the names
    print(find_common_names())

if __name__ == '__main__':
    main()


       



  
  

  
  
  
  
