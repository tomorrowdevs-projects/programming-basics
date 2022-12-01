def reverse_lookup(d, v):
    """Returns a list containing the keys found in the dictionary having the value given as parameter."""
    found_keys = []
    for k in d:
        if d[k] == v:
            found_keys.append(k)
    return found_keys

def create_dict(s):
    """Returns a dictionary 
    having as key-value pair the characters of the string and how many times they appear in the string."""
    d = dict()
    for character in s:
        if character not in d:
            d[character] = 1
        else: d[character] += 1
    return d

def main():
    string = input("Enter a string to convert to dict: ")
    value = int(input("Enter a value to look up in the dict: "))
    user_dict = create_dict(string)
    print("Keys having the value {}: {}".format(value, reverse_lookup(user_dict, value)))

if __name__ == "__main__":
    main()