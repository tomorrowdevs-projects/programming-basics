#Your function should take two lists
#It should return True if and only if smaller is a sublist of larger
#Write a main program that demonstrates your function.
#return true when is: [], only one element, near elements in the original list, all element

def main(list1, list2):
    #return true when is: only one element
    for x in list2:
        if list1==[x]: return True
    #return true when is: []
    if list1==[]: return True
    #return true when list1=list2
    elif list1==list2: return True
    #return true when there are near elements from the original list
    x = list1[0]
    index=list2.index(x)
    for i in range(0, len(list1)):
        if list2[index]!=list1[i]: return False
        index+=1
    return True

def is_sublist(list1, list2):
    print(main(list1, list2))    

list1 = [1, 2]
list2 = [1, 2, 3, 4]
is_sublist(list1, list2)
list1 = [1, 2, 4]
list2 = [1, 2, 3, 4]
is_sublist(list1, list2)
list1 = [2, 3]
list2 = [1, 2, 3, 4]
is_sublist(list1, list2)   
list1 = []
list2 = [1, 2, 3, 4]
is_sublist(list1, list2)