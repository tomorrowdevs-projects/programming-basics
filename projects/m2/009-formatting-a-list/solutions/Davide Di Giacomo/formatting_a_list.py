# string that contains all of the items in the list
#separates the items with commas, the last one with "and"
#write a function to determinate lenght of the input
#trasform string in a list of words
#create a function to append commas at the end of a single word
#if the lenght>1 put "and" between the last 2 elements
#put "," between the others

#function to determinate lenght of the input
def lenght_string(string):
    if len(string)>1: return True
    else: return False
#function to append commas at the end of a single word    
def add_commas(string):
    words=[]
    #trasform string in a list of words
    word=string.split(" ")
    for x in range(0, len(word)):
        check = list(word[x])
        check.append(",")
        check= "".join(check)
        words.append(check)
    return words
    
def to_list(string):
    if lenght_string(string) is True:
        word=string.split(" ")
        list1=list(word)
        last_element=list1[-1]
        penultimate_element=list1[-2]
        #call function to add commas ad the end of words without last 2 elements
        if len(list1)>2:
                list1.remove(list1[-2])
                list1.remove(list1[-1])
                new_string=" ".join(list1)
                commas=add_commas(new_string)
                commas.append(last_element)
                commas.append(penultimate_element)
                commas.insert(-1, "and")
                final_string=" ".join(commas) 
                return final_string
        #put "and" between the last 2 elements    
        else: list1.insert(-1, "and") 
        final_string=" ".join(list1) 
        return final_string
#main program that reads string, displays the result returned.    
def main():
    string=input("Insert a string to trasform in a list: ")
    print(to_list(string))
    
main()

