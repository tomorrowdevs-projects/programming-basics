#Write a function named reverseLookup that finds all of the keys in a dictionary that map to a specific value. The function will take the dictionary and the value to search for as its only parameters. It will return a (possibly empty) list of keys from the dictionary that map to the provided value. Include a main program that demonstrates the reverseLookup function as part of your solution to this exercise. Your program should create a dictionary and then show that the reverseLookup function works correctly when it returns multiple keys, a single key, and no keys. Ensure that your main program only runs when the file containing your solution to this exercise has not been imported into another program.


dictionary =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
} 

def findingKeys(obj,inpValue):
 output=[]
 for key,value in obj.items():
     if(key==inpValue):
           output.append(key)
 return output

print(findingKeys(dictionary,"brand"))
