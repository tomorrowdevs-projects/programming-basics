
def reverseLookup(dct, value):
    key_list = dct.keys()
    matched = []
    for key in key_list:
        if dct[key] == value:
            matched.append(key)

    return matched 
   
if __name__ == "__main__":
    dct_keys = input("Insert a list of keys separated by whitespace: ").split(" ")
    dct_values = input("Digit here the values (must be the same number of the keys): ").split(" ")
    value = input("Enter the value to search: ")
    dct = {}
    for n in range(0, len(dct_keys)):
        dct[dct_keys[n]] = dct_values[n]
    print(reverseLookup(dct, value))
