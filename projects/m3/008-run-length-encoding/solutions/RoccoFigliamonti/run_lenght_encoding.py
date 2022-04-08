"""Write a recursive function that implements the run-length compression technique described in Run-Lenght Decoding Exercise. 
Your function will take a list or a string as its only argu- ment. It should return the run-length compressed list as its only result. 
Include a main program that reads a string from the user, compresses it, and displays the run-length
encoded result.

Hint: You may want to include a loop inside the body of your recursive function.
["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]`would be compressed as `["A",12,"B",4,"A",6,"B",1]"""


def compress_list(lst):
    if len(lst)==0:
        return lst
    else:
        count = 1
        for i in lst:
            if count < len(lst) and i == lst[count]:
                count += 1
            else:
                ciao = [i, count]
                return ciao + compress_list(lst[count:])

lst = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]
print(compress_list(lst))


