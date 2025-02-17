#A sublist is a list that is part of a larger list. A sublist may be a list containing a single element, multiple elements, or even no elements at all. For example, [1], [2], [3] and [4] are all sublists of [1, 2, 3, 4]. The list [2, 3] is also a sublist of [1, 2, 3, 4], but [2, 4] is not a sublist [1, 2, 3, 4] because the elements 2 and 4 are not adjacent in the longer list. The empty list is a sublist of any list. As a result, [] is a sublist of [1, 2, 3, 4]. A list is a sublist of itself, meaning that [1, 2, 3, 4] is also a sublist of [1, 2, 3, 4].In this exercise you will create a function, isSublist, that determines whether or not one list is a sublist of another. Your function should take two lists, larger and smaller, as its only parameters. It should return True if and only if smaller is a sublist of larger. Write a main program that demonstrates your function.

def searching(longer,shorter):
  output=True
  #2 points approach. Both of them will keep trace of the values in longer array and in shorter array. PointerI will keep trace of the value in the longer array, pointerJ will keep trace of the value in the shorter array
  pointerI=0
  pointerJ=0
  #the counter is used to keep trace of the occurrency between longer and shorter
  counter=0
  #if the length of the shorter array is =0, return True.
  if(len(shorter)==0):
    return output
  else:
   i=0
   #while loop to loop through the lenght of the longer array
   while i < len(longer):   
    #if the value of longer[pointerI] is different by shorter[pointerJ] update the pointerI by 1 to move forward in the longer array
    if longer[pointerI] != shorter[pointerJ]:
      i=i+1
      pointerI=pointerI+1
      continue
    #if the value of longer[pointerI] is equal to shorter[pointerJ] update the pointerI and pointerJ by 1 to move forward in both of the array. 
    else:     
      counter=counter+1
      pointerJ=pointerJ+1
      pointerI=pointerI+1
      i=i+1
    #condition to quit the loop
      if(counter==len(shorter)):
        break  
  #if the counter is not equal to the length of longer array the output will be false
  if(counter !=len(shorter)):
    output=False

  return output
  

print(searching([1,2,3,5,6],[2,3])) 
print(searching([1,2,3,4,1],[2,5]))
print(searching([1,2,3,4,1],[]))
print(searching([1,2,3,4,1],[2,2,3]))
print(searching([1,2,3,4,1],[1,2]))




