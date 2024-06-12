"""# Average

In this exercise you will create a program that computes the average of a collection of values entered by the user.
The user will enter 0 as a sentinel value to indicate that no further values will be provided.
Your program should display an appropriate error message if the first value entered by the user is 0.

Hint: Because the 0 marks the end of the input it should not be included in the average.
"""

num=[]
while True:
    num.append(int(input("Please insert a number: ")))
    if num[0] == 0:
        print('error')
        break
    elif num[-1] == 0:
        result = sum(num) / (len(num)-1)
        print(f'The Average of the list is: {round(result,2)}')
        break

