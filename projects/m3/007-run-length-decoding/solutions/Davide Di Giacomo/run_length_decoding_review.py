#Write a recursive function that decompresses a run-length encoded list. 
#Your recursive function will take a run-length compressed list as its only argument. return the decompressed list as result.
#main program that displays a run-length encoded list and the result of decoding it.

#use recursion to moltiplicate the first element of list with second
#after that delete those two element e repeat this while the list is  egual to []


def decompressed(list1):
    if len(list1)<=1: return list1
    else:
        #if the second element in list is 0, delete the first and second element in input list 
        if list1[1]==0:
            list1.pop(0)
            list1.pop(0)
            decompressed(list1)
        else: #if the first and second elements are not the same, append to the list the first element and -1 to the second element
            if list1[0]!=list1[1]:
                list1.append(list1[0])
                list1[1]=int(list1[1])-1
                decompressed(list1)
    return list1
    
def main(list1):
    print(f"Your list {list1} in a decompressive way is: {decompressed(list1)}")
    
main(["A", 12, "B", 4, "A", 6, "B", 1])