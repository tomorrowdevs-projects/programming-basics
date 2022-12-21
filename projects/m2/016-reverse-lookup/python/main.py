def reverse_lookup(dictionary, value):
    """Returns a list containing the keys found in the dictionary having the value given as parameter."""
    found_keys = []
    for key in dictionary:
        if dictionary[key] == value:
            found_keys.append(key)
    return found_keys

def main():
    example_dict = {"a": [1], "b": 1, "c": 2, "d": [2, 3], "e": [3], "f": "two", "g": 3, "i": [3]}
    values_to_search = [1, "one", 2, [2], [3], [2,3]]
    for v in values_to_search:
        print("Keys having the value {}: {}".format(v, reverse_lookup(example_dict, v)))

if __name__ == "__main__":
    main()