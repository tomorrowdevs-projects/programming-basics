def rl_decoder(encoded_list):
    """
    Takes a run length encoded list as ["A",2,"B",1] and returns a decoded list ["A","A","B"] 
    :param encoded_list: list | run length encoded list
    :return: list | run length decoded list
    """
    # Base Case
    # if we have an empty list we have reached the end of the encoded list
    if len(encoded_list) == 0:
        return encoded_list
    # Recursive Case
    # Assuming the length of the encoded list will be always even, we can slice the first 2 items, from the rest of
    # the list, multiply the first item as many times as the second item (always a number), 
    # and concatenate it with the result of the recursive function
    first_char = encoded_list[:1]
    multiplier = encoded_list[1]
    return first_char * multiplier + rl_decoder(encoded_list[2:])


test_list = ["A", 12, "B", 4, "A", 6, "B", 1]

print(rl_decoder(test_list))