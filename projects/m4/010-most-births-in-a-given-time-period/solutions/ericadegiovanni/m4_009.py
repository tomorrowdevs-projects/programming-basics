
"""
Write a program that reads every file in the data set 
Identify all of the names that were most popular in at least one year.
The data set includes data for every year from 1900 to 2012.

Your program should output two lists:
one containing the most popular names for boys
other containing the most popular names for girls.

"""
boys = 'Boys'
girls = 'Girls'
start = 1990
stop = 2012

def find_common_names(start, stop, gender):
    names = []
    for year in range(start, stop + 1):
        try:
            with open(f'babynames/{year}_{gender}Names.txt', 'r') as opened_file:
                
                #process file
                name = opened_file.readline().split()[0]
                if name not in names:
                    names.append(name)
                            
        except FileNotFoundError:
            print('The file does not exist.')
    return names

def main():
    most_common_boys = find_common_names(1900, 2012, boys)
    most_common_girls = find_common_names(1900, 2012, girls)

    #display result
    print()
    print(f'The most common names for boys between {start} and {stop} are:')
    print(*most_common_boys, sep='\n')
    print()
    print(f'The most common names for girls between {start} and {stop} are:')
    print(*most_common_girls, sep='\n')
    

    
if __name__ == '__main__':
    main()