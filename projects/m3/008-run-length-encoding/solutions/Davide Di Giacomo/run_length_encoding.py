#Write a recursive function that implements the run-length compression technique.
#function take a list or a string as its only argument. It should return the run-length compressed list as result.

compressed_result=[]

def compressed(list1, x=0, counter=0):
    if len(list1)>=2:
        #while the first element in the input is egual to second element
        while list1[x]==list1[x+1]:
            #add counter and delete each repetition in list
            counter+=1
            list1.pop(0)
        #add the first element and counter to the result list
        compressed_result.append(list1[x])
        compressed_result.append(counter)
        #delete the element who are in result list
        list1.pop(0)
        #recursive
        compressed(list1)
    else:
        #if there is only one element in list add it and "1" to the reult list
        compressed_result.append(list1[x])
        compressed_result.append(1)
    return compressed_result
    
def main(list1):
    print(f"Your input code is {list1}; now we compressed it, the result is: {compressed(list1)}")
    
main(["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"])