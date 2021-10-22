test_list = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]
test_list2 = [1, 2, 3, 4, 5]
test_list3 = ["a", ["b", "c"], ["d", ["e", ["f", "g"]]], [[["h"], "i"], ["l"]]]
test_list4 = ["one", ["two", "three"], ["four", ["five", ["six", "seven"]]], [[["eight"], "nine"], ["ten"]]]

def flatten(input_list):
    # Base Case
    # if we have an empty list we have found the inner element of the list
    # so we return an empty list 
    if len(input_list) == 0:
        return input_list
    
    # Recursive Case
    # if the first item is a list we proceed recursive slicing until we found a single
    # element to concatenate it with an empty list, example [[1]] => [1]+[]
    if (type(input_list[0])) == list:
        flattened_list = flatten(input_list[0]) + flatten(input_list[1:])
        return flattened_list
    
    # if the first item is not a list we slice the item from the list
    # and concatenate it with the output of the flatten function with
    # the remaining list as input 
    return input_list[:1] + flatten(input_list[1:])


print(flatten(test_list))
print(flatten(test_list2))
print(flatten(test_list3))
print(flatten(test_list4))
