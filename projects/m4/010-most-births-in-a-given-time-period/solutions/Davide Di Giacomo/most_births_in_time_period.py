#Write a program to determine which names were used most often within a time period.
#input the first and last years of the range to analyze.
#Display the boy’s name and the girl’s name given to the most children during the indicated years.

# Folder Path
path = "./data_names/"

#two lists: one containing the most popular names for boys and for girls.
boys_list=[]
girls_list=[]

# Read the most popular name
def read_name(file, boys_list, girls_list):
    boys_original_len=len(boys_list)
    girls_original_len=len(girls_list)
    try:
        with open(file, 'r') as f:
            for line in f:
                #split line to find the name
                word=line.split(",")
                #append most popular name to list
                if word[1]=="M" and len(boys_list)<boys_original_len+1: boys_list.append(word[0])
                elif word[1]=="F" and len(girls_list)<girls_original_len+1: girls_list.append(word[0])
                #stop cicle when find names
                elif len(boys_list)==boys_original_len+1 and len(girls_list)==girls_original_len+1: break
    #if file doesn't exist
    except FileNotFoundError:
        print("File doesn't exist!")
        
def compressed(list1, counter=0):
    #while the first element in the input is egual to second element
    while list1[0]==list1[1]:
        #add counter and delete each repetition in list
        counter+=1
        list1.pop(0)
    #if the second element in list isn't a counter
    if type(list1[1])!=int:
        #if it is only one element add 1 to counter
        if counter==0: counter+=1
        #add the first element and counter to the result list
        list1.append(list1[0])
        list1.append(counter)
        #delete the element who are in result list
        list1.pop(0)
        compressed(list1)
    return list1
        
def main(): 
    #two lists: one containing the most popular names for boys and for girls.
    boys_list=[]
    girls_list=[]
    #input the period
    year1=int(input("Insert a year between 1900 and 2012 to start an interval: "))
    year2=int(input("Insert a year between 1900 and 2012 to end an interval: "))
    # Check through each year with a loop
    for x in range (year1, year2+1):
        file=path+"yob"+str(x)+".txt"
        #call read text file function
        read_name(file, boys_list, girls_list)
    #compressed list to count how many repetition
    print(f"From the year {year1} to {year2} the most popular boys name were: {(compressed(boys_list))} and the most popular girls name were: {(compressed(girls_list))}")
        
if __name__ == "__main__":
    main()