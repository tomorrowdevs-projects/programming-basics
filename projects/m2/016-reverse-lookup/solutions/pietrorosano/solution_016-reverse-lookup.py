# Write a function named reverseLookup that finds all of the keys in a dictionary that map to a specific value.
# The function will take the dictionary and the value to search for as its only parameters.
# It will return a (possibly empty) list of keys from the dictionary that map to the provided value.
# Include a main program that demonstrates the reverseLookup function as part of your solution to this exercise.
# Your program should create a dictionary and then show that the reverseLookup function works correctly
# when it returns multiple keys, a single key, and no keys.
# Ensure that your main program only runs when the file containing your solution to this exercise has not been imported
# into another program.

print("\nEnter a value")
value = int(input())

my_dict = {"Michael":1, "Peter":2, "Lucy":3, "Elisa":2, "Giulio":2}

def reverseLookup(d, v):
    list_keys = list(d.keys())
    list_values = list(d.values())
    for val in list_values:
        if val == v:
            print(list_keys[list_values.index(val)])
    
    

reverseLookup(my_dict, value)