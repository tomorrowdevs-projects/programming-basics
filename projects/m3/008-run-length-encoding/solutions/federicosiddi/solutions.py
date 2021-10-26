def rl_encoder(input_list):
    """
    Takes a run length decoded list as ["A","A","B"] and returns an encoded list ["A",2,"B",1]
    :param input_list: list | char list to encode
    :return: list | run length encoded list
    """
    # Base Case
    # If we have an empty list we have reached the end of the recursion
    if len(input_list) == 0:
        return []
    # Recursive Case
    # we initialize the counter that we will use as index to compare the item of the loop with the next item
    count = 1
    for char in input_list:
        # we iterate the list until we found the next different char or until we have reached the last item of the list
        if count < len(input_list) and char == input_list[count]:
            count += 1
        else:
            # at this point we have counted all the identical chars starting from the beginning of the list
            counted_char_list = [char, count]
            # then we concatenate the first encoded part with the result of the recursive function having the rest
            # of the list as input
            return counted_char_list + rl_encoder(input_list[count:])


test_list = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'B']
print(rl_encoder(test_list))