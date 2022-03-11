"""If data is empty then Return the empty list
If the first element in data is a list then: Set l1 to the result of flattening the first element in data
    Set l2 to the result of flattening all of the elements in data, except the first: Return the concatenation of l1 and l2
If the first element in data is not a list then: Set l1 to a list containing only the first element in data
    Set l2 to the result of flattening all of the elements in data, except the first: Return the concatenation of l1 and l2"""
#Write a function that implements the recursive flattening algorithm described previously.
#Your function will take one argument, which is the list to flatten, and it will return one result, which is the flattened list.

def flattens(list1):
    #If data is empty then Return the empty list
    if list1==[]: return list1
    #If the first element in data is a list
    elif type(list1[0])==list:
        #recursive
        result=flattens(list1[0])+flattens(list1[1:])
        return result
    #If the first element in data is not a list
    result=list1[:1]+flattens(list1[1:])
    return result
        
#printing function
def main(list1):
    print(flattens(list1))
    
main([1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]])
main([])
