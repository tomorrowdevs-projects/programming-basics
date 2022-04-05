"""# Reverse Lookup

Write a function named reverseLookup that finds all of the keys in a dictionary that map to a specific value. 
The function will take the dictionary and the value to search for as its only parameters. 
It will return a (possibly empty) list of keys from the dictionary that map to the provided value.
Include a main program that demonstrates the reverseLookup function as part of your solution to this exercise. 
Your program should create a dictionary and then show that the reverseLookup function works correctly when it returns multiple keys, a single key, and no keys. """





data_dict = {"nome1": "Alberto", "nome2":"Alfonso", "nome3":"Alfredo", "nome4": "Alfonso"}

def reverse_lookup(diction, spec_value):
    lst_key = []
    for k,v in diction.items():
        if v == spec_value:
            lst_key.append(k)
    return lst_key



print(reverse_lookup(data_dict, "Alberto"))
print(reverse_lookup(data_dict, "Alfonso"))
print(reverse_lookup(data_dict, "Aladino"))