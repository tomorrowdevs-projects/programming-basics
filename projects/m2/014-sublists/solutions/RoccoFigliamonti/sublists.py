"""# Does a List Contain a Sublist?

A sublist is a list that is part of a larger list. A sublist may be a list containing a single element, multiple elements, or even no elements at all. For example, [1], [2], [3] and [4] are all sublists of [1, 2, 3, 4]. The list [2, 3] is also a sublist of [1, 2, 3, 4], but [2, 4] is not a sublist [1, 2, 3, 4] because the elements 2 and 4 are not adjacent in the longer list.
The empty list is a sublist of any list. As a result, [] is a sublist of [1, 2, 3, 4]. A list is a sublist of itself, meaning that [1, 2, 3, 4] is also a sublist of [1, 2, 3, 4].

In this exercise you will create a function, isSublist, that determines whether or not one list is a sublist of another.
Your function should take two lists, larger and smaller, as its only parameters.
It should return True if and only if smaller is a sublist of larger. Write a main program that demonstrates your function.
"""


def isSublist(larger,smaller):
    total_lst_sublist = []
    for i in range(0,len(larger)):
        for j in range(i,len(larger)):
            total_lst_sublist.append(larger[i:j+1])
    total_lst_sublist.append([])
    #print(total_lst_sublist)
    if smaller in total_lst_sublist:
        return True
    else:
        return False


listbig = [1,2,3,4,5]
sublist1 = [2,3,4]
sublist2 = [2,3,5]
sublist3 = []
sublist4 = [1,2,3,4,5]

print(isSublist(listbig,sublist1))
print(isSublist(listbig,sublist2))
print(isSublist(listbig,sublist3))
print(isSublist(listbig,sublist4))

