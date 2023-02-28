def is_sublist(small: list,large: list) -> bool:

    if len(small) == 0:
        return True

    if len(small)== 1:
        try:
            index = large.index(small[0])
            return True
        except ValueError:
            return False

    small_index = 0
    large_index = large.index(small[small_index])
    
    while small_index < len(small) and large_index < len(large) and large[large_index] == small[small_index]:
        small_index += 1
        large_index += 1

    if small_index < len(small):
        return False
    else:
        return True
    

print("---------------")
small = []
large = [0,4,2,3,6,7]
print("small: {}".format(small))
print("large: {}".format(large))
print("Small is a sublist of Large? ",end=" ")
print(is_sublist(small,large))

print("---------------")
small = [6]
large = [0,4,2,3,6,7]
print("small: {}".format(small))
print("large: {}".format(large))
print("Small is a sublist of Large? ",end=" ")
print(is_sublist(small,large))

print("---------------")
small = [4,2,3]
large = [0,4,2,3,6,7]
print("small: {}".format(small))
print("large: {}".format(large))
print("Small is a sublist of Large? ",end=" ")
print(is_sublist(small,large))

print("---------------")
small = [5]
large = [0,4,2,3,6,7]
print("small: {}".format(small))
print("large: {}".format(large))
print("Small is a sublist of Large? ",end=" ")
print(is_sublist(small,large))

print("---------------")
small = [4,2,7]
large = [0,4,2,3,6,7]
print("small: {}".format(small))
print("large: {}".format(large))
print("small is a sublist of large? ",end=" ")
print(is_sublist(small,large))
