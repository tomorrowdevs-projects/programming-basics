
#Function that checks if the lis2 is a sub list of lis1

def sub_list(lis1,lis2):
    set_list = False
    if lis2 == lis1:                  #if lis2 is equal to lis1 set_list is True
        set_list = True
    elif lis2 == []:                  #if lis2 is an empty list set_list == True
        set_list = True
    elif len(lis2) > len(lis1):       #if the length of lis2 is longer then lis1 set_list is False
        set_list = False

    else:
        for ele in range(len(lis1)):                                              
            if lis1[ele] == lis2[0]:                                                  #if an element in lis1 is equal to the first element of lis2 'n' will be 1
                n = 1
                while (n < len(lis2)) and (lis1[ele + n] == lis2[n]):                 #this passage helps us to check the elements one by one of the lis1 and lis2, if the element of lis2 is not the same of the element in lis1 the sub_list wont be True
                    n += 1

                if n == len(lis2):                                                    #at the end if n will be equal to lenght of lis2 the set_list will be True
                    set_list = True
                    print(lis2)

    return set_list

a = [1,2,3,4]                     #lis1
b = [2,3]                         #lis2 True
c = []                            #lis2 True
d = [1,3]                         #lis2 False
print(sub_list(a,b))
print(sub_list(a,c))
print(sub_list(a,d))