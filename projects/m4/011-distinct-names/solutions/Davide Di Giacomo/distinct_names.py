# your program reads the files, it should keep track of every distinct name used for a boy and every distinct name used for a girl.
#should output each of these lists of names. Neither of the lists should contain any repeated values.

# Folder Path
path = "./data_names/"


#two lists: one containing the names for boys and for girls.
boys_list=[]
girls_list=[]

# bring all names during this year
def read_name(file, boys_list, girls_list):
    try:
        with open(file, 'r') as f:
            for line in f:
                #split line to find the name
                word=line.split(",")
                #append all names who aren't in list
                if word[1]=="M" and word[0] not in boys_list: boys_list.append(word[0])
                elif word[1]=="F" and word[0] not in girls_list: girls_list.append(word[0])
    #if file doesn't exist
    except FileNotFoundError:
        print("File doesn't exist!")

def main(): 
    #two lists: one containing the most popular names for boys and for girls.
    boys_list=[]
    girls_list=[]
    # input years period
    year1=int(input("Insert a year between 1900 and 2012 to start an interval: "))
    year2=int(input("Insert a year between 1900 and 2012 to end an interval: "))
    # Check each single file with a loop
    for x in range (year1, year2+1):
        file=path+"yob"+str(x)+".txt"
        #call read text file function
        read_name(file, boys_list, girls_list)
    print(f"Fror the year {year1} to {year2} the all boys name used are: {sorted(boys_list)} and the all girls name used are: {sorted(girls_list)}")
        
if __name__ == "__main__":
    main()