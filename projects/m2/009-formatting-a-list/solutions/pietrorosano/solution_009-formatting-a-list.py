# When writing out a list of items in English, one normally separates the items with commas.
# In addition, the word “and” is normally included before the last item, unless the list only contains one item.

# Consider the following four lists:
# apples apples and oranges apples, oranges and bananas apples, oranges, bananas and lemons

# Write a function that takes a list of strings as its only parameter.
# Your function should return a string that contains all of the items in the list,
# formatted in the manner described previously, as its only result.
# While the examples shown previously only include lists containing four elements or less,
# your function should behave correctly for lists of any length.
# Include a main program that reads several items from the user, formats them by calling your function,
# and then displays the result returned by the function.

print("\nEnter your list")
user_input = input()

def formattingList(strn):
    L = strn.split()
    second_L = []
    second_L.append("and")
    second_L.append(L[len(L) - 1])
    L.pop(len(L) - 1)
    new = ", ".join(L)
    new2 = " ".join(second_L)
    return new + " " + new2

print(formattingList(user_input))