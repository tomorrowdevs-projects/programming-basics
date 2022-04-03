"""
Consider the following four lists:
*apples*
*apples and oranges*
*apples, oranges and bananas*
*apples, oranges, bananas and lemons*

Write a function that takes a list of strings as its only parameter. Your function should return a string that contains all of the items in the list, formatted in the manner described previously, as its only result. While the examples shown previously only include lists containing four elements or less, your function should behave correctly for lists of any length"""


def formatting_list(lst):
    new_lst = ""
    if len(lst)>1:
        lst[-2] = str(lst[-2] + " and ")
        #print(lst)
        for i in lst[:-2]:
            new_lst += i + ", "
        new_lst += str(lst[-2]) + str(lst[-1])
        return new_lst
    else:
        return lst
            
list_of_things = ["apples", "oranges"]
new_list_of_things = formatting_list(list_of_things)
print(new_list_of_things)

list_of_things2 = ["apples", "oranges", "bananas"]
new_list_of_things2 = formatting_list(list_of_things2)
print(new_list_of_things2)

list_of_things3 = ["apples", "oranges", "bananas", "lemons", "cherries","strawberries"]
new_list_of_things3 = formatting_list(list_of_things3)
print(new_list_of_things3)

