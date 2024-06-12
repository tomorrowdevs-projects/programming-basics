"""
When analysing data collected as part of a science experiment it may be desirable to remove the most extreme values before performing other calculations.
Write a function that takes a list of values and an non-negative integer, n, as its parameters.
The function should create a new copy of the list with the n largest elements and the n smallest elements removed.
Then it should return the new copy of the list as the function’s only result. The order of the elements in the returned list does not have to match the order of the elements in the original list.

Write a main program that demonstrates your function. It should read a list of
numbers from the user and remove the two largest and two smallest values from it by calling the function described previously. Display the list with the outliers removed, followed by the original list. Your program should generate an appropriate error message if the user enters less than 4 values.
"""


def remove_outlier(lst, num):
    lst_sort = sorted(lst)
    final_list = lst_sort[num:-num] 
    return final_list


lista = [33, 2, 35, 94, 68, 5, 44, 26]
lista_mod = remove_outlier(lista,2)
print(lista_mod)
print(lista)
