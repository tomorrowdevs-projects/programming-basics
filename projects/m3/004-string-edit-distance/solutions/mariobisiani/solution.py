#script to calculate the edit distance between two strings

#edit distance recursive calculation
def editDistance(str1, str2,i):
    #condition for string with same length
    if len(first_string)==len(second_string):
        if i <= (min(len(str1),len(str2))-1):
            if str1[i] == str2[i]:
                i+=1
                return editDistance(str1, str2,i)
            else:
                i+=1
                return 1 + editDistance(str1, str2,i)
        else: 
            return 0

    #conditiion for strings with different length
    else:
        if i < (min(len(str1),len(str2))-1):
            if str1[i] == str2[i]:
                i+=1
                return editDistance(str1, str2,i)
            else:
                i+=1
                return 1 + editDistance(str1, str2,i)
        else:
            #add the difference between length of the strings
            return abs(len(first_string) - len(second_string))
    


#main algorithm
def main(first_string, second_string):
    if len(first_string) == 0:
        return len(second_string)

    elif len(second_string) == 0:
        return len(first_string) 

    else:
        cost = 0

    if first_string[-1] != second_string[-1]:
        cost = 1
    
    if len(first_string) <= len(second_string):
        min_string = first_string
        max_string = second_string 
    else:
        min_string = second_string
        max_string = first_string 
    
    d1 = editDistance(min_string,max_string[:-1],0) + 1
    d2 = editDistance(min_string[:-1],max_string,0) + 1
    d3 = editDistance(min_string[:-1],max_string[:-1],0) + cost
    
    return min(d1,d2,d3)


#catch two string from user
first_string = input('Enter first string: ')
second_string = input('Enter second string: ')
#call funtion for calculate edit distance
edit_distance = main(first_string, second_string)
#print results
print(f'The edit distance between \"{first_string}\" and \"{second_string}\" is',edit_distance)