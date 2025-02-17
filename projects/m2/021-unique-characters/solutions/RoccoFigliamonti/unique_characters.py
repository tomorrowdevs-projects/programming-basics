"""
Create a program that determines and displays the number of unique characters in a string entered by the user. 
For example, *Hello, World!* has 10 unique characters while zzz has only one unique character. """


mex = "Hello, World!" #add .lower() if you don't wont to distinguish between upper and lowercase
mex_dict = {}
for el in mex:
    mex_dict[el] = mex_dict.get(el,0)+1
print(mex_dict)
print(len(mex_dict))
