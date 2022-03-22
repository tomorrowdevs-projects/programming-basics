import sys

def remove_punc(string):
    for char in string: 
        #if single letter is a punctuation marks (find throught ASCII code) remuve that
        if 32 < ord(char) < 48 or 57 < ord(char) < 65 or 90 < ord(char) < 97 or 122 < ord(char) < 192:  
            string = string.replace(char, " ") 
    return string

def compressed(list1, list2, list3, counter=0):
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
        #add counter in list2
        list2.append(counter)
        #add letter in list3
        list3.append(list1[0])
        #delete the element who are in result list
        list1.pop(0)
        compressed(list1, list2, list3)
    return list1, list2, list3

def counter():
    #if command line doesn't have argument
    if len(sys.argv)!=2:
        print("the argument in your command line is omitted!")
    else:
        try:
            f=sys.argv[1]
            list_solution=[]
            with open(f,'r') as f:
                    for line in f:
                        #remove punctuation marks with function
                        str_no_pun=remove_punc(line)
                        for word in str_no_pun.split():
                            #transform each single word in lowercase
                            word = word.lower()
                            for char in word:
                                #append letters to a list
                                list_solution.append(char)
            #create 2 lists, one for counters and one for letters
            list_counter=[]
            list_letters=[]
            #with function count how repetition for each letters in file
            result, count, letters=compressed(sorted(list_solution), list_counter, list_letters)
            #find the smallest index value in a list_counter
            index_solution=list_counter.index(min(list_counter))
            #return the compressed list and the letters with min repetition
            return result, list_letters[index_solution]
                            
        #if file doesn't exist
        except FileNotFoundError:
            print("File doesn't exist!")
            
def main():
    print(f"The repetition of single letters in this file is, and the min repetition letter is: {counter()}")

if __name__ == "__main__":
    main()