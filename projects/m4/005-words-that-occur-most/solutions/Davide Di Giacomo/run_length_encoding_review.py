#Write a recursive function that implements the run-length compression technique.
#function take a list or a string as its only argument. It should return the run-length compressed list as result.

def compressed(list1, counter=0):
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
        #delete the element who are in result list
        list1.pop(0)
        compressed(list1)
    return list1
    
"""def main(list1):
    print(compressed(list1))
    #print(f"Your input code is {list1}; now we compressed it, the result is: {compressed(list1)}")
    
list1= ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'B']
main (list1)"""