def reverseLookup(dictionary,value):
    keys = []
    for x in dictionary:
        if dictionary[x] == value:
            keys.append(x)

    return(keys)

def main():
    my_dict = {"a" : 1,    # Demonstration of reverseLookup function:
               "b" : 2,    # user will enter a value, and if value is mapped
               "c" : 3,    # to one or more keys in "my_dict", the program
               "d" : 4,    # will that specific key/keys, else it will return
               "e" : 1}    # an empty list (no keys).
    
    user_value = int(input("Enter a value: "))
    print(reverseLookup(my_dict,user_value))

if __name__ == "__main__":
    main()