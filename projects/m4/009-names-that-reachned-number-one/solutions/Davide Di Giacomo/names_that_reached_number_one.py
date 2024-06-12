#Write a program that reads every file in the data set and identifies all of the names that were most popular in at least one year.
#Your program should output two lists: one containing the most popular names for boys and for girls.
  
# Folder Path
path = "./data_names/"

#two lists: one containing the most popular names for boys and for girls.
boys_list=[]
girls_list=[]
  
# Read the most popular name
def read_name(file, boys_list, girls_list):
    try:
        with open(file, 'r') as f:
            for line in f:
                #split line to find the name
                word=line.split(",")
                #append most popular name to list
                if word[1]=="M" and len(boys_list)<1: boys_list.append(word[0])
                elif word[1]=="F" and len(girls_list)<1: girls_list.append(word[0])
                #stop cicle when find names
                elif len(boys_list)==1 and len(girls_list)==1: break
    #if file doesn't exist
    except FileNotFoundError:
        print("File doesn't exist!")
  
def main(): 
    #two lists: one containing the most popular names for boys and for girls.
    boys_list=[]
    girls_list=[]
    year=input("Insert a year between 1900 and 2012 to find who was the most popular name: ")
    #find file in text format
    file=path+"yob"+year+".txt"
    # call read text file function
    read_name(file, boys_list, girls_list)
    print(f"For the year {year} the most popular boys name was: {boys_list} and the most popular girls name was: {girls_list}")
        
if __name__ == "__main__":
    main()