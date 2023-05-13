def separation(string):
    lst = string.split(sep=" ")
    return [word[:-1] if word[-1] in ",.:;-!?'" else word for word in lst]

s = input("Enter a string: ")
print(separation(s))




