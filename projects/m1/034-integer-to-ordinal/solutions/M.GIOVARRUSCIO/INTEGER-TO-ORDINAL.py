"""
Words like *first*, *second* and *third* are referred to as ordinal numbers.
In this exercise, you will write a function that takes an integer as its only parameter
and returns a string containing the appropriate English ordinal number as its only result.
Your function must handle the integers between 1 and 12 (inclusive).
It should return an empty string if the function is called with an argument outside of this range.
Include a main program that demonstrates your function by displaying each integer from 1 to 12
and its ordinal number.
Your main program should only run when your file has not been imported into another program.

"""
def inserisci():
    num=int(input("Inserisci un intero:"))
    ord = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh',
           'twelfth']
    if num >= 1 and num <= 12:
        return print(ord[num - 1])
    else:
        return ""

if __name__=="__main__":
    inserisci()