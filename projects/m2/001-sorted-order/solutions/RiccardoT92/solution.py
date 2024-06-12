'''Write a program that reads integers from the user and stores them in an array. 
Your program should continue reading values until the user enters 0. 
Then it should display all of the values entered by the user (except for the 0) in ascending order, with one value appearing on each line. 
Use either the sort method or the sorted function to sort the array.'''







def ordinate(lst):
    #create new list empty
    new_lst=[]
    #loop in lst
    for x in lst:
        #if x==0 continue loop
        if x==0:
            continue
        #append and ord number int
        new_lst.append(x)
        new_lst.sort()
    return new_lst  