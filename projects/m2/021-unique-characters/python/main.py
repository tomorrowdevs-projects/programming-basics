string = input("Insert a string ")

set_of_char = set()

for i in string:
    set_of_char.add(i)

print("Unique characters in '{}' are {}".format(string,len(set_of_char)))



